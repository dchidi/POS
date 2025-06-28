import clsx from "clsx";
import { CURRENCY } from "../../../app_config";
import styles from "./CurrencyUI.module.css";
import { Row } from "../../layouts/row_column";

const CurrencyUI: React.FC<{
  amount: string;
  className?: string;
  showCurrencySymbol?: boolean;
}> = ({ amount = 0.0, className = "", showCurrencySymbol = true }) => {
  const rootCss = clsx(styles.root, className);
  return (
    <Row align="center" className={rootCss}>
      {showCurrencySymbol && CURRENCY.symbol}
      {amount}
    </Row>
  );
};
export default CurrencyUI;
