import { CiDiscount1 } from "react-icons/ci";
import { Column, Row } from "../../layouts/row_column";
import MenuItem from "../../ui/menu_item/MenuItem";
import styles from "./Cart.module.css";
import { RiGroupLine } from "react-icons/ri";
import { BsSave2 } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import clsx from "clsx";
import QuantitySelector from "../../ui/product_item/QuantitySelector";
import CurrencyUI from "../../ui/currency_formatter/CurrencyUI";
import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import Modal from "../../ui/modal/Modal";
import Discount from "../../ui/discount/Discount";
import { useState } from "react";

export const CartItem = ({ counter }: { counter: number }) => {
  const { formatCurrency } = useNumberFormatter();
  return (
    <Row className={styles.cartItem}>
      <Column>
        <p>{counter}. Delux crispy vegan burger</p>
        <CurrencyUI
          amount={formatCurrency(9999999.99)}
          className={styles.amount}
        />
        <QuantitySelector
          category_id="1"
          product_id="1"
          quantity={1}
          sub_category_id="1"
          className={styles.qtySelector}
          unit_price={300}
        />
      </Column>
      {/* <h3>{CURRENCY.symbol}0.00</h3> */}
    </Row>
  );
};

const Cart: React.FC<{ className?: string }> = ({ className }) => {
  const css = clsx(styles.root, className);

  // This is a duplicate of logic both in quantitySelector and here. Optimize it
  const [showDiscount, setShowDiscount] = useState(false);
  const closeDiscountModal = () => setShowDiscount(false);

  const { formatCurrency } = useNumberFormatter();
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
      <Column className={css}>
        <Row
          gap={5}
          className={styles.cartQuickActions}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <MenuItem
            callback={() => {}}
            label="Online Orders"
            name="online_orders"
            category_id={"1"}
            sub_category_id={"1"}
            isActive={false}
            icon={<MdOutlineDeliveryDining size={20} />}
            className={styles.sideAction}
          />
          <MenuItem
            callback={() => {}}
            label="Customers"
            name="customers"
            category_id={"1"}
            sub_category_id={"1"}
            isActive={false}
            icon={<RiGroupLine size={15} />}
            className={styles.sideAction}
          />
          <MenuItem
            callback={() => setShowDiscount(true)}
            label="Discount"
            name="discount"
            category_id={"1"}
            sub_category_id={"1"}
            isActive={false}
            icon={<CiDiscount1 size={20} />}
            className={styles.sideAction}
          />
          <MenuItem
            callback={() => {}}
            label="Save Bill"
            name="save_bill"
            category_id={"1"}
            sub_category_id={"1"}
            isActive={false}
            icon={<BsSave2 size={15} />}
            className={styles.sideAction}
          />
        </Row>
        <Column className={styles.orderSummary} gap={6}>
          <Row align="center" justify="space-between">
            <p>Subtotal</p>
            <CurrencyUI amount={formatCurrency(10400.99)} />
          </Row>
          <Row align="center" justify="space-between">
            <p>VAT</p>

            <CurrencyUI amount={formatCurrency(0)} />
          </Row>
          <Row align="center" justify="space-between">
            <p>Voucher</p>

            <CurrencyUI amount={formatCurrency(10)} />
          </Row>
          <Row align="center" justify="space-between" className={styles.nmbl}>
            <p>Total</p>
            <CurrencyUI
              amount={formatCurrency(10410.99)}
              className={styles.total}
            />
          </Row>
        </Column>

        <Column className={styles.orderDetails}>
          <Row
            align="center"
            justify="space-between"
            className={styles.orderHeader}
          >
            <h4>Order Details</h4>
            <button className={styles.btnTransaction}>
              Process Transaction
            </button>
          </Row>

          <Column className={styles.orderContentContainer}>
            <Column className={styles.orderContent}>
              {[...new Array(15).values()].map((_, k: any) => (
                <CartItem key={k} counter={k + 1} />
              ))}
            </Column>
          </Column>
        </Column>
      </Column>
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
export default Cart;
