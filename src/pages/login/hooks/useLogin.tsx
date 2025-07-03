import { useState } from "react";

// Step enum or union type
type LoginStep = "login" | "loading" | "passcode";

export const useLogin = () => {
  const [step, setStep] = useState<LoginStep>("login");

  const handleLogin = async (email: string, password: string) => {
    console.log("Logging in with:", email, password);
    setStep("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStep("passcode");
    } catch (err) {
      console.error("Login failed:", err);
      setStep("login");
    }
  };
  return { step, handleLogin };
};
