import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdPerson, MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

export const Nav: FC<Props> = () => {
  return (
    <nav className="font-display m-auto px-8 py-6 w-full shadow-md sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex w-1/6 px-6 items-center">
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
            <Link href="/">Shop</Link>
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
