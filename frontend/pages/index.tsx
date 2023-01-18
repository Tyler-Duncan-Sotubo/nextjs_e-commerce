import Layout from "@/components/Layout/Layout";
import { Slider } from "@components/Slider";
import AllProducts from "@components/AllProducts";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getProducts } from "@/Helpers/getProducts";
import { IProduct } from "@/lib/interfaces/IProduct";

export default function Home() {
  const { data } = useQuery("products", getProducts);

  return (
    <>
      <Layout title="Hello">
        <Slider data={data} />
        <AllProducts data={data} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<IProduct>("products", getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
