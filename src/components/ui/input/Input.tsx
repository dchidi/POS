import { Row } from "../../layouts/row_column";
import styles from "./Input.module.css";

interface InputProps {
  type: "text" | "password" | "passcode";
  label?: string;
  placeholder?: string;
  passcodeLength?: number;
}
export const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  passcodeLength,
}) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      {type === "passcode" && passcodeLength! > 0 ? (
        <Row gap={10}>
          {[...new Array(passcodeLength).entries()].map((item, index) => (
            <input type={type} className={styles.passcode} />
          ))}
        </Row>
      ) : (
        <input type={type} className={styles.root} placeholder={placeholder} />
      )}
    </div>
  );
};
