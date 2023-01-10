/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoWishList } from "../redux/reducer/wishListSlice";

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
  const dispatch = useDispatch();

  const handleAddWishList = (arg: any) => {
    dispatch(addtoWishList(arg));
  };

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
          <div onClick={() => handleAddWishList(product)}>
            <FaRegHeart size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
