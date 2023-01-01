import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getProductSelector } from "../redux/reducer/products";

type Props = {};

export const HomeProducts: FC<Props> = () => {
  const products = useSelector(getProductSelector);

  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
