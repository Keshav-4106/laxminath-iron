#!/usr/bin/env node
// Turns each route into its own static HTML file after `vite build`, so link previews
// (WhatsApp, Facebook) and search engines get the real title, description, canonical,
// share image and page text without running JavaScript. React then attaches to that HTML.
//
// Inputs:  dist/index.html (client build) and dist-ssr/entry-server.js (server build).
// Outputs: dist/index.html, dist/sariya.html, dist/cement.html, dist/contact.html,
//          dist/enquiry.html and dist/404.html. Cloudflare Pages serves /sariya from
//          sariya.html automatically and uses 404.html for unknown addresses.
// Any missing or duplicated SEO tag fails the build.

import { readFile, writeFile, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE_URL } from "../src/config/site.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SSR_DIR = path.join(ROOT, "dist-ssr");

export const ROUTES = [
  { url: "/", file: "index.html", indexable: true },
  { url: "/sariya", file: "sariya.html", indexable: true },
  { url: "/cement", file: "cement.html", indexable: true },
  { url: "/contact", file: "contact.html", indexable: true },
  { url: "/enquiry", file: "enquiry.html", indexable: false },
  { url: "/__not-found__", file: "404.html", indexable: false },
];

// React 19 emits <title>, <meta> and <link> elements first; they belong in <head>.
const HEAD_TAG = /^\s*(<title(?:\s[^>]*)?>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?\/?>)/;

export function splitHead(html) {
  let rest = html;
  const tags = [];
  let match;
  while ((match = HEAD_TAG.exec(rest))) {
    tags.push(match[1]);
    rest = rest.slice(match[0].length);
  }
  return { head: tags, body: rest };
}

const count = (tags, re) => tags.filter((t) => re.test(t)).length;
const attr = (tags, re, name) => {
  const tag = tags.find((t) => re.test(t));
  const m = tag && tag.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1].replace(/&amp;/g, "&") : null;
};

export function checkHead(route, tags) {
  const problems = [];
  if (count(tags, /^<title/) !== 1) problems.push(`expected 1 <title>, found ${count(tags, /^<title/)}`);
  if (route.indexable) {
    if (count(tags, /name="description"/) !== 1) problems.push("expected 1 meta description");
    const canonical = attr(tags, /rel="canonical"/, "href");
    const expected = route.url === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.url}`;
    if (canonical !== expected) problems.push(`canonical is ${canonical}, expected ${expected}`);
    const image = attr(tags, /property="og:image"/, "content");
    if (!image || !image.startsWith("https://")) problems.push(`og:image must be an absolute https URL (got ${image})`);
    if (count(tags, /name="robots"/)) problems.push("indexable page must not have a robots meta tag");
  } else if (!tags.some((t) => /name="robots"/.test(t) && /noindex/.test(t))) {
    problems.push("non-indexable page needs <meta name=\"robots\" content=\"noindex\">");
  }
  return problems;
}

export function buildPage(template, html) {
  const { head, body } = splitHead(html);
  const page = template
    .replace(/\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta name="description"[^>]*>/, "")
    .replace("</head>", `    ${head.join("\n    ")}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return { page, head };
}

async function main() {
  const template = await readFile(path.join(DIST, "index.html"), "utf8");
  if (!template.includes('<div id="root"></div>')) throw new Error('dist/index.html has no empty <div id="root"></div>');

  const entry = (await readdir(SSR_DIR)).find((f) => /^entry-server\.m?js$/.test(f));
  if (!entry) throw new Error("dist-ssr/entry-server.js not found — did the SSR build run?");
  const { render } = await import(pathToFileURL(path.join(SSR_DIR, entry)).href);

  const failures = [];
  for (const route of ROUTES) {
    const { page, head } = buildPage(template, render(route.url));
    const problems = checkHead(route, head);
    if (problems.length) failures.push(`${route.url}: ${problems.join("; ")}`);
    await writeFile(path.join(DIST, route.file), page);
    console.log(`[prerender] ${route.url.padEnd(15)} -> dist/${route.file} (${head.length} head tags)`);
  }
  await rm(SSR_DIR, { recursive: true, force: true });
  if (failures.length) throw new Error(`SEO checks failed:\n  ${failures.join("\n  ")}`);
}

const samePath = (a, b) => (process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b);
if (process.argv[1] && samePath(path.resolve(process.argv[1]), fileURLToPath(import.meta.url))) {
  main().catch((e) => {
    console.error(`[prerender] ERROR: ${e.message}`);
    process.exit(1);
  });
}
