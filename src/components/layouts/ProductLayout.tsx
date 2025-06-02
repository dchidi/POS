// src/components/Layout.tsx
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/sales">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
