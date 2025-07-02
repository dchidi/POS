import { lazy } from "react";
import { Route } from "react-router-dom";
import AuthLayout from "../components/layouts/auth/AuthLayout";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const VerifyEmail = lazy(() => import("../pages/VerifyEmail"));

const AuthRoutes = (
  <Route path="/" element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="verify-email" element={<VerifyEmail />} />
  </Route>
);

export default AuthRoutes;
