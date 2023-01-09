import React, { FC, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { wrapper } from "../redux/store/store";
import { setProductData, getProductSelector } from "../redux/reducer/products";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

interface Props {
  data: [];
  category: string;
}

const Shop: FC<Props> = () => {
  const { products } = useSelector(getProductSelector);
  const { product } = products;
  const data = product.products;

  const [filterdata, setFilteredData] = useState<string[]>(data);
  const [changeView, setChangeView] = useState<boolean>(false);
  const [isActive, setisActive] = useState<string>("active");

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
    setisActive("list");
  };

  const handleGridView = () => {
    setChangeView(false);
    setisActive("active");
  };

  return (
    <Layout title="shop">
      <div className="flex justify-end font-display items-center gap-2 max-w-screen-xl m-auto mt-20 cursor-pointer">
        <div onClick={() => handleGridView()}>
          <BsFillGrid3X3GapFill
            size={20}
            className={isActive === "active" ? " shopCatactive" : "shopCat"}
          />
        </div>
        <div onClick={() => handleListView()}>
          <BsListUl
            size={25}
            className={isActive === "list" ? " shopCatactive" : "shopCat"}
          />
        </div>
      </div>
      <div className="flex justify-between font-display max-w-screen-xl m-auto mt-7">
        <ul className="w-1/5">
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
        <div
          className={
            changeView
              ? "flex flex-col justify-start w-4/5"
              : "grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 w-4/5"
          }>
          {filterdata &&
            filterdata.map((product: any) => (
              <ProductItem product={product} key={product.slug} />
            ))}
        </div>
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
