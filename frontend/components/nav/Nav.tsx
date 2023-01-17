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
import NavLinks from "./NavLinks";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";

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
    <nav>
      <div className="md:block hidden">
        <TopNav />
      </div>
      <div className="md:block hidden font-display m-auto px-2 py-2 w-full shadow-md bg-white">
        <div className="flex justify-between items-center">
          <div className="flex w-1/6 px-2 items-center">
            <GiHamburgerMenu size={25} />
            <Link href="/">
              <h2 className="mx-2 text-xl">CROYDON</h2>
            </Link>
          </div>
          <div className="flex justify-between list-none w-2/6">
            <NavLinks />
          </div>
          <div className="flex justify-between items-center w-1/6 px-6">
            <MdSearch size={20} />
            <Link href="/login-register">
              <MdPerson size={25} />
            </Link>
            <div
              className="flex cursor-pointer relative"
              onClick={() => setOpenWishList(true)}>
              <FaRegHeart className="cursor-pointer mr-1" size={18} />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                {wishListCount.items.length > 0 ? (
                  <p className="text-xs font-bold text-white">
                    {wishListCount.items.length}
                  </p>
                ) : null}
              </div>
            </div>
            <div
              onClick={() => setModalVisible(true)}
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
        </div>
      </div>
      <div className="md:hidden bg-gray-100 p-6">
        <MobileNav />
      </div>
    </nav>
  );
};
