import Link from "next/link";
import React, { FC, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Redux/reducer/cartSlice";
import { GrClose, GrSearch } from "react-icons/gr";

type Props = {};

const MobileNav: FC<Props> = () => {
  const cartCount = useSelector(cartSelector);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <Link href="/">
          <h2 className="mx-2 text-xl">CROYDON</h2>
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex cursor-pointer relative ">
            <FaRegHeart className="cursor-pointer mr-1" size={18} />
          </div>
          <div className="flex cursor-pointer relative mr-6">
            <FaShoppingCart size={18} className="mr-1" />
            <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
              {cartCount.cartTotalQuantity > 0 ? (
                <p className="text-xs font-bold text-white">
                  {cartCount.cartTotalQuantity}
                </p>
              ) : null}
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={25} />
          </div>
          <div
            className={`fixed w-full h-full bg-white top-0 right-0 z-[9998] duration-700 shadow-lg ${
              open ? "right-0" : "right-[-1000px]"
            }`}>
            <div className="flex justify-between bg-gray-100 p-5">
              <GrClose
                size={25}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <GrSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
