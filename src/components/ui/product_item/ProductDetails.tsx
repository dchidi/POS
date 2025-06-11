import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import { Column, Row } from "../../layouts/row_column";
import CurrencyUI from "../currency_formatter/CurrencyUI";
import styles from "./ProductDetails.module.css";
import QuantitySelector from "./QuantitySelector";

export const ProductDetails = () => {
  const { formatCurrency } = useNumberFormatter();
  return (
    <Column className={styles.root}>
      <Column className={styles.modalTop}>
        <Row gap={10} align="center">
          <img src="/public/burger1.jpg" className={styles.productImg} />
          <Column>
            <p className={styles.itemName}>
              Delux Crispy Vegan Buger with Onion Rings
            </p>
            <CurrencyUI
              amount={formatCurrency(2.5)}
              className={styles.amount}
            />
          </Column>
        </Row>
        <Column className={styles.itemDescription}>
          <h5>Description</h5>
          {`Pea protein, lentils, mushrooms, sunflower oil, beetroot extract
            (for color), smoked paprika, garlic powder, onion powder, sea salt,
            Whole wheat flour, water, yeast, sugar, sesame seeds`}
        </Column>
      </Column>
      <Column className={styles.modalBody}>
        <Row justify="space-between">
          <div className={styles.lbl}>Qty</div>
          <QuantitySelector
            category_id="1"
            product_id="1"
            quantity={1}
            sub_category_id="1"
            unit_price={20}
            className={styles.qtySelector}
          />
        </Row>
        <Column gap={10}>
          <div>Size</div>
          <Row>
            <input type="text" value={"Regular"} />
          </Row>
          <Row>
            <input type="text" value={"Small"} />
          </Row>
        </Column>
        <Column gap={10}>
          <div>Notes</div>
          <Row>
            <input type="text" value={"Regular"} placeholder="Add some notes" />
          </Row>
        </Column>
        <Row justify="space-between">
          <div>Total</div>
          <CurrencyUI amount={formatCurrency(2.5)} />
        </Row>
        <Row gap={10} align="center" justify="center">
          <button>Cancel</button>
          <button>Add</button>
        </Row>
      </Column>
    </Column>
  );
};
