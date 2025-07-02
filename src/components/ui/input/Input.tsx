import { Column, Row } from "../../layouts/row_column";
import styles from "./Input.module.css";

type InputType = "text" | "password" | "passcode";

interface BaseInputProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

interface TextPasswordInputProps extends BaseInputProps {
  type: Exclude<InputType, "passcode">;
  passcodeLength?: never;
}

interface PasscodeInputProps extends BaseInputProps {
  type: "passcode";
  passcodeLength: number;
}

type InputProps = TextPasswordInputProps | PasscodeInputProps;

export const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  passcodeLength,
}) => {
  return (
    <Column className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      {type === "passcode" ? (
        <Row gap={10} aria-label="Passcode input">
          {Array.from({ length: passcodeLength }, (_, index) => (
            <input
              key={index}
              type="text" // Better to use password for passcode fields
              className={styles.passcode}
              maxLength={1}
              aria-label={`Passcode digit ${index + 1}`}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </Row>
      ) : (
        <input
          type={type}
          className={styles.root}
          placeholder={placeholder}
          aria-label={label}
        />
      )}
    </Column>
  );
};
