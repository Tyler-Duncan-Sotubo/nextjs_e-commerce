import Link from "next/link";
import React, { FC } from "react";
import { RxAvatar, RxBell } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

type Props = {};

const TopBar: FC<Props> = () => {
  return (
    <div className="shadow-md flex justify-between py-6 items-center">
      <div className="w-1/4">
        <p className="text-xl font-display px-6 font-semibold">Dashboard</p>
      </div>
      <div className="relative">
        <input
          placeholder="Search"
          className="outline-none md:w-[500px]  border-[1px] rounded-md py-2 px-8 placeholder-black placeholder:text-sm "
        />
        <div className="absolute top-3 left-2">
          <IoSearchOutline size={20} />
        </div>
      </div>
      <div className="w-1/4 flex justify-end px-6">
        <RxBell size={30} className="mx-2" />
        <RxAvatar size={30} className="mx-2" />
      </div>
    </div>
  );
};

export default TopBar;
