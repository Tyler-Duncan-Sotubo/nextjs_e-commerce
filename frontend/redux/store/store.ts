import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import products from "../reducer/products";
import { Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import slides from "../reducer/slides";
import cartReducer from "../reducer/cartSlice";
import { productApi } from "../../modules/productsApi";

const makeStore = () =>
  configureStore({
    reducer: {
      product: products,
      slide: slides,
      cart: cartReducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
