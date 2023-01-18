import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store/store";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "@/Helpers/useLocalStorage";
import { IProduct } from "@/lib/interfaces/IProduct";

type CartState = {
  cartItem: IProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: CartState = {
  cartItem: getFromLocalStorage("cartItems")
    ? JSON.parse(getFromLocalStorage("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (x) => x._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`Added To Cart`, {
          position: "bottom-left",
        });
      } else {
        const inititalProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(inititalProduct);
        toast.success(`Added To Cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
      const newCartItems = state.cartItem.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItem = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      toast.error(`Removed From Cart`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (x) => x._id === action.payload._id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.info("Item decremented from cart", {
          position: "bottom-left",
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const newCartItems = state.cartItem.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItem = newCartItems;
        toast.error(`Removed From Cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    // eslint-disable-next-line no-unused-vars
    clearCart(state, action: PayloadAction) {
      state.cartItem = [];
      toast.error("Shopping Cart Cleared", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    // eslint-disable-next-line no-unused-vars
    getTotals(state, action: PayloadAction) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const cartSelector = (state: AppState) => state.cart;
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartReducer.actions;
export default cartReducer.reducer;
