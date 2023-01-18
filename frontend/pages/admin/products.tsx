import React, { FC, useState } from "react";
import AdminLayout from "@components/Layout/AdminLayout";
import RoundeButton from "@components/UI/RoundeButton";
import SearchInput from "@components/UI/SearchInput";
import { BsPlus } from "react-icons/bs";
import {
  MdOutlineSort,
  MdOutlineArrowBack,
  MdOutlineArrowForward,
} from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getProductSelector } from "@/Redux/reducer/products";
import Image from "next/image";
import { IProduct } from "@/lib/interfaces/IProduct";

const Products: FC = () => {
  const { products } = useSelector(getProductSelector);
  const { product } = products;
  const data = product.products;
  const productPerPage = 6;
  const [currentPage, setcurrentPage] = useState(1);

  const totalNumerOfPages = Math.ceil(data.length / productPerPage);
  const pages = [...Array(totalNumerOfPages + 1).keys()].slice(1);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const newData = [...data];
  const sortedData = newData.reverse();
  const pageProducts = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    if (currentPage !== totalNumerOfPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  return (
    <AdminLayout title="Product Page">
      <div className="flexBetween px-10 py-8 font-display mb-4">
        <div className="flexBetween bg-gray-50  p-2 px-6 rounded-3xl">
          <p className="mr-2">Sort</p> <MdOutlineSort size={25} />
        </div>
        <div className="w-2/5">
          <SearchInput placeholder="Search Product" />
        </div>
        <Link href="/admin/upload">
          <RoundeButton>
            <div className="flexBetween">
              <p>Add product</p>
              <BsPlus size={25} />
            </div>
          </RoundeButton>
        </Link>
      </div>
      <div>
        <div className="relative overflow-x-auto px-10">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-md uppercase text-gray-700 bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price $
                </th>
                <th scope="col" className="px-6 py-3">
                  in Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete Product
                </th>
              </tr>
            </thead>
            <tbody>
              {pageProducts &&
                pageProducts.map((product: IProduct, index: number) => (
                  <>
                    <tr
                      key={index}
                      className="bg-white border-b hover:bg-gray-50">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center">
                        <div className="relative h-11 w-10 mr-4">
                          <Image
                            src={product.image}
                            fill
                            className="mr-4"
                            alt={product.name}
                          />
                        </div>
                        <p className="capitalize">{product.name}</p>
                      </th>
                      <td className="px-6 py-4 font-bold">{product.price}</td>
                      <td className="px-6 py-4">{product.countInStock}</td>
                      <td className="px-6 py-4 font-bold"></td>
                      <td className="px-6 py-4 text-right"></td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
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
      </div>
    </AdminLayout>
  );
};

export default Products;
