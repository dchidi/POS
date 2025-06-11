import { CiForkAndKnife } from "react-icons/ci";
import MenuItem from "../../components/ui/menu_item/MenuItem";
import { GiSlicedBread } from "react-icons/gi";
import { Column, Row } from "../../components/layouts/row_column";
import styles from "./Sales.module.css";
import ProductItem from "../../components/ui/product_item/ProductItem";
import Modal from "../../components/ui/modal/Modal";
import { ProductDetails } from "../../components/ui/product_item/ProductDetails";

// src/pages/Dashboard.tsx
const Sales = () => {
  const testFn = (arg: any) => {
    console.log(arg);
  };
  const dummyMenu = [
    {
      label: "All Menu",
      category_id: "1",
      sub_category_id: "1",
      isActive: false,
      icon: <CiForkAndKnife />,
    },
    {
      label: "Bread",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Pizza",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Pastries",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Chicken",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Beef",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Cake",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Burger",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Cake",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Burger",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Cake",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Burger",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Cake",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Burger",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
  ];
  return (
    <>
      <Row gap={10} className={styles.root} fullHeight>
        <Column gap={10} className={styles.sideMenu}>
          {dummyMenu.map((item, i) => (
            <MenuItem
              callback={testFn}
              {...item}
              key={i}
              isActive={i === 0}
              className={styles.menuItem}
            />
          ))}
        </Column>
        <Row gap={10} wrap="wrap" className={styles.content} justify="center">
          {/* <h2>All Menu</h2> */}
          <ProductItem
            callback={() => {}}
            label="Garlic Bread"
            category_id={"1"}
            sub_category_id={"1"}
            price={1200}
            image_url="/burger1.jpg"
            // quantity_left={120}
            product_id="1"
          />
          {[...new Array(50).values()].map((_, k) => (
            <ProductItem
              callback={() => {}}
              label="Delux Crispy Vegan Burger With Onion Rings"
              category_id={"1"}
              sub_category_id={"1"}
              price={2.22}
              image_url="/burger1.jpg"
              quantity_left={120}
              product_id="1"
              key={k}
            />
          ))}
        </Row>
      </Row>
      <Modal isOpen={true} onClose={() => {}} hasCloseBtn={false}>
        <ProductDetails />
      </Modal>
    </>
  );
};
export default Sales;
