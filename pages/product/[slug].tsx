import { useRouter } from "next/router";
import React, { FC } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";

const ProductPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product Not found</div>;
  }

  return (
    <div>
      <Layout title={product?.name}>
        <p>{product?.name}</p>
      </Layout>
    </div>
  );
};

export default ProductPage;
