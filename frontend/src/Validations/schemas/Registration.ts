import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
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
