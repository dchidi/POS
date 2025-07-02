import clsx from "clsx";
import styles from "./Loading.module.css";
export const Loading: React.FC<{ size: "default" | "fullPage" }> = ({
  size,
}) => {
  const css = clsx(styles.root, styles[size]);
  return (
    <div className={css}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};
