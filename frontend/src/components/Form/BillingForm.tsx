import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingSchema } from "@/Validations/schemas/Billing";
import PayButton from "../UI/PayButton";
import { IProduct } from "@/lib/interfaces/IProduct";
import { CheckOutForm } from "@/lib/interfaces/IUser";

interface Props {
  cart: IProduct[];
}

const BillingForm: FC<Props> = ({ cart }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckOutForm>({
    resolver: yupResolver(billingSchema),
  });

  const onSubmit = (data: CheckOutForm) => {
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
