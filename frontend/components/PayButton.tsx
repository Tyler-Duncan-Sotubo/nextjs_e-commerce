import React, { FC } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/reducer/AuthSlice";
import { base_url } from "../redux/reducer/api";
import axios from "axios";

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

const PayButton: FC<Props> = ({ cart }) => {
  const auth = useSelector(authSelector);

  console.log(auth._id);

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
