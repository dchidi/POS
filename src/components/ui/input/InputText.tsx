import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  className,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        className={`${styles.root} ${className}`}
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
