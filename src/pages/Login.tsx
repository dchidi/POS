import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";
import { Column, Row } from "../components/layouts/row_column";
import { IoIosLock } from "react-icons/io";
import Button from "../components/ui/button/Button";
import { InputText } from "../components/ui/input/InputText";
import { InputPassword } from "../components/ui/input/InputPassword";
import { InputPassCode } from "../components/ui/input/InputPasscode";
import { useState } from "react";
import { Loading } from "../components/ui/loading/Loading";

const Login = () => {
  const [loginUI, setLoginUI] = useState<"login" | "loading" | "passcode">(
    "login"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);
    setLoginUI("loading");

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoginUI("passcode");
    console.log("validate email and password. Send passcode to user email");
  };

  const verifyPasscode = (code: string) => {
    console.log(code);
    login();
    navigate("/app/sales");
  };

  return (
    <Row className={styles.root} align="center" gap={50}>
      <Column justify="center" align="center">
        <IoIosLock className={styles.lockImg} />
        <h3 className={styles.lockLabel}>ScanPay Lock</h3>
      </Column>
      <Column gap={15} className={styles.form}>
        {loginUI === "login" && (
          <>
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
          </>
        )}
        {loginUI === "loading" && <Loading size="default" />}
        {loginUI === "passcode" && (
          <>
            <h3>Validate Pass Code</h3>
            <InputPassCode
              label="Passcode"
              length={4}
              onComplete={verifyPasscode}
            />
          </>
        )}
      </Column>
    </Row>
  );
};

export default Login;
