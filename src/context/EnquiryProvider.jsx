import React, { useCallback, useMemo, useSyncExternalStore } from "react";
import { EnquiryContext } from "./enquiryContext";
import { products } from "../data/catalog";
import { buildLines, clampQty, summarize } from "../lib/enquiry";
import { subscribe, getSnapshot, getServerSnapshot, update } from "../lib/enquiryStore";

const withQty = (quantities, id, qty) => {
  const next = { ...quantities };
  const n = clampQty(qty);
  if (n > 0) next[id] = n;
  else delete next[id];
  return next;
};

const EnquiryProvider = ({ children }) => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setQty = useCallback((id, qty) => update((prev) => ({ ...prev, quantities: withQty(prev.quantities, id, qty) })), []);
  const changeQty = useCallback(
    (id, delta) => update((prev) => ({ ...prev, quantities: withQty(prev.quantities, id, (prev.quantities[id] ?? 0) + delta) })),
    []
  );
  const setDetails = useCallback((patch) => update((prev) => ({ ...prev, ...patch })), []);
  const clearList = useCallback(() => update((prev) => ({ ...prev, quantities: {} })), []);

  const lines = useMemo(() => buildLines(products, state.quantities), [state.quantities]);
  const summary = useMemo(() => summarize(lines), [lines]);

  const value = useMemo(
    () => ({
      quantities: state.quantities,
      deliveryMode: state.deliveryMode,
      location: state.location,
      name: state.name,
      lines,
      summary,
      setQty,
      changeQty,
      setDetails,
      clearList,
    }),
    [state, lines, summary, setQty, changeQty, setDetails, clearList]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
};

export default EnquiryProvider;
