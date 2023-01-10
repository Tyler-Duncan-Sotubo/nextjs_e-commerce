import { createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppState } from "../store/store";


export interface Item{
    _id: number
    cartQuantity: number,
    name: string
    image: string
    price: number
    brand: string
    slug:string
}

type WishListState = {
    items: Item[],
    itemsQuantity: number
    itemsTotal:number
}

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem(key)
}

const initialState: WishListState = {
    items: getFromLocalStorage("wishlist") ? JSON.parse(getFromLocalStorage("wishlist")!): [],
    itemsQuantity: 0,
    itemsTotal:0
}

const wishListeReducer = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addtoWishList(state, action) {
            const itemIndex = state.items.findIndex((x) => x._id === action.payload._id)
            if (itemIndex >= 0) {
                state.items.pop(itemIndex)
                toast.error("Removed From Wishlist", {
                    position:"bottom-left"
                })
            } else {
                const inititalProduct = { ...action.payload, itemsTotal: 1 }
                state.items.push(inititalProduct)
                toast.success("Added From Wishlist", {
                    position:"bottom-left"
                })
            }
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        },
    }
})

export const wishListSelector = (state: AppState) => state.wishList
export const { addtoWishList} = wishListeReducer.actions
export default wishListeReducer.reducer