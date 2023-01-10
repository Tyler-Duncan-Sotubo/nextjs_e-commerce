/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  data: [
    {
      name: string;
      slug: string;
      image: string;
      brand: string;
      price: number;
      description: string;
    }
  ];
  view: boolean;
}
const ProductList: FC<Props> = ({ data, view }) => {
  return (
    <div className="w-3/4">
      {view ? (
        <div>
          {data.map((product, index) => (
            <div
              key={index}
              className="font-display grid grid-cols-1 gap-6 md:grid-cols-3">
              <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="mb-4" />
              </Link>
              <div className="mb-4 col-span-2">
                <Link href={`/product/${product.slug}`}>
                  <h2 className="text-2xl font-semibold my-4 w-[80%] ">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-sm mt-6 font-medium">£{product.price}.00</p>
                <p className="text-sm my-6 w-[80%] text-gray-400">
                  {product.description.substring(0, 200)}
                </p>
                <Link href={`/product/${product.slug}`}>
                  <button
                    type="button"
                    className="bg-violet-600 w-[40%] text-white py-2 font-display uppercase font-semibold hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {data.map((product, index) => (
            <div key={index} className="font-display mb-5 group">
              <Link href={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="shadow mb-4"
                />
              </Link>
              <div>
                <Link href={`/product/${product.slug}`}>
                  <h2 className="text-sm mb-2">
                    {product.name} - {product.brand}
                  </h2>
                </Link>
                <p className="text-sm mb-2">£{product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
