import React, { FC } from "react";
import Layout from "../components/Layout";
import LoginForm from "../components//Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const Login: FC = () => {
  return (
    <Layout title="Login">
      <div className="grid grid-cols-2 gap-14 my-10 mx-auto max-w-screen-xl font-display p-10">
        <LoginForm />
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Login;
