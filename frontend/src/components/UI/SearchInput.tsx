import React, { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  placeholder: string;
};

const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="outline-none w-full border-[1px] rounded-lg py-2 px-8 placeholder-black placeholder:text-sm placeholder:capitalize"
      />
      <div className="absolute top-3 left-2">
        <IoSearchOutline size={20} />
      </div>
    </div>
  );
};

export default SearchInput;
