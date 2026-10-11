// Pure helpers for the enquiry list: line maths, validation and the WhatsApp message.
// No React here, so these can be tested on their own.

export const MAX_QTY = 9999;
export const MAX_LOCATION = 80;
export const MAX_NAME = 60;

export const CATEGORY_TITLES = {
  sariya: "Polaad QST Fe 550D TMT Sariya",
  cement: "MP Birla Cement",
};

export const clampQty = (value) => {
  const n = typeof value === "number" ? value : parseInt(value, 10);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.floor(n), MAX_QTY);
};

const hasPrice = (p) => typeof p.price === "number";

const unitWord = (unit, n) => {
  const word = unit === "bar" ? "bar" : unit;
  return n === 1 ? word : `${word}s`;
};

const rupees = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

// One selected product → its numbers. amount is null when the product has no price.
// Sariya is always rate-on-WhatsApp, so it never carries an amount even if the sheet has a price.
export function lineFor(product, qty) {
  const weightKg = product.priceBasis === "kg" ? qty * product.unitWeightKg : null;
  let amount = null;
  if (hasPrice(product) && product.category !== "sariya") amount = product.priceBasis === "kg" ? weightKg * product.price : qty * product.price;
  return { product, qty, weightKg, amount };
}

// quantities: { [productId]: qty }. Unknown, hidden or out-of-stock ids are dropped.
export function buildLines(products, quantities) {
  return products
    .filter((p) => p.availability !== "out_of_stock")
    .map((p) => lineFor(p, clampQty(quantities[p.id] ?? 0)))
    .filter((line) => line.qty > 0);
}

export function summarize(lines) {
  const priced = lines.filter((l) => l.amount !== null);
  const byCategory = {};
  for (const l of lines) {
    const c = (byCategory[l.product.category] ??= { lines: [], weightKg: 0, amount: 0, unpriced: 0 });
    c.lines.push(l);
    if (l.weightKg) c.weightKg += l.weightKg;
    if (l.amount !== null) c.amount += l.amount;
    else c.unpriced += 1;
  }
  return {
    count: lines.length,
    byCategory,
    amount: priced.reduce((sum, l) => sum + l.amount, 0),
    unpricedCount: lines.length - priced.length,
    allGstExtra: priced.length > 0 && priced.every((l) => l.product.gstIncluded === false),
  };
}

export function validateDetails({ deliveryMode, location, name }) {
  const errors = [];
  if (deliveryMode !== "delivery" && deliveryMode !== "pickup") errors.push("Choose home delivery or self-pickup.");
  const loc = (location ?? "").trim();
  if (deliveryMode === "delivery" && loc.length < 2) errors.push("Enter your delivery village or area.");
  if (loc.length > MAX_LOCATION) errors.push(`Delivery location must be under ${MAX_LOCATION} characters.`);
  if ((name ?? "").trim().length > MAX_NAME) errors.push(`Name must be under ${MAX_NAME} characters.`);
  return errors;
}

// Strip characters that would break WhatsApp formatting or create fake lines.
const clean = (text, max) =>
  (text ?? "").replace(/[\r\n\t*_~`]+/g, " ").replace(/ {2,}/g, " ").trim().slice(0, max);

export function buildMessage(lines, { deliveryMode, location, name }) {
  const s = summarize(lines);
  const out = ["*Laxminath Iron – Material Enquiry*", ""];

  for (const category of ["sariya", "cement"]) {
    const group = s.byCategory[category];
    if (!group) continue;
    out.push(`*${CATEGORY_TITLES[category]}*`);
    for (const l of group.lines) {
      const p = l.product;
      if (category === "sariya") {
        // Sariya is enquiry-only: sizes and bar counts, no weight or amount.
        out.push(`- ${p.variant} TMT: ${l.qty} ${unitWord(p.unit, l.qty)}`);
        continue;
      }
      let line = `- ${p.name}: ${l.qty} ${unitWord(p.unit, l.qty)}`;
      if (l.amount !== null) line += ` @ ${rupees(p.price)}/${p.priceBasis === "kg" ? "kg" : p.unit} = ${rupees(l.amount)}`;
      else line += " (price on request)";
      out.push(line);
    }
    if (category === "sariya") {
      const bars = group.lines.reduce((sum, l) => sum + l.qty, 0);
      out.push(`Total: ${bars} ${unitWord("bar", bars)}`);
    } else if (group.amount > 0) {
      const gstExtra = group.lines.some((l) => l.amount !== null && l.product.gstIncluded === false);
      const notes = [gstExtra ? "+ GST" : "", group.unpriced ? "priced items only" : ""].filter(Boolean).join(", ");
      out.push(`*Cement total: ${rupees(group.amount)}${notes ? ` (${notes})` : ""}*`);
    }
    out.push("");
  }

  out.push("*Delivery*");
  if (deliveryMode === "pickup") out.push("- Self-pickup");
  else out.push(`- Home delivery to: ${clean(location, MAX_LOCATION)}`);
  const who = clean(name, MAX_NAME);
  if (who) out.push(`- Name: ${who}`);
  out.push("");
  out.push(
    s.byCategory.sariya
      ? "Please share today's sariya rate and total weight quote, and confirm availability and transport charges."
      : "Please confirm today's rate, availability and transport charges."
  );
  return out.join("\n");
}
