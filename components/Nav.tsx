import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdPerson, MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

export const Nav: FC<Props> = () => {
  return (
    <nav className="font-display m-auto p-8 w-full shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex w-1/6 px-6 items-center">
          <GiHamburgerMenu size={30} />
          <h2 className="mx-4 text-2xl">CROYDON</h2>
        </div>
        <div className="flex w-2/5 justify-center ">
          <Link href="/">
            <p className=" text-sm font-medium mr-12">Home</p>
          </Link>
          <Link href="/">
            <p className=" text-sm font-medium mr-12">Shop</p>
          </Link>
          <Link href="/">
            <p className=" text-sm font-medium mr-12">Womens</p>
          </Link>
          <Link href="/">
            <p className=" text-sm font-medium mr-12">Mens</p>
          </Link>
          <Link href="/">
            <p className=" text-sm font-medium mr-12">Todays Deals</p>
          </Link>
        </div>
        <div className="flex justify-between w-1/6 px-6">
          <MdSearch size={18} />
          <MdPerson size={18} />
          <FaRegHeart size={18} />
          <FaShoppingCart size={18} />
        </div>
      </div>
    </nav>
  );
};
