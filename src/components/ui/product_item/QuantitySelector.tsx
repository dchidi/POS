import React, { useState } from "react";
import styles from "./QuantitySelector.module.css";
import { Row } from "../../layouts/row_column";
import { FaMinus, FaPlus } from "react-icons/fa";
import clsx from "clsx";
import { MdDelete } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Modal from "../modal/Modal";
import Discount from "../discount/Discount";

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
  // isItemSelected = false,
  product_id,
  category_id,
  sub_category_id,
  className = "",
  quantity = 0,
  unit_price = 0,
}) => {
  const root = clsx(styles.root, className);
  // const highlight = clsx(styles.btn, { [styles.highlight]: isItemSelected });

  const fnText = () => {
    console.log(product_id, category_id, sub_category_id, unit_price);
  };

  // This is a duplicate of logic both in cart and here. Optimize it
  const [showDiscount, setShowDiscount] = useState(false);
  const closeDiscountModal = () => setShowDiscount(false);

  const discountFn = ({
    discountValue,
    discountType,
  }: {
    discountValue: number;
    discountType: string;
  }) => {
    console.log(discountValue, discountType);
  };

  return (
    <>
      <Row className={root} gap={20} align="center">
        <Row className={styles.actions} gap={10} align="center">
          {quantity === 1 ? (
            <button className={styles.deleteBtn} onClick={fnText}>
              <MdDelete size={16} />
            </button>
          ) : (
            <button className={styles.btn} onClick={fnText}>
              <FaMinus size={16} />
            </button>
          )}
          <div className={styles.counter}>{quantity}</div>
          <button className={styles.btn}>
            <FaPlus size={16} />
          </button>
          <button className={styles.btn} onClick={() => setShowDiscount(true)}>
            <CiDiscount1 size={16} />
          </button>
        </Row>
        {/* <div>
        {CURRENCY.symbol}
        {formatCurrency(unit_price * quantity)}
      </div> */}
      </Row>
      <Modal
        isOpen={showDiscount}
        onClose={closeDiscountModal}
        hasCloseBtn={false}
      >
        <Discount closeFn={closeDiscountModal} callbackFn={discountFn} />
      </Modal>
    </>
  );
};
export default QuantitySelector;
