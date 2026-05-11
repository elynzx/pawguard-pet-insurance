import { Navigate, Outlet } from "react-router";
import { useUser } from "../../../common/providers/useUser";

export const ProtectedRoute = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
