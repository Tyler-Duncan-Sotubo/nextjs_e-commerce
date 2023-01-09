import React, { FC } from "react";
import ProductItem from "./ProductItem";

interface Props {
  data: [];
}

const AllProducts: FC<Props> = ({ data }) => {
  const featuredData = data.slice(data.length - 9, data.length);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-28 py-20 md:grid-cols-3 lg:grid-cols-3">
        {featuredData &&
          featuredData.map((product: any) => (
            <ProductItem product={product} key={product.slug} />
          ))}
      </div>
    </>
  );
};

export default AllProducts;
