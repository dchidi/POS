// components/layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";
import { Column } from "../row_column";
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <Column className={styles.root} justify="center" align="center">
      <Outlet />
    </Column>
  );
};

export default AuthLayout;
