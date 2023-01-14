import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/reducer/cartSlice";

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.removeItem("cartItems");
  }, []);

  return <Layout title="Check">success</Layout>;
};

export default Success;
