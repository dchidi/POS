// components/layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Auth Area</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
