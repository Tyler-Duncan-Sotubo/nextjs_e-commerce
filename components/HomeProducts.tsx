import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "../redux/reducer/productReducer";

type Props = {};

export const HomeProducts: FC<Props> = () => {
  const products = useSelector(getProductsSelector);

  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>{item.url}</div>
        </div>
      ))}
    </div>
  );
};
