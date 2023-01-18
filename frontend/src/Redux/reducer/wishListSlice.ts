import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppState } from "../store/store";
import { IProduct } from "@/lib/interfaces/IProduct";
import { getFromLocalStorage } from "@/Helpers/useLocalStorage";

type WishListState = {
  items: IProduct[];
  itemsQuantity: number;
  itemsTotal: number;
};

const initialState: WishListState = {
  items: getFromLocalStorage("wishlist")
    ? JSON.parse(getFromLocalStorage("wishlist")!)
    : [],
  itemsQuantity: 0,
  itemsTotal: 0,
};

const wishListeReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtoWishList(state, action) {
      const itemIndex = state.items.findIndex(
        (x) => x._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const newCartItems = state.items.filter(
          (x) => x._id !== action.payload._id
        );
        state.items = newCartItems;
        toast.error("Removed From Wishlist", {
          position: "bottom-left",
        });
      } else {
        const inititalProduct = { ...action.payload, itemsQuantity: 1 };
        state.items.push(inititalProduct);
        toast.success("Added From Wishlist", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    removeWishList(state, action) {
      const newCartItems = state.items.filter(
        (x) => x._id !== action.payload._id
      );
      state.items = newCartItems;
      localStorage.setItem("wishlist", JSON.stringify(state.items));
      toast.error("Removed From Wishlist", {
        position: "bottom-left",
      });
    },
  },
});

export const wishListSelector = (state: AppState) => state.wishList;
export const { addtoWishList, removeWishList } = wishListeReducer.actions;
export default wishListeReducer.reducer;
