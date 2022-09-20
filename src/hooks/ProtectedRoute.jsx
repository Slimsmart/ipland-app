import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ redirectPath, children }) => {
  const { auth } = useAuth();

  if (auth) return children;
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
