import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  name: string;
  price: number;
  id: string;
  url: string;
}

const initialState: Product[] = [
  { name: "Lorem ipsum decor one", price: 15.5, url: "", id: "product1" },
  { name: "Lorem ipsum decor one", price: 15.5, url: "", id: "product1" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});

export const getProductsSelector = (state: RootState) => state.product;
export const { SET_PRODUCTS } = productsSlice.actions;
export default productsSlice.reducer;
