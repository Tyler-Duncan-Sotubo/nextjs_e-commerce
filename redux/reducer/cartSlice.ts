import { createSlice } from "@reduxjs/toolkit";

export interface Item{
    id: string
   cartQuantity:number,
}

type CartState = {
    cartItem: Item[]
    cartTotalQuantity: number
    cartTotalAmount:number
}

const initialState: CartState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount:0
}

const cartReducer = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
          const itemIndex = state.cartItem.findIndex((x) => x.id === action.payload.id)
            if (itemIndex >= 0) {
               state.cartItem[itemIndex].cartQuantity += 1
            } else {
            const inititalProduct = {...action.payload, cartQuantity:1}
           state.cartItem.push(inititalProduct )
          }
          
        }
    }
})

export const {addToCart} = cartReducer.actions
export default cartReducer.reducer