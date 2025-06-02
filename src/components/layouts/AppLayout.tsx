import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/app/sales">Sales</Link>
        <Link to="/app/product">Product</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default AppLayout;
