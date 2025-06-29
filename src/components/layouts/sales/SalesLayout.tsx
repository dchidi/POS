import { Outlet } from "react-router-dom";
import { Column, Row } from "../row_column";
import Header from "../header/Header";
import Search from "../../ui/search/Search";
import Cart from "../../features/cart/Cart";
import styles from "./SalesLayout.module.css";

const SalesLayout = () => {
  return (
    <Row>
      <Column className={styles.content}>
        <Header
          search={
            <Search callback={() => {}} placeholder="Search product..." />
          }
        />
        <Outlet />
      </Column>
      <Column className={styles.cart} showOn="desktopOnly">
        <Cart />
      </Column>
    </Row>
  );
};

export default SalesLayout;
