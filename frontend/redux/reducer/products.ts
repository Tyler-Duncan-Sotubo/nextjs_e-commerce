import { createSlice} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState} from "../store/store";


const initialState:any = {
    products:[]
};

export const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductData:(state, action) => {
            state.products = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
             state.products = action.payload
        }
    } 
})

export const getProductSelector = (state: AppState) => state.product
export const {setProductData} = productReducer.actions
export default productReducer.reducer