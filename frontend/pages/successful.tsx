import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Success = () => {
  useEffect(() => {
    localStorage.removeItem("cartItems");
  }, []);

  return <Layout title="Check">success</Layout>;
};

export default Success;
