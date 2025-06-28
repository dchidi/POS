import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

const AppLayout = () => (
  <div className={styles.root}>
    <Outlet />
  </div>
);

export default AppLayout;
