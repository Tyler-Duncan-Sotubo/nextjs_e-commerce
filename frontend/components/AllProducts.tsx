import React, { FC } from "react";
import ProductItem from "./ProductItem";

interface Props {
  data: [];
}

const AllProducts: FC<Props> = ({ data }) => {
  const featuredData = data.slice(data.length - 9, data.length).reverse();

  return (
    <>
      <div className="grid grid-cols-1 p-8 gap-6 md:px-28 md:py-20 md:grid-cols-3 lg:grid-cols-3">
        {featuredData &&
          featuredData.map((product: any) => (
            <ProductItem product={product} key={product.slug} />
          ))}
      </div>
    </>
  );
};

export default AllProducts;
