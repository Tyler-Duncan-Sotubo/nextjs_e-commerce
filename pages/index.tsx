import { HomeProducts } from "../components/HomeProducts";
import Layout from "../components/Layout";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
      <Layout title="Hello">
        <Slider />
        <HomeProducts />
      </Layout>
    </>
  );
}
