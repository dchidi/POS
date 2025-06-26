import { TbCurrencyNaira } from "react-icons/tb";

const APP_NAME = "ScanPay";
const API_URL = import.meta.env.VITE_API_URL;
const FEATURE_ENABLED = import.meta.env.VITE_FEATURE_ENABLED === "true";
const CURRENCY = {
  name: "naira",
  code: "NGN",
  symbol: <TbCurrencyNaira size={15} />,
};

export { APP_NAME, API_URL, FEATURE_ENABLED, CURRENCY };
