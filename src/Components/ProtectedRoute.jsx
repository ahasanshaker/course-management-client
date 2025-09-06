import { useContext } from "react";
import { Navigate } from "react-router";
// import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
