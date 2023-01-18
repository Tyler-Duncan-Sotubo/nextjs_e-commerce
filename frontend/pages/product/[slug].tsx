import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Layout from "@components/Layout/Layout";
import { useDispatch } from "react-redux";
import { addToCart } from "@redux/reducer/cartSlice";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useRouter } from "next/router";
import { getSingleProduct } from "@/Helpers/getProducts";
import { IProduct } from "@/lib/interfaces/IProduct";

const ProductPage: FC = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const {
    query: { slug },
  } = useRouter();

  const { data } = useQuery<IProduct, Error>(["products", slug], () =>
    getSingleProduct(slug)
  );

  return (
    <div>
      <Layout title="">
        <div className="w-[85%] m-auto my-10 gap-5 font-display">
          <div className="flex gap-2 my-10">
            <Link href="/">
              <p className="text-md">Home</p>
            </Link>
            <Link href="/product/">
              <p className="text-md">» Shop » </p>
            </Link>
            <p className="text-md">{data?.name}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-3 w-full">
            <div className="relative">
              <Image
                src={data?.image!}
                width={450}
                height={500}
                alt={data?.name!}
              />
            </div>
            <div className="col-span-2">
              <p>
                {data?.rating} of {data?.numReviews} Reviews
              </p>
              <p className="text-2xl font-semibold my-5">{data?.name}</p>
              <p className="text-md font-medium my-5">£{data?.price}.00</p>
              <p className="text-[13px] my-5 ">
                {data?.description!.substring(0, 310)}
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
                  {data?.countInStock! > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(data)}
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

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<IProduct>(["products", slug], () =>
    getSingleProduct(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
