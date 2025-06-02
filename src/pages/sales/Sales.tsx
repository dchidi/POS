import { CiDiscount1, CiForkAndKnife } from "react-icons/ci";
import MenuItem from "../../components/ui/menu_item/MenuItem";
import { GiSlicedBread } from "react-icons/gi";
import { Row } from "../../components/layouts/row_column";
import styles from "./Sales.module.css";

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
    </div>
  );
};
export default Sales;
