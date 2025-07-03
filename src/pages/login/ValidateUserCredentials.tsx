import styles from "./Login.module.css";
import { Column } from "../../components/layouts/row_column";
import Button from "../../components/ui/button/Button";
import { InputText } from "../../components/ui/input/InputText";
import { InputPassword } from "../../components/ui/input/InputPassword";
import { useState } from "react";

interface ValidateUserCredentialsProps {
  onSubmit: (username: string, password: string) => void;
}
const ValidateUserCredentials: React.FC<ValidateUserCredentialsProps> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onSubmit(email, password);
  };

  return (
    <Column gap={15} className={styles.form}>
      <h3>Welcome Back!</h3>
      <InputText
        value={email}
        label="Email Address"
        placeholder="example@domain.com"
        onChange={(value: string) => setEmail(value)}
      />
      <InputPassword
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={setPassword}
      />

      <Button
        onClick={handleLogin}
        btnType="primary"
        className={styles.btnLogin}
      >
        Log In
      </Button>
    </Column>
  );
};

export default ValidateUserCredentials;
