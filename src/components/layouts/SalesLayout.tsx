// src/components/Layout.tsx
import { Link, Outlet } from "react-router-dom";

const SalesLayout = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default SalesLayout;
