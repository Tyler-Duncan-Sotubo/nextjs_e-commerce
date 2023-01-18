import React, { FC, useState } from "react";
import Layout from "@components/Layout/Layout";
import axios from "axios";
import { wrapper } from "@/Redux/store/store";
import { setProductData, getProductSelector } from "@/Redux/reducer/products";
import { useSelector } from "react-redux";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import ProductList from "@components/ProductList";
import { IProduct } from "@/lib/interfaces/IProduct";

const Shop: FC = () => {
  const { products } = useSelector(getProductSelector);
  const { product } = products;
  const data = product.products;

  const [filterdata, setFilteredData] = useState<[IProduct]>(data);
  const [changeView, setChangeView] = useState<boolean>(false);
  const [isActive, setisActive] = useState<string>("active");
  const [listActive, setListActive] = useState<string>("active");

  const handleFilter = (cat: string) => {
    const newData = data.filter((item: any) => {
      if (item.category.includes(cat)) {
        return item;
      }
    });
    setFilteredData(newData.sort(() => 0.5 - Math.random()));
    setisActive(cat);
  };

  const handleListView = () => {
    setChangeView(true);
    setListActive("list");
  };

  const handleGridView = () => {
    setChangeView(false);
    setListActive("active");
  };

  return (
    <Layout title="shop">
      <div
        className="flex justify-end font-display items-center gap-2 
        max-w-screen-xl m-auto mt-20 px-20 cursor-pointer pb-2 border-b-[1px]">
        <div onClick={() => handleGridView()}>
          <BsFillGrid3X3GapFill
            size={20}
            className={listActive === "active" ? " shopCatactive" : "shopCat"}
          />
        </div>
        <div onClick={() => handleListView()}>
          <BsListUl
            size={25}
            className={listActive === "list" ? " shopCatactive" : "shopCat"}
          />
        </div>
      </div>
      <div className="flex justify-between font-display max-w-screen-xl m-auto mt-10 px-20">
        <ul className="w-1/4">
          <li className="text-2xl my-5">Categories</li>
          <li
            className={isActive === "active" ? "shopCatactive" : "shopCat"}
            onClick={() => {
              setFilteredData(data);
              setisActive("active");
            }}>
            All Categories
          </li>
          <li
            className={isActive === "Women" ? "shopCatactive" : "shopCat"}
            onClick={() => handleFilter("Women")}>
            Women
          </li>
          <li
            className={isActive === "Men" ? "shopCatactive" : " shopCat"}
            onClick={() => handleFilter("Men")}>
            Men
          </li>
          <li
            className={isActive === "Top" ? "shopCatactive" : " shopCat"}
            onClick={() => handleFilter("Top")}>
            Top
          </li>
          <li
            className={isActive === "Shoes" ? "shopCatactive" : " shopCat"}
            onClick={() => handleFilter("Shoes")}>
            Shoes
          </li>
        </ul>
        <ProductList data={filterdata} view={changeView} />
      </div>
    </Layout>
  );
};

export default Shop;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await axios.get("http://localhost:1000/api/products");
    const apiData = res.data;

    store.dispatch(setProductData(apiData));

    return {
      props: {},
    };
  }
);
