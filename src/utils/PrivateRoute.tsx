import { UserContext } from "@/context/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

type PrivateRoute = {
  children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRoute) => {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
