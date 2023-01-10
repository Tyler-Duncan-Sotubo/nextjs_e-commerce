/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdPerson, MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../redux/reducer/cartSlice";
import { authSelector, logOutUser } from "../../redux/reducer/AuthSlice";
import { wishListSelector } from "../../redux/reducer/wishListSlice";

interface Props {
  setModalVisible: (boolean: any) => void;
  setOpenWishList: (boolean: any) => void;
}

export const Nav: FC<Props> = ({ setModalVisible, setOpenWishList }) => {
  const cartCount = useSelector(cartSelector);
  const wishListCount = useSelector(wishListSelector);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch()<any>;

  return (
    <nav className="font-display m-auto px-8 py-6 w-full shadow-md sticky top-0 z-5 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex w-1/6 px-5 items-center">
          <GiHamburgerMenu size={30} />
          <Link href="/">
            <h2 className="mx-4 text-2xl">CROYDON</h2>
          </Link>
        </div>
        <ul className="flex w-2/5 justify-center list-none">
          <li className="text-sm font-medium mr-12">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Womens</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Mens</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Todays Deals</Link>
          </li>
        </ul>
        {auth._id ? (
          <div className="flex justify-between items-center w-1/6 pr-4">
            {/* <div className="cursor-pointer text-[13px]">hello, {auth.name}</div> */}
            <div
              className="cursor-pointer text-sm"
              onClick={() => {
                dispatch(logOutUser());
              }}>
              LOGOUT
            </div>
            <MdSearch size={20} />
            <div
              onClick={() => {
                setModalVisible(true);
              }}
              className="flex cursor-pointer relative">
              <FaShoppingCart size={18} className="mr-1" />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                {cartCount.cartTotalQuantity > 0 ? (
                  <p className="text-xs font-bold text-white">
                    {cartCount.cartTotalQuantity}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center w-1/6 px-6">
            <MdSearch size={20} />
            <Link href="/login-register">
              <MdPerson size={25} />
            </Link>
            <div
              className="flex cursor-pointer relative"
              onClick={() => {
                setOpenWishList(true);
              }}>
              <FaRegHeart className="cursor-pointer mr-1" size={18} />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                <p className="text-xs font-bold text-white">
                  {wishListCount.itemsQuantity}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setModalVisible(true);
              }}
              className="flex cursor-pointer relative">
              <FaShoppingCart size={18} className="mr-1" />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                {cartCount.cartTotalQuantity > 0 ? (
                  <p className="text-xs font-bold text-white">
                    {cartCount.cartTotalQuantity}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
