import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  btnType?: "default" | "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  btnType = "default",
}) => {
  const css = clsx(styles.root, styles[btnType], className);
  return (
    <button className={css} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
