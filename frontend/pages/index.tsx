import Layout from "../components/Layout";
import { Slider } from "../components/Slider";
import axios from "axios";
import { wrapper } from "../redux/store/store";
import { setProductData, getProductSelector } from "../redux/reducer/products";
import { useSelector } from "react-redux";
import AllProducts from "../components/AllProducts";

export default function Home() {
  const { products } = useSelector(getProductSelector);
  const { product } = products;
  const data = product.products;

  return (
    <>
      <Layout title="Hello">
        <Slider data={data} />
        <AllProducts data={data} />
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await axios.get("http://localhost:1000/api/products");
    const apiData = res.data;

    store.dispatch(setProductData(apiData));

    return {
      props: {},
    };
  }
);
