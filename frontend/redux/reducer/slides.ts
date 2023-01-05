import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store/store";

const initialState: any = [];

export const SlideSlice = createSlice({
    name: 'slides',
    initialState,
    reducers: {
        setSlideData: (state, action) => {
            return [action.payload, state]
        }
    },
    extraReducers:{
        [HYDRATE]:(state, action) => {
            return [action.payload, state]
        }
    }
})

export const slideSelector = (state: AppState) => state.slide
export const {setSlideData} = SlideSlice.actions
export default SlideSlice.reducer