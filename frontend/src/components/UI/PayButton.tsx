import React, { FC } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../Redux/reducer/AuthSlice";
import { base_url } from "../../Redux/reducer/api";
import axios from "axios";
import { IProduct } from "@/lib/interfaces/IProduct";

interface Props {
  cart: IProduct[];
}

const PayButton: FC<Props> = ({ cart }) => {
  const auth = useSelector(authSelector);
  const handleCheckout = () => {
    axios
      .post(`${base_url}stripe/create-checkout-session`, {
        cart,
        userId: auth._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          window.localStorage.removeItem("cartItems");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <button
      type="submit"
      className="submitButton"
      onClick={() => handleCheckout()}>
      CheckOut
    </button>
  );
};

export default PayButton;
