import { Navigate, Outlet } from "react-router-dom";

const AuthService = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default AuthService;