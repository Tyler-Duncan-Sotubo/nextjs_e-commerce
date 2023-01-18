import React, { FC, useState } from "react";
import AdminLayout from "@components/Layout/AdminLayout";
import RoundeButton from "@components/UI/RoundeButton";
import SearchInput from "@components/UI/SearchInput";
import { BsPlus } from "react-icons/bs";
import { MdOutlineSort } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/lib/interfaces/IProduct";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getProducts } from "@/Helpers/getProducts";
import Pagination from "@/components/UI/Pagination";

const Products: FC = () => {
  const { data } = useQuery("products", getProducts);

  const productPerPage = 6;
  const [currentPage, setcurrentPage] = useState<number>(1);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const newData = [...data];
  const sortedData = newData.reverse();
  const pageProducts = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
            <p>Add product</p>
            <span className="ml-2">
              <BsPlus size={25} />
            </span>
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
        <Pagination
          data={newData}
          productPerPage={productPerPage}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      </div>
    </AdminLayout>
  );
};

export default Products;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<IProduct>("products", getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
