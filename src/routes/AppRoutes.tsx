import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoutes from "./AuthRoutes";
import { Loading } from "../components/ui/loading/Loading";

const AppLayout = lazy(() => import("../components/layouts/AppLayout"));
const Sales = lazy(() => import("../pages/Sales"));
const Product = lazy(() => import("../pages/Product"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        {AuthRoutes}

        {/* Protected App Routes */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="sales" element={<Sales />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
