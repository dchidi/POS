import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";
import { Column, Row } from "../components/layouts/row_column";
import { IoIosLock } from "react-icons/io";
import { Input } from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/app/sales");
  };

  return (
    <Row className={styles.root} align="center" gap={50}>
      <IoIosLock className={styles.lockImg} />
      <Column gap={15} className={styles.form}>
        <h3>Welcome Back!</h3>
        <Input
          type="text"
          label="Email Address"
          placeholder="example@domain.com"
        />
        <Input type="password" label="Password" placeholder="Enter password" />
        <Input type="passcode" label="Enter Passcode" passcodeLength={4} />
        <Button onClick={handleLogin} btnType="primary">
          Log In
        </Button>
      </Column>
    </Row>
  );
};

export default Login;
