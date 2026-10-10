// The enquiry list lives in this small store (not in React state) so that:
//  - prerendered HTML always starts from an empty list (getServerSnapshot), and
//  - after the page loads, the browser's saved list is applied without a hydration mismatch.
// Saved in localStorage when available; works in memory when storage is blocked.
import { products } from "../data/catalog";
import { clampQty, MAX_LOCATION, MAX_NAME } from "./enquiry";

const STORAGE_KEY = "laxminath-enquiry-v1";
const EMPTY = Object.freeze({ quantities: Object.freeze({}), deliveryMode: "delivery", location: "", name: "" });
const listeners = new Set();
let state = null;

function loadSaved() {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const saved = JSON.parse(raw);
    const known = new Set(products.map((p) => p.id));
    const quantities = {};
    for (const [id, qty] of Object.entries(saved?.quantities ?? {})) {
      const n = clampQty(qty);
      if (known.has(id) && n > 0) quantities[id] = n;
    }
    return {
      quantities,
      deliveryMode: saved?.deliveryMode === "pickup" ? "pickup" : "delivery",
      location: typeof saved?.location === "string" ? saved.location.slice(0, MAX_LOCATION) : "",
      name: typeof saved?.name === "string" ? saved.name.slice(0, MAX_NAME) : "",
    };
  } catch {
    return EMPTY;
  }
}

const emit = () => listeners.forEach((listener) => listener());

export const getSnapshot = () => {
  if (state === null) state = loadSaved();
  return state;
};

export const getServerSnapshot = () => EMPTY;

export function subscribe(listener) {
  listeners.add(listener);
  // Keep several open tabs in step.
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY) {
      state = loadSaved();
      emit();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function update(change) {
  state = change(getSnapshot());
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable: keep working in memory.
  }
  emit();
}
