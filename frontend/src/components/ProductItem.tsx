/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/reducer/cartSlice";
import { addtoWishList } from "../Redux/reducer/wishListSlice";
import { IProduct } from "@/lib/interfaces/IProduct";

interface Props {
  product: IProduct;
}

const ProductItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddWishList = (arg: any) => {
    dispatch(addtoWishList(arg));
  };

  const handleAddToCart = (arg: any) => {
    dispatch(addToCart(arg));
  };

  return (
    <>
      <div className="font-display mb-5 group relative ">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="shadow mb-4 hover:grayscale-0"
          />
        </Link>
        <div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm mb-2">
              {product.name} - {product.brand}
            </h2>
          </Link>
          <p className="text-sm mb-2">£{product.price}.00</p>
          <div
            className="absolute top-10 right-5 bg-white p-3 cursor-pointer hidden group-hover:block"
            onClick={() => handleAddWishList(product)}>
            <FaRegHeart size={15} />
          </div>
          <div
            className="absolute top-24 right-5 bg-white p-3 cursor-pointer hidden group-hover:block"
            onClick={() => handleAddToCart(product)}>
            <FiPlus size={15} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
