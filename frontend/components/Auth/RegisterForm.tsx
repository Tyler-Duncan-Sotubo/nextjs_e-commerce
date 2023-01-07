import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  email: string;
  password: string;
};

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter valid Email Address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center p-14">
        <h1 className="text-3xl">Register</h1>
        <h1 className="mb-16 mt-5">
          If you don’t have an account, register now!
        </h1>
        <div className="mb-8">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
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
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
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
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
