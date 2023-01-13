import React, { FC } from "react";
import { serverURL } from "../redux/api";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/reducer/AuthSlice";
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
      .post(`http://localhost:1000/stripe/create-checkout-session`, {
        cart,
        userId: auth._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
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
