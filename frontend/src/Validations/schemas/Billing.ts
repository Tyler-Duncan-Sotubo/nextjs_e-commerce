import * as yup from "yup";

export const billingSchema = yup.object().shape({
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
