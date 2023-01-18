import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/Layout/Layout";
import { useSelector } from "react-redux";
import {
  addToCart,
  cartSelector,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "@/Redux/reducer/cartSlice";
import {
  HiPlus,
  HiMinus,
  HiOutlineArrowLeft,
  HiShoppingCart,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { getFromLocalStorage } from "@/Helpers/useLocalStorage";
import PayButton from "@/components/UI/PayButton";

type Props = {};

const Cart: FC<Props> = () => {
  const cartItems = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getFromLocalStorage("cartItems");
  });

  const handleAddToCart = (arg: any) => {
    dispatch(addToCart(arg));
  };

  const handleRemoveFromCart = (arg: any) => {
    dispatch(removeFromCart(arg));
  };

  const decreaseFromCart = (arg: any) => {
    dispatch(decreaseCart(arg));
  };

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <Layout title="Your Cart">
        {cartItems.cartTotalAmount === 0 ? (
          <div className="flex flex-col justify-center items-center gap-8 my-40">
            <HiShoppingCart size={150} className="text-gray-400" />
            <p>Cart Is currently Empty</p>
            <button
              type="button"
              className="bg-violet-600 w-[15%] text-white py-3 font-display uppercase font-semibold hover:bg-violet-500">
              Shop Now
            </button>
          </div>
        ) : (
          <div className="m-auto w-[80%] my-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500  ">
                <thead className="text-md uppercase text-gray-700 bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-5">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Qunatity
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.cartItem &&
                    cartItems.cartItem.map((item, index) => (
                      <>
                        <tr
                          key={index}
                          className="bg-white border-b hover:bg-gray-50">
                          <th
                            scope="row"
                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap flex items-center">
                            <Link href={`/product/${item.slug}`}>
                              <div className="relative w-10 h-10 mr-4">
                                <Image
                                  src={item.image}
                                  fill
                                  className="mr-4"
                                  alt={item.name}
                                />
                              </div>
                            </Link>
                            <div className="flex flex-col gap-1 pt-2">
                              <p className="font-medium text-xs">{item.name}</p>
                              <p className="font-light text-xs">
                                Brand: {item.brand}
                              </p>
                            </div>
                          </th>
                          <td className="px-6 py-4 font-bold">£{item.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex w-[60%] justify-around font-bold">
                              <HiMinus
                                size={15}
                                className="cursor-pointer"
                                onClick={() => {
                                  decreaseFromCart(item);
                                }}
                              />
                              <p className="text-md mx-4">
                                {item.cartQuantity}
                              </p>
                              <HiPlus
                                size={15}
                                className="cursor-pointer"
                                onClick={() => {
                                  handleAddToCart(item);
                                }}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 font-bold">
                            £{item.price * item.cartQuantity}
                          </td>
                          <td className="px-6 py-4 text-right ">
                            <div className="border-2 inline-block p-1">
                              <MdClose
                                onClick={() => {
                                  handleRemoveFromCart(item);
                                }}
                                size={20}
                                className="text-gray-400 cursor-pointer"
                              />
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between m-4">
              <button
                type="button"
                className="bg-violet-600 w-[15%] text-white py-3 font-display uppercase font-semibold hover:bg-violet-500"
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  clearAllCart();
                }}>
                Clear Cart
              </button>
            </div>
            <div className="flex flex-row justify-between mr-6">
              <div className=" w-3/4"></div>
              <div className="w-1/4">
                <div className="flex justify-between items-center flex-row my-6">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-bold text-lg">
                    {cartItems.cartTotalAmount}
                  </p>
                </div>
                <p className=" text-xs mt-10 text-gray-500">
                  Taxes and shipping calculated at checkout
                </p>
                <PayButton cart={cartItems.cartItem} />
                <Link href="/">
                  <div className="flex items-center flex-row my-4">
                    <HiOutlineArrowLeft size={20} />
                    <p className="mx-2 cursor-pointer">Continue Shopping</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Cart;
