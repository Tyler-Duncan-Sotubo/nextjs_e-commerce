import React, { FC } from "react";
import { RxAvatar, RxBell } from "react-icons/rx";
import SearchInput from "../../modules/SearchInput";

type Props = {};

const TopBar: FC<Props> = () => {
  return (
    <div className="flex justify-between py-6 items-center border-b-[1px]">
      <div className="w-1/4">
        <p className="text-xl font-display px-6 font-semibold">Dashboard</p>
      </div>
      <div className="w-1/2">
        <SearchInput placeholder="Search" />
      </div>
      <div className="w-1/4 flex justify-end px-6">
        <RxBell size={30} className="mx-2" />
        <RxAvatar size={30} className="mx-2" />
      </div>
    </div>
  );
};

export default TopBar;
