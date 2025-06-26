import { GiHamburgerMenu } from "react-icons/gi";
import { Column, Row } from "../row_column";
import styles from "./Header.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import CurrencyUI from "../../ui/currency_formatter/CurrencyUI";
import { APP_NAME } from "../../../app_config";

const Header: React.FC<{ search?: React.ReactNode }> = ({ search }) => {
  const { formatCurrency } = useNumberFormatter();
  return (
    <Column>
      <Row className={styles.currencyUI} justify="center">
        <CurrencyUI amount={formatCurrency(0)} />
      </Row>
      <Row align="center" gap={10} fullWidth className={styles.sticky}>
        <GiHamburgerMenu className={styles.menuToggleIcon} />
        <div className={styles.appName}>{APP_NAME}</div>
        <div className={styles.searchBox}>{search}</div>
        <Row align="center" gap={20} className={styles.mobileViewOnly}>
          <IoSearch size={23} />
          <Row className={styles.shoppingBag}>
            <HiOutlineShoppingBag size={23} />
            <div className={styles.counter}>0</div>
          </Row>
        </Row>
      </Row>
    </Column>
  );
};
export default Header;
