import type React from "react";
import styles from "./MenuItem.module.css";
import { clsx } from "clsx";
import { Column, Row } from "../../layouts/row_column";
import type { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  callback,
  isActive = false,
  className = "",
  img_url,
  label,
  // name = "",
  category_id,
  sub_category_id,
  icon,
}) => {
  const css = clsx(styles.root, { [styles.active]: isActive }, className);

  return (
    <Row
      onClick={() => callback({ category_id, sub_category_id })}
      className={css}
      align="center"
      justify="center"
    >
      <Column align="center" justify="center" gap={2}>
        {img_url && <img src={img_url} />}
        {icon}
        <Row className={styles.label} wrap="wrap">
          {label}
        </Row>
      </Column>
    </Row>
  );
};
export default MenuItem;
