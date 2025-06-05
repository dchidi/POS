import { GiHamburgerMenu } from "react-icons/gi";
import { Row } from "../row_column";
import styles from "./Header.module.css";

const Header: React.FC<{ search?: React.ReactNode }> = ({ search }) => {
  return (
    <Row align="center" gap={30} fullWidth className={styles.root}>
      <GiHamburgerMenu className={styles.menuToggleIcon} />
      ScanPay
      <div className={styles.search}>{search}</div>
    </Row>
  );
};
export default Header;
