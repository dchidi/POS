import clsx from "clsx";
import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import { Column, Row } from "../../layouts/row_column";
import CurrencyUI from "../currency_formatter/CurrencyUI";
import styles from "./ProductDetails.module.css";
import QuantitySelector from "./QuantitySelector";

export const Items: React.FC<{
  name: string;
  amount: number;
  isSelected?: boolean;
  callback: () => void;
}> = ({ name, amount, isSelected = false, callback }) => {
  const { formatCurrency } = useNumberFormatter();
  const css = clsx(styles.item, { [styles.active]: isSelected });
  return (
    <Row
      align="center"
      justify="space-between"
      className={css}
      wrap="wrap"
      onClick={callback}
    >
      <div>{name}</div>
      <CurrencyUI amount={formatCurrency(amount)} />
    </Row>
  );
};
export const ProductDetails = () => {
  const { formatCurrency } = useNumberFormatter();
  const { image, item, amount, ingredients, qty, options } = {
    image: "/burger1.jpg",
    item: "Delux Crispy Vegan Buger with Onion Rings",
    amount: 2.5,
    ingredients: `Pea protein, lentils, mushrooms, sunflower oil, beetroot extract
            (for color), smoked paprika, garlic powder, onion powder, sea salt,
            Whole wheat flour, water, yeast, sugar, sesame seeds`,
    qty: 3,
    options: [
      {
        title: "Size",
        list: [
          { title: "Regular", amount: 2.5 },
          { title: "Large", amount: 4 },
          { title: "Small", amount: 2 },
        ],
      },
      {
        title: "Ice",
        list: [
          { title: "Regular", amount: 0 },
          { title: "Less Ice", amount: 0 },
          { title: "Extra Ice", amount: 1 },
        ],
      },
      {
        title: "Sweetness",
        list: [
          { title: "Regular", amount: 0 },
          { title: "Less Sweet", amount: 0 },
          { title: "Extra Sweet", amount: 1.5 },
        ],
      },
    ],
  };
  return (
    <Column className={styles.root}>
      <Column className={styles.modalTop}>
        <Row gap={10} align="center">
          <img src={image} className={styles.productImg} alt={item} />
          <Column>
            <p className={styles.itemName}>{item}</p>
            <CurrencyUI
              amount={formatCurrency(amount)}
              className={styles.amount}
            />
          </Column>
        </Row>
        <Column className={styles.itemDescription}>
          <h5>Ingredients</h5>
          {ingredients}
        </Column>
      </Column>
      <Column className={styles.modalBody}>
        <Row justify="end">
          <QuantitySelector
            category_id="1"
            product_id="1"
            quantity={qty}
            sub_category_id="1"
            unit_price={20}
            className={styles.qtySelector}
          />
        </Row>
        <Column gap={10}>
          {options.map((item, i) => (
            <Column key={i}>
              <div className={styles.lbl}>{item.title}</div>
              <Row wrap="wrap" gap={10}>
                {item.list.map((v, k) => (
                  <Items
                    name={v.title}
                    amount={v.amount}
                    isSelected={k === 0 ? true : false}
                    key={k}
                    callback={() => {}}
                  />
                ))}
              </Row>
            </Column>
          ))}
        </Column>
      </Column>
      <Row justify="space-between" className={styles.totalContainer}>
        <div className={styles.lbl2}>Total</div>
        <CurrencyUI amount={formatCurrency(2.5)} className={styles.amount} />
      </Row>
      <Row
        gap={10}
        align="center"
        justify="center"
        className={styles.btnWrapper}
      >
        <button className={styles.btnCancel}>Cancel</button>
        <button className={styles.btnAdd}>Add</button>
      </Row>
    </Column>
  );
};
