import { Outlet } from "react-router-dom";
import { Column, Row } from "../row_column";
import Header from "../header/Header";
import Search from "../../ui/search/Search";
import styles from "./SalesLayout.module.css";
import Cart from "../../features/cart/Cart";

const SalesLayout = () => {
  return (
    <Row>
      <Column className={styles.content}>
        {/* <Row className={styles.header}> */}
        <Header
          search={
            <Search callback={() => {}} placeholder="Search product..." />
          }
        />
        {/* </Row> */}
        <Column className={styles.outlet}>
          <Outlet />
        </Column>
      </Column>
      <Cart className={styles.aside} />
    </Row>
  );
};

export default SalesLayout;
