// Dark mode preference. The page markup never depends on this value (the sun/moon icons
// switch with CSS), so prerendered HTML and the browser always agree. index.html applies
// the saved theme before first paint to avoid a flash.
const EVENT = "laxminath-theme-change";
let memoryChoice = null; // used when localStorage is blocked

function readChoice() {
  try {
    return window.localStorage.getItem("darkMode");
  } catch {
    return memoryChoice;
  }
}

export function getThemeSnapshot() {
  const saved = readChoice();
  if (saved === "true") return true;
  if (saved === "false") return false;
  return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)").matches);
}

// During hydration, use whatever index.html already applied, so nothing flips.
export const getThemeServerSnapshot = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark");

export function subscribeTheme(listener) {
  const media = window.matchMedia?.("(prefers-color-scheme: dark)");
  window.addEventListener(EVENT, listener);
  window.addEventListener("storage", listener);
  media?.addEventListener?.("change", listener);
  return () => {
    window.removeEventListener(EVENT, listener);
    window.removeEventListener("storage", listener);
    media?.removeEventListener?.("change", listener);
  };
}

export function setDarkMode(isDark) {
  memoryChoice = String(isDark);
  try {
    window.localStorage.setItem("darkMode", String(isDark));
  } catch {
    // Storage blocked: the choice lasts for this visit only.
  }
  window.dispatchEvent(new Event(EVENT));
}
