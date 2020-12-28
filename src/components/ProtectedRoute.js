import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../App';

const ProtectedRoute = (props) => {
  const auth = useContext(UserContext);
  return <Route {...props}>{auth.user ? props.children : <Redirect to="/login" />}</Route>
};

export default ProtectedRoute;