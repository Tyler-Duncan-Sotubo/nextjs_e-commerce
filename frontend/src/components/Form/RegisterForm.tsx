import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, registerUser } from "@/Redux/reducer/AuthSlice";
import { UserRegisterForm } from "@/lib/interfaces/IUser";
import { RegistrationSchema } from "@/Validations/schemas/Registration";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserRegisterForm>({
    resolver: yupResolver(RegistrationSchema),
  });

  const dispatch = useDispatch()<any>;
  let router = useRouter();
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth._id) {
      router.push("/checkout");
    }
  }, [auth, router]);

  const onSubmit = (data: UserRegisterForm) => {
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
