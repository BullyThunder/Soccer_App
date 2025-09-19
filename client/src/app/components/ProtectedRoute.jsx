import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = true; // сюда проверку добавь, например, через context или state
  return isAuth ? children : <Navigate to="/login" />;
}