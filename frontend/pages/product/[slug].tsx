import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";

const ProductPage: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { slug } = router.query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product Not found</div>;
  }
  const gotToIndex = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Layout title={product.name}>
        <div className="w-[85%] m-auto my-10 gap-5 font-display">
          <div className="flex gap-2 my-10">
            <Link href="/">
              <p className="text-md">Home</p>
            </Link>
            <Link href="/product/">
              <p className="text-md">» Shop » </p>
            </Link>
            <p className="text-md">{product?.name}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-2 w-full">
            <div className="relative col-span-1">
              <div className="relative">
                <Image
                  src={product.images![currentIndex].image}
                  width={650}
                  height={500}
                  alt={product?.name}
                />
              </div>
              <div className="flex flex-row mt-5 gap-2 w-full cursor-pointer">
                {product.images?.map((item, index) => (
                  <div key={index} onClick={() => gotToIndex(index)}>
                    <Image
                      src={item.image}
                      width={150}
                      height={20}
                      alt={product?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <p>
                {product?.rating} of {product?.numReviews} Reviews
              </p>
              <p className="text-2xl font-semibold my-5">{product?.name}</p>
              <p className="text-md font-medium my-5">£{product?.price}.00</p>
              <p className="text-[13px] my-5 ">
                {product?.description.substring(0, 310)}
              </p>
              <div className="flex justify-between my-6 items-center w-32">
                <p className="text-md mr-16 capitalize font-semibold">size</p>
                <div className="flex item-center">
                  <p className="size-text">M</p>
                  <p className="size-text">L</p>
                  <p className="size-text">XL</p>
                </div>
              </div>
              <div className="flex justify-between my-5 items-center w-40 ">
                <p className="text-md capitalize font-semibold">Status</p>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                type="button"
                className="text-lg my-5 font-display uppercase hover:bg-violet-500 bg-violet-600 text-white inline-block px-8 py-2 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductPage;
