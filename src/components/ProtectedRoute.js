import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isLoggedIn = true;
  return isLoggedIn ? props.children : <Redirect to="/login" />;
};

export default ProtectedRoute;
