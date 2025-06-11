import { CiDiscount1 } from "react-icons/ci";
import { Column, Row } from "../../layouts/row_column";
import MenuItem from "../../ui/menu_item/MenuItem";
import styles from "./Cart.module.css";
import { RiGroupLine } from "react-icons/ri";
import { BsSave2 } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import clsx from "clsx";
// import { CURRENCY } from "../../../config";
import QuantitySelector from "../../ui/product_item/QuantitySelector";
import CurrencyUI from "../../ui/currency_formatter/CurrencyUI";
import { useNumberFormatter } from "../../../hooks/useNumberFormatter";

export const CartItem = ({ counter }: { counter: number }) => {
  const { formatCurrency } = useNumberFormatter();
  return (
    <Row className={styles.cartItem}>
      <Column>
        <p>{counter}. Delux crispy vegan burger</p>
        <CurrencyUI amount={formatCurrency(9999999.99)} />
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
  const { formatCurrency } = useNumberFormatter();
  return (
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
          category_id={"1"}
          sub_category_id={"1"}
          isActive={false}
          icon={<MdOutlineDeliveryDining />}
          className={styles.sideAction}
        />
        <MenuItem
          callback={() => {}}
          label="Customers"
          category_id={"1"}
          sub_category_id={"1"}
          isActive={false}
          icon={<RiGroupLine />}
          className={styles.sideAction}
        />
        <MenuItem
          callback={() => {}}
          label="Discount"
          category_id={"1"}
          sub_category_id={"1"}
          isActive={false}
          icon={<CiDiscount1 />}
          className={styles.sideAction}
        />
        <MenuItem
          callback={() => {}}
          label="Save Bill"
          category_id={"1"}
          sub_category_id={"1"}
          isActive={false}
          icon={<BsSave2 />}
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
        <h4>Order Details</h4>

        <Column className={styles.orderContent}>
          {[...new Array(15).values()].map((_, k: any) => (
            <CartItem key={k} counter={k + 1} />
          ))}
        </Column>
      </Column>
    </Column>
  );
};
export default Cart;
