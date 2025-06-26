import type React from "react";
import styles from "./ProductItem.module.css";
import { clsx } from "clsx";
import { Column, Row } from "../../layouts/row_column";
import { CURRENCY } from "../../../app_config";
import type { ProductItemProps } from "./types";
import { useNumberFormatter } from "../../../hooks/useNumberFormatter";

const ProductItem: React.FC<ProductItemProps> = ({
  callback,
  category_id,
  sub_category_id,
  product_id,
  image_url,
  price,
  label,
  className = "",
  quantity_left,
}) => {
  const css = clsx(styles.root, className);
  const { formatCurrency } = useNumberFormatter();
  return (
    <>
      <Column
        onClick={() => callback({ category_id, sub_category_id, product_id })}
        className={css}
        justify="center"
      >
        <Row align="center" justify="center">
          <img
            src={image_url}
            alt={label}
            loading="lazy"
            className={styles.img}
          />
          <div className={styles.qtyLeft}>{quantity_left || ""}</div>
        </Row>
        <Column className={styles.details} gap={3} align="center">
          <div className={styles.label}>{label}</div>
          <Row align="center" className={styles.price}>
            {CURRENCY.symbol}
            {formatCurrency(price)}
          </Row>
        </Column>
      </Column>
    </>
  );
};
export default ProductItem;
