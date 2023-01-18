import React, { useEffect } from "react";
import Layout from "../src/components/Layout/Layout";
import { useDispatch } from "react-redux";
import { clearCart } from "../src/Redux/reducer/cartSlice";

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.removeItem("cartItems");
  }, []);

  return <Layout title="Check">success</Layout>;
};

export default Success;
