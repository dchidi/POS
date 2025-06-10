import React from "react";
import styles from "./QuantitySelector.module.css";
import { Row } from "../../layouts/row_column";
import { FaMinus, FaPlus } from "react-icons/fa";
import clsx from "clsx";
import { MdDelete } from "react-icons/md";

interface QuantitySelectorProps {
  isItemSelected?: boolean;
  product_id: string;
  category_id: string;
  sub_category_id: string;
  className?: string;
  quantity: number;
  unit_price: number;
}
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  isItemSelected = false,
  product_id,
  category_id,
  sub_category_id,
  className = "",
  quantity = 0,
  unit_price = 0,
}) => {
  const root = clsx(styles.root, className);
  const highlight = clsx(styles.btn, { [styles.highlight]: isItemSelected });

  const fnText = () => {
    console.log(product_id, category_id, sub_category_id, unit_price);
  };

  return (
    <Row className={root} gap={20} align="center">
      <Row className={styles.actions} gap={10} align="center">
        <button className={styles.deleteBtn} onClick={fnText}>
          <MdDelete />
        </button>
        <button className={styles.btn} onClick={fnText}>
          <FaMinus color="black" />
        </button>
        <div className={styles.counter}>{quantity}</div>
        <button className={highlight}>
          <FaPlus color="black" />
        </button>
      </Row>
      {/* <div>
        {CURRENCY.symbol}
        {formatCurrency(unit_price * quantity)}
      </div> */}
    </Row>
  );
};
export default QuantitySelector;
