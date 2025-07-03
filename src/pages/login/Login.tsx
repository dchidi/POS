import styles from "./Login.module.css";
import ValidateUserCredentials from "./ValidateUserCredentials";
import ValidatePassCode from "./ValidatePassCode";
import { Loading } from "../../components/ui/loading/Loading";
import { Column, Row } from "../../components/layouts/row_column";
import { IoIosLock } from "react-icons/io";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { step, handleLogin } = useLogin();

  // Component mapping
  const StepComponent = () => {
    switch (step) {
      case "login":
        return <ValidateUserCredentials onSubmit={handleLogin} />;
      case "loading":
        return (
          <div className={styles.container}>
            <Loading size="default" />
          </div>
        );
      case "passcode":
        return <ValidatePassCode />;
      default:
        return null;
    }
  };

  return (
    <Row className={styles.root} align="center" gap={50}>
      <Column justify="center" align="center">
        <IoIosLock className={styles.lockImg} />
        <h3 className={styles.lockLabel}>ScanPay Lock</h3>
      </Column>
      <Column gap={15} className={styles.form} justify="center">
        <StepComponent />
      </Column>
    </Row>
  );
};

export default Login;
