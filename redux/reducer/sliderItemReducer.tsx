import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlideState } from "../store";

interface Slides {
  name: string;
  url: string;
}

const initialState: Slides[] = [
  {
    url: "https://images.unsplash.com/photo-1667863033054-9fe40c59a229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Air Jordan Retro 1",
  },
  {
    url: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Female Fashion Collection",
  },
  {
    url: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
    name: "Air Jordan Retro 3",
  },

  {
    url: "https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Air Jordan Retro 4",
  },
  {
    url: "https://images.unsplash.com/photo-1631642777454-b43dc9fc2ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
    name: "Air Jordan Retro 5",
  },
];

const sliderSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    SET_SLIDES: (state, action: PayloadAction<Slides>) => {
      return [action.payload, ...state];
    },
  },
});

export const getSlideSelector = (state: SlideState) => state.slides;
export const { SET_SLIDES } = sliderSlice.actions;
export default sliderSlice.reducer;
