import { createContext, useContext } from "react";

export const EnquiryContext = createContext(null);

export const useEnquiry = () => {
  const value = useContext(EnquiryContext);
  if (!value) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return value;
};
