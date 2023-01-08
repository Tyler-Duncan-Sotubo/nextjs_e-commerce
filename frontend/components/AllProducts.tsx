import React, { FC, useState } from "react";
import ProductItem from "./ProductItem";

interface Props {
  data: [
    {
      category: string;
      shirt: string;
    }
  ];
  shirts: [];
}

const AllProducts: FC<Props> = ({ data }) => {
  const [filteredData, setFilterData] = useState<string[] | any>(data);
  const [active, setActive] = useState<boolean>(false);

  const shirts = data.filter((item) => {
    if (item.category.includes("Shirts")) {
      return item;
    }
  });
  const handleShirts = () => {
    setFilterData(shirts);
    setActive(true);
  };
  const handleAllProducts = () => {
    setFilterData(data);
  };

  console.log(data);

  return (
    <>
      <div className="text-center my-10 text-4xl flex justify-center gap-20 text-slate-500 cursor-pointer capitalize font-display">
        <h2
          className="focus:outline-none focus:ring-violet-300"
          onClick={() => {
            handleAllProducts();
          }}>
          All
        </h2>
        <p
          className="text-black"
          onClick={() => {
            handleShirts();
          }}>
          hello
        </p>
        <p
          className="text-black"
          onClick={() => {
            handleShirts();
          }}>
          hello
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-28 py-5 md:grid-cols-3 lg:grid-cols-3">
        {filteredData &&
          filteredData.map((product: any) => (
            <ProductItem product={product} key={product.slug} />
          ))}
      </div>
    </>
  );
};

export default AllProducts;
