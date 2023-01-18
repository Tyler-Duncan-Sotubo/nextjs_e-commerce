import React, { Dispatch, SetStateAction, FC } from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

type Props = {
  data: [] | any;
  productPerPage: number;
  currentPage: number;
  setcurrentPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<Props> = ({
  data,
  productPerPage,
  currentPage,
  setcurrentPage,
}) => {
  const totalNumerOfPages = Math.ceil(data.length / productPerPage);
  const pages = [...Array(totalNumerOfPages + 1).keys()].slice(1);

  const handleNextPage = () => {
    if (currentPage !== data.length / productPerPage) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex mt-12 justify-center font-display text-sm">
      <span
        className="flexBetween bg-gray-50  mx-2 px-6 shadow-lg border-2 cursor-pointer rounded-md"
        onClick={handlePreviousPage}>
        <MdOutlineArrowBack size={25} />
        <p className="mx-2">Previous</p>
      </span>
      {pages.map((page) => (
        <span
          className="flexBetween bg-gray-50  mr-2 py-2 px-4 shadow-lg border-2 cursor-pointer rounded-md"
          key={page}
          onClick={() => setcurrentPage(page)}>
          {page}
        </span>
      ))}
      <span
        className="flexBetween bg-gray-50  mx-2 px-6 shadow-lg border-2 cursor-pointer rounded-md"
        onClick={handleNextPage}>
        <p className="mx-2">Next</p>
        <MdOutlineArrowForward size={25} />
      </span>
    </div>
  );
};

export default Pagination;
