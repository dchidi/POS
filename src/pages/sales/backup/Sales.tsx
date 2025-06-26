import { CiForkAndKnife } from "react-icons/ci";
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Sales.module.css";
import MenuItem from "../../../components/ui/menu_item/MenuItem";
import { Column, Row } from "../../../components/layouts/row_column";
import ProductItem from "../../../components/ui/product_item/ProductItem";
import Modal from "../../../components/ui/modal/Modal";
import { ProductDetails } from "../../../components/ui/product_item/ProductDetails";
import PrinterSettings from "../../../components/features/system_tools/PrinterSettings";
import Receipt from "../../../components/features/payment/Receipt";

// src/pages/Dashboard.tsx
const Sales = () => {
  const testFn = (arg: any) => {
    console.log(arg);
  };
  const dummyMenu = [
    {
      label: "All Menu",
      name: "all",
      category_id: "1",
      sub_category_id: "1",
      isActive: false,
      icon: <CiForkAndKnife />,
    },
    {
      label: "Bread",
      name: "brand",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Pizza",
      name: "pizza",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Pastries",
      name: "pastries",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Chicken",
      name: "chicken",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Beef",
      name: "beef",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Cake",
      name: "cake",
      category_id: "2",
      sub_category_id: "1",
      isActive: false,
      icon: <GiSlicedBread />,
    },
    {
      label: "Burger",
      name: "burger",
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
          <Column gap={10} className={styles.sideMenuInner}>
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
      <Modal isOpen={false} onClose={() => {}} hasCloseBtn={false}>
        <ProductDetails />
      </Modal>
      <Modal isOpen={false} onClose={() => {}} hasCloseBtn={false}>
        {/* Put printer settings on settings page and it should update local storage */}
        <PrinterSettings onPaperSizeChange={() => {}} />
        <Receipt
          paperSize="80mm"
          receiptData={{
            date: "2025-05-30",
            items: [
              { name: "Ginger Bread", price: 3510 },
              { name: "Vegan Duble Padding Plant Burger", price: 50000 },
            ],
            total: 48159,
          }}
        />
      </Modal>
    </>
  );
};
export default Sales;
