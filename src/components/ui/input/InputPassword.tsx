import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputPasswordProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  placeholder,
  className,
  value,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="password"
        className={`${styles.root} ${className}`}
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
