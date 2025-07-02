import { Row } from "../../layouts/row_column";
import styles from "./Input.module.css";
import { useRef } from "react";

interface InputPassCodeProps {
  length?: number;
  label?: string;
  onComplete?: (code: string) => void;
}

export const InputPassCode: React.FC<InputPassCodeProps> = ({
  length = 6,
  label,
  onComplete,
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!/^\d*$/.test(value)) {
        e.target.value = "";
        return;
      }

      if (value.length === 1 && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (value.length === 1 && index === length - 1) {
        const fullCode = inputsRef.current
          .map((input) => input?.value || "")
          .join("");
        onComplete?.(fullCode);
      }
    };

  const handleKeyDown =
    (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <Row gap={10} aria-label="Passcode input">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el; // Correct ref callback - no return needed
            }}
            type="password"
            className={styles.passcode}
            maxLength={1}
            aria-label={`Passcode digit ${index + 1}`}
            inputMode="numeric"
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            autoFocus={index === 0}
          />
        ))}
      </Row>
    </div>
  );
};
