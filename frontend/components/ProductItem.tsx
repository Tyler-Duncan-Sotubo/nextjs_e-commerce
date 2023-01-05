/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  product: {
    slug: string;
    name: string;
    image: string;
    brand: string;
    price: number;
  };
}
const ProductItem: FC<Props> = ({ product }) => {
  return (
    <>
      <div className="font-display mb-5 group">
        <Link href={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} className="shadow mb-4" />
        </Link>
        <div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm mb-2">
              {product.name} - {product.brand}
            </h2>
          </Link>
          <p className="text-sm mb-2">£{product.price}.00</p>
          <button type="button" className="text-violet-600 font-bold">
            + Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
