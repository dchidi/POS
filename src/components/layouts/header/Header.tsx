// import { GiHamburgerMenu } from "react-icons/gi";
import { Column, Row } from "../row_column";
import styles from "./Header.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import CurrencyUI from "../../ui/currency_formatter/CurrencyUI";
import { APP_NAME } from "../../../app_config";
import Modal from "../../ui/modal/Modal";
import AppFeatures from "../../ui/application_features/AppFeatures";
import { useState } from "react";
import MainMenu from "./MainMenu";
import logo from "../../../assets/logo.png";

const Header: React.FC<{ search?: React.ReactNode }> = ({ search }) => {
  const { formatCurrency } = useNumberFormatter();
  const [showAppFeatures, setShowAppFeatures] = useState(false);
  return (
    <>
      <Column>
        <Row className={styles.currencyUI} justify="center">
          <CurrencyUI amount={formatCurrency(0)} />
        </Row>
        <Row align="center" gap={10} fullWidth className={styles.sticky}>
          {/* <GiHamburgerMenu className={styles.menuToggleIcon} /> */}
          <img src={logo} alt="logo" className={styles.logo} />
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
      <Modal isOpen={showAppFeatures} onClose={() => setShowAppFeatures(false)}>
        <AppFeatures />
      </Modal>
      <Modal isOpen={false} onClose={() => setShowAppFeatures(false)}>
        <MainMenu />
      </Modal>
    </>
  );
};
export default Header;
