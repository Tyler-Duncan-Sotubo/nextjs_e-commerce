import { createSlice} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import data from "../../utils/data";
import { AppState} from "../store/store";


const initialState = data.products;

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductData:(state, action) => {
           return [action.payload, state]
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
             return [action.payload, state]
        }
    } 
})

export const getProductSelector = (state: AppState) => state.product
export const {setProductData} = ProductSlice.actions
export default ProductSlice.reducer