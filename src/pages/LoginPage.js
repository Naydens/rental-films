import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  function s(data) {
    // backend
    if (data.login === 'admin' && data.password === '123') {
      console.log('Вы залогинены')
    }
    // backend
  }
  
  return <div>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit(s)}>
      <label>Login: <input name="login" ref={register({ required: true })} /></label>
      <label>Password: <input name="password" type="password" ref={register} /></label>
      <button>Submit</button>
    </form>
  </div>;
};

export default LoginPage;
