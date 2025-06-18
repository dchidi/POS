import MenuItem from "../../components/ui/menu_item/MenuItem";
import { Column, Row } from "../../components/layouts/row_column";
import styles from "./Sales.module.css";
import ProductItem from "../../components/ui/product_item/ProductItem";
import Modal from "../../components/ui/modal/Modal";
import { ProductDetails } from "../../components/ui/product_item/ProductDetails";
import Receipt from "../../components/features/payment/Receipt";
import PrinterSettings from "../../components/features/system_tools/PrinterSettings";
import useSales from "./useSales";

// src/pages/Dashboard.tsx
const Sales = () => {
  const { isLoadingMenu, pageMenu, onClickHandler } = useSales();
  return (
    <>
      <Row gap={10} className={styles.root} fullHeight>
        {isLoadingMenu ? (
          <div>loading menu ui...</div>
        ) : (
          <Column gap={10} className={styles.sideMenu}>
            <Column gap={10} className={styles.sideMenuInner}>
              {pageMenu!!.map((item, i) => (
                // <MenuItem
                //   callback={testFn}
                //   {...item}
                //   key={i}
                //   isActive={i === 0}
                //   className={styles.menuItem}
                // />
                <div>menu</div>
              ))}
            </Column>
          </Column>
        )}
        <Row gap={10} wrap="wrap" className={styles.content} justify="center">
          {/* <h2>All Menu</h2> */}
          {/* <ProductItem
            callback={() => {}}
            label="Garlic Bread"
            category_id={"1"}
            sub_category_id={"1"}
            price={1200}
            image_url="/burger1.jpg"
            // quantity_left={120}
            product_id="1"
          /> */}
          {[...new Array(50).values()].map((_, k) => (
            <div
              style={{ width: "250px", height: "300px", background: "#000" }}
            >
              32
            </div>
            // <ProductItem
            //   callback={() => {}}
            //   label="Delux Crispy Vegan Burger With Onion Rings"
            //   category_id={"1"}
            //   sub_category_id={"1"}
            //   price={2.22}
            //   image_url="/burger1.jpg"
            //   quantity_left={120}
            //   product_id="1"
            //   key={k}
            // />
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
