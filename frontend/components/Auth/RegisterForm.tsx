import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, registerUser } from "../../redux/reducer/AuthSlice";

type UserSubmitForm = {
  email: string;
  password: string;
  name: string;
};

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 6 characters")
      .max(12, "Username must not exceed 10 characters"),
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

  const dispatch = useDispatch()<any>;

  let router = useRouter();

  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth._id) {
      router.push("/checkout");
    }
  }, [auth, router]);

  const onSubmit = (data: UserSubmitForm) => {
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center p-14">
        <h1 className="text-3xl">Register</h1>
        <h1 className="mb-16 mt-5">
          If you don’t have an account, register now!
        </h1>
        <div className="mb-8">
          <label htmlFor="name"></label>
          <input
            type="name"
            id="name"
            className="input"
            autoFocus
            placeholder="Username"
            {...register("name")}></input>
          {errors.name && (
            <div className="text-red-500 text-left mt-3">
              {errors.name.message}
            </div>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="email address"
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
        {auth.registerStatus === "rejected" ? (
          <div className="text-red-500">
            <p>{auth.registerError}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default RegisterForm;
