import React, { useState } from "react";
import styles from "./Discount.module.css";
import { Column, Row } from "../../layouts/row_column";
import { BsDot, BsFillBackspaceFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { CURRENCY } from "../../../app_config";

interface DiscountProps {
  closeFn: () => void;
  callbackFn: ({
    discountValue,
    discountType,
  }: {
    discountValue: number;
    discountType: string;
  }) => void;
}

const DISCOUNT_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
  "00",
];

const Discount: React.FC<DiscountProps> = ({ closeFn, callbackFn }) => {
  const [discount, setDiscount] = useState("0");
  const [discountTypePercent, setDiscountType] = useState(true);

  // Simple handler doesn't need useCallback
  const handleValueInput = (value: string) => {
    setDiscount((prev) => {
      // Block duplicate decimal points
      if (value === "." && prev.includes(".")) return prev;

      // Replace if current value is all zeros (0, 00, 000 etc.)
      if (/^0+$/.test(prev)) return value === "." ? "0." : value;

      // Normal append for all other cases
      return prev + value;
    });
  };

  // Basic state resetter doesn't need memoization
  const handleClear = () => setDiscount("0");

  // Simple string manipulation doesn't need memoization
  const handleBackspace = () => {
    setDiscount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleSubmit = () => {
    callbackFn({
      discountValue: parseFloat(discount),
      discountType: discountTypePercent ? "percent discount" : "value discount",
    });
    closeFn();
  };

  const toggleDiscountType = () => setDiscountType(!discountTypePercent);

  return (
    <Column className={styles.root}>
      <Row justify="center" className={styles.titleLabel}>
        Discount
      </Row>

      <Row justify="center" className={styles.discountLabel}>
        {discount}
        <span>{discountTypePercent ? "%" : CURRENCY.symbol}</span>
      </Row>

      <Row>
        <div className={styles.numberPad}>
          {DISCOUNT_VALUES.map((value) => (
            <button
              key={value}
              type="button"
              className={styles.keys}
              onClick={() => handleValueInput(value)}
              aria-label={`Input ${value}`}
            >
              {value !== "." ? value : <BsDot />}
            </button>
          ))}
        </div>

        <Column justify="space-evenly" align="center">
          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleBackspace}
            aria-label="Backspace"
          >
            <BsFillBackspaceFill />
          </button>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleClear}
            aria-label="Clear"
          >
            <GrPowerReset />
          </button>
          <Column
            // type="button"
            className={styles.actionBtnToggle}
            onClick={toggleDiscountType}
            aria-label="Backspace"
            justify="center"
            gap={8}
          >
            <div>{discountTypePercent ? "%" : CURRENCY.symbol}</div>
            <div>{discountTypePercent ? CURRENCY.symbol : "%"}</div>
          </Column>
        </Column>
      </Row>

      <button
        className={styles.btn}
        onClick={handleSubmit}
        aria-label="Apply discount"
      >
        Enter
      </button>
    </Column>
  );
};

// Only use React.memo if the component is actually expensive to render
export default Discount;
