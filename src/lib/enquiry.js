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
export function lineFor(product, qty) {
  const weightKg = product.priceBasis === "kg" ? qty * product.unitWeightKg : null;
  let amount = null;
  if (hasPrice(product)) amount = product.priceBasis === "kg" ? weightKg * product.price : qty * product.price;
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
      const label = category === "sariya" ? `${p.variant} Fe 550D` : p.name;
      let line = `• ${label} – ${l.qty} ${unitWord(p.unit, l.qty)}`;
      if (l.weightKg !== null) line += ` (≈${l.weightKg.toFixed(1)} kg)`;
      if (l.amount !== null) {
        const rate = `₹${p.price.toLocaleString("en-IN")}/${p.priceBasis === "kg" ? "kg" : p.unit}`;
        line += ` @ ${rate} = ${rupees(l.amount)}`;
      } else line += " – price on request";
      out.push(line);
    }
    if (category === "sariya" && group.weightKg > 0) {
      const tons = group.weightKg >= 1000 ? ` (${(group.weightKg / 1000).toFixed(2)} ton)` : "";
      out.push(`Nominal weight: ≈${group.weightKg.toFixed(1)} kg${tons}`);
    }
    out.push("");
  }

  if (s.amount > 0) {
    const notes = [s.allGstExtra ? "+ GST" : "", s.unpricedCount ? `priced items only` : ""].filter(Boolean).join(", ");
    out.push(`*Indicative total: ${rupees(s.amount)}${notes ? ` (${notes})` : ""}*`);
    out.push("This is an estimate, not a final quotation.");
  } else {
    out.push("*Price: on request*");
  }
  out.push("");

  out.push("*Delivery*");
  if (deliveryMode === "pickup") out.push("• Self-pickup");
  else out.push(`• Home delivery to: ${clean(location, MAX_LOCATION)}`);
  const who = clean(name, MAX_NAME);
  if (who) out.push(`• Name: ${who}`);
  out.push("");
  out.push("Please confirm today's rate, availability, GST and transport charges.");
  return out.join("\n");
}
