/* eslint-disable no-unused-vars */
import React, { FC } from "react";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {
  removeWishList,
  wishListSelector,
} from "@/Redux/reducer/wishListSlice";

interface Props {
  openWishList: boolean;
  setOpenWishList: (boolean: any) => void;
}

const Wishlist: FC<Props> = ({ openWishList, setOpenWishList }) => {
  const items = useSelector(wishListSelector);
  const selectedCartItems = items.items?.slice(0, 6);
  const dispatch = useDispatch();

  const removeFromWishList = (arg: any) => {
    dispatch(removeWishList(arg));
  };

  return (
    <>
      {openWishList ? (
        <div className="fixed z-[9998] top-0 right-0 w-[100%] h-[100%] font-display">
          <div className=" fixed w-1/4 h-full bg-white top-0 right-0 z-[9999] p-5 animate-slide shadow-lg">
            <div className="flex justify-between mt-1 border-b-[1px] pb-4">
              <p className="text-md font-medium ">WishList</p>
              <MdClose
                size={25}
                className="text-black cursor-pointer"
                onClick={() => {
                  setOpenWishList(false);
                }}
              />
            </div>
            {items.items.length === 0 ? (
              <p className="text-center my-4">No item in Wishlist</p>
            ) : (
              <div className="my-6">
                {selectedCartItems?.map((item, index) => (
                  <>
                    <div className="flex my-6 border-b-[1px] pb-4" key={index}>
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={() => {
                          setOpenWishList(false);
                        }}>
                        <Image
                          src={item.image}
                          width={80}
                          height={80}
                          alt={item.name}
                        />
                      </Link>
                      <div className="ml-2 flex flex-col text-[12px] gap-1 pt-2">
                        <div className="flex justify-between w-56">
                          <p>{item.name}</p>
                          <div
                            className="border-2 py-[.1rem] px-[.2rem] text-xs cursor-pointer"
                            onClick={() => {
                              removeFromWishList(item);
                            }}>
                            X
                          </div>
                        </div>
                        <p>Brand: {item.brand}</p>
                        <div className="flex flex-row">
                          <p className="mr-1">{item.cartQuantity} x</p>
                          <p>£{item.price}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <div className="flex flex-col">
                  <Link href="/cart">
                    <button
                      type="button"
                      className="bg-violet-600 w-[100%] text-white my-4 py-2 font-display uppercase font-semibold hover:bg-violet-500">
                      View Wishlist
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Wishlist;
