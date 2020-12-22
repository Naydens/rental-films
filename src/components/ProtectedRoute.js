import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../App';

const ProtectedRoute = (props) => {
  const user = useContext(UserContext);
  return <Route {...props}>{user ? props.children : <Redirect to="/login" />}</Route>
};

export default ProtectedRoute;