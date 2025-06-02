// routes/SalesRoutes.tsx
import { Route } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const SalesLayout = lazy(() => import("../components/layouts/SalesLayout"));
const Sales = lazy(() => import("../pages/Sales"));

const SalesRoutes = (
  <Route
    path="/app"
    element={
      <ProtectedRoute>
        <SalesLayout />
      </ProtectedRoute>
    }
  >
    <Route path="sales" element={<Sales />} />
    {/* Add more protected sub-routes here */}
  </Route>
);

export default SalesRoutes;
