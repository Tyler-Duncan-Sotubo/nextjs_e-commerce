import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import sliderItemReducer from "./reducer/sliderItemReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    slides: sliderItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type SlideState = ReturnType<typeof store.getState>;
