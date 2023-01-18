import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/Validations/schemas/Login";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loginUser } from "@/Redux/reducer/AuthSlice";
import { LoginUser } from "@/lib/interfaces/IUser";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch()<any>;
  const auth = useSelector(authSelector);

  const onSubmit = (data: LoginUser) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center bg-gray-100 p-14">
        <h1 className="text-3xl">Login</h1>
        <h1 className="mb-16 mt-5">Great to have you back!</h1>
        <div className="mb-8">
          <label htmlFor="loginemail"></label>
          <input
            type="email"
            id="loginemail"
            className="input"
            placeholder="username or email address"
            {...register("email")}
          />
          {errors.email && (
            <div className="text-red-500 text-left mt-3">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="loginpassword"></label>
          <input
            type="password"
            id="loginpassword"
            className="input"
            autoFocus
            placeholder="password"
            {...register("password")}></input>
          {errors.password && (
            <div className="text-red-500 text-left mt-3">
              {errors.password.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-violet-600 w-[40%] text-white py-3 my-6 font-display uppercase font-semibold hover:bg-violet-500">
          Login
        </button>
        {auth.loginStatus === "rejected" ? (
          <div className="text-red-500">
            <p>{auth.loginError}</p>
          </div>
        ) : null}
        <p className="mt-5">Remember Me</p>
        <p className="mt-5">Lost your password ?</p>
      </div>
    </form>
  );
};

export default LoginForm;
