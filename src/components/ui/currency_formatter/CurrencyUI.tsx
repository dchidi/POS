import clsx from "clsx";
import { CURRENCY } from "../../../config";
import styles from "./CurrencyUI.module.css";

const CurrencyUI: React.FC<{ amount: string; className?: string }> = ({
  amount = 0.0,
  className = "",
}) => {
  const rootCss = clsx(styles.root, className);
  return (
    <div className={rootCss}>
      {CURRENCY.symbol}
      {amount}
    </div>
  );
};
export default CurrencyUI;
