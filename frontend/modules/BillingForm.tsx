import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PayButton from "../components/PayButton";

type UserSubmitForm = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  acceptTerms: boolean;
  address: string;
};

export interface Item {
  _id: number;
  cartQuantity: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  slug: string;
}

interface Props {
  cart: Item[];
}

const BillingForm: FC<Props> = ({ cart }) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid Email Address"),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    phone: yup.string().required(),
    acceptTerms: yup.bool().oneOf([true], "Accept Terms is required"),
    address: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="my-10 text-xl">Billing Address</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-5">
          <div>
            <label htmlFor="FirstName">First Name * </label>
            <input
              type="text"
              id="FirstName"
              className="input w-1/2"
              placeholder="First Name"
              {...register("firstname")}
            />
            <div className="inputError">{errors.firstname?.message}</div>
          </div>
          <div className="">
            <label htmlFor="LastName">Last Name *</label>
            <input
              type="text"
              id="LastName"
              className="input w-1/2"
              placeholder="Last Name"
              {...register("lastname")}
            />
            {errors.lastname && (
              <div className="inputError">{errors.lastname.message}</div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-5">
          <div>
            <label htmlFor="email">Email Address * </label>
            <input
              type="text"
              id="email"
              className="input w-1/2"
              placeholder="First Name "
              {...register("email")}
            />
            <div className="inputError">{errors.email?.message}</div>
          </div>
          <div className="">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="text"
              id="phone"
              className="input w-1/2"
              placeholder="Last Name"
              {...register("phone")}
            />
            <div className="inputError">{errors.phone?.message}</div>
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="address">Address * </label>
          <input
            type="text"
            id="address"
            className="input"
            placeholder="First Name "
            {...register("address")}
          />
          <div className="inputError">{errors.address?.message}</div>
        </div>
        <div>
          <input
            type="checkbox"
            {...register("acceptTerms")}
            className={`inputError ${errors.acceptTerms ? "is-invalid" : ""}`}
          />
          <label htmlFor="acceptTerms" className="ml-4">
            I have read and agree to the Terms
          </label>
        </div>
        <div className="inputError">{errors.acceptTerms?.message}</div>
        <PayButton cart={cart} />
      </div>
    </form>
  );
};

export default BillingForm;
