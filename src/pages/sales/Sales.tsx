import { CiDiscount1, CiForkAndKnife } from "react-icons/ci";
import MenuItem from "../../components/ui/menu_item/MenuItem";
import { GiSlicedBread } from "react-icons/gi";
import { Row } from "../../components/layouts/row_column";
import styles from "./Sales.module.css";
import ProductItem from "../../components/ui/product_item/ProductItem";

// src/pages/Dashboard.tsx
const Sales = () => {
  const testFn = (arg) => {
    console.log(arg);
  };
  return (
    <div>
      <h2>Sales</h2>
      <MenuItem
        callback={testFn}
        label="All Menu"
        category_id={1}
        sub_category_id={1}
        isActive={false}
        icon={<CiForkAndKnife />}
      />
      <MenuItem
        callback={() => {}}
        label="Bread"
        category_id={1}
        sub_category_id={1}
        isActive={true}
        icon={<GiSlicedBread />}
      />

      <Row>
        <MenuItem
          callback={() => {}}
          label="Discount"
          category_id={1}
          sub_category_id={1}
          isActive={false}
          icon={<CiDiscount1 />}
          className={styles.sideAction}
        />
      </Row>
      <ProductItem
        callback={() => {}}
        label="Delux Crispy Vegan Burger With Onion Rings"
        category_id={1}
        sub_category_id={1}
        isActive={false}
        price={2.22}
        image_url="/burger1.jpg"
        quantity_left={120}
      />
    </div>
  );
};
export default Sales;
