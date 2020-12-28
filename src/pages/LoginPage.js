import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { user, login } = useContext(UserContext);
  const history = useHistory();

  function onValid(data) {
    login(data);
  }

  useEffect(() => {
    if (user) {
      history.push('/playground');
    }
  }, [user])
  
  return <div>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit(onValid)}>
      <label>Login: <input name="login" ref={register({ required: true })} /></label>
      <label>Password: <input name="password" type="password" ref={register} /></label>
      <button>Submit</button>
    </form>
  </div>;
};

export default LoginPage;
