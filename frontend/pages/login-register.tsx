import React, { FC } from "react";
import Layout from "@components/Layout/Layout";
import LoginForm from "@components/Form/LoginForm";
import RegisterForm from "@components/Form/RegisterForm";

const Login: FC = () => {
  return (
    <Layout title="Login">
      <div className="grid grid-cols-1 gap-14 my-10 mx-auto max-w-screen-xl font-display p-10 md:grid-cols-2 lg:grid-cols-2">
        <LoginForm />
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Login;
