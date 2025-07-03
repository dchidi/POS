import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";
import { Column } from "../../components/layouts/row_column";
import { InputPassCode } from "../../components/ui/input/InputPassCode";

const ValidatePassCode = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const verifyPasscode = (code: string) => {
    console.log(code);
    login();
    navigate("/app/sales");
  };

  return (
    <InputPassCode
      label="Enter Passcode"
      length={4}
      onComplete={verifyPasscode}
    />
  );
};

export default ValidatePassCode;
