import { Outlet } from "react-router-dom";
import { Column, Row } from "../../row_column";
import Header from "../../header/Header";
import Search from "../../../ui/search/Search";
import Cart from "../../../features/cart/Cart";
import styles from "./SalesLayout.module.css";

const SalesLayout = () => {
  return (
    <Row className={styles.root}>
      <Column className={styles.content}>
        <Header
          search={
            <Search callback={() => {}} placeholder="Search product..." />
          }
        />
        <Row>
          <Outlet />
        </Row>
      </Column>
      <Cart className={styles.cart} />
    </Row>
  );
};

export default SalesLayout;
