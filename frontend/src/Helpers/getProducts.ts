import axios from "axios";
import { url } from "@/Redux/reducer/api";

export const getProducts = async () => {
  const res = await axios.get(`${url}/products`);
  return res.data;
};

export const getSingleProduct = async (slug: string | string[] | undefined) => {
  const res = await axios.get(`${url}/products`);
  const data = res.data;
  const product = data?.find((item: any) => item.slug === slug);

  return product;
};
