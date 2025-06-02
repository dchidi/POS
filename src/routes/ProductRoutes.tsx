// routes/ProductRoutes.tsx
import { Route } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const ProductLayout = lazy(() => import("../components/layouts/ProductLayout"));
const Product = lazy(() => import("../pages/Product"));

const ProductRoutes = (
  <Route
    path="/app"
    element={
      <ProtectedRoute>
        <ProductLayout />
      </ProtectedRoute>
    }
  >
    <Route path="product" element={<Product />} />
    {/* Add more protected sub-routes here */}
  </Route>
);

export default ProductRoutes;
