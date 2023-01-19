import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";
import { AppState } from "../store/store";
import { AuthState } from "@/lib/interfaces/IAuth";
import { getFromLocalStorage } from "@/Helpers/useLocalStorage";
import { User, LoginUser } from "@/lib/interfaces/IUser";

const initialState: AuthState = {
  token: getFromLocalStorage("token"),
  name: "",
  email: "",
  _id: "",
  isAdmin: false,
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: user.name,
        password: user.password,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user: LoginUser, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        password: user.password,
        email: user.email,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    getUser(state, action: PayloadAction): any {
      const token = state.token;
      if (token) {
        const user: any = jwtDecode(token);
        return {
          ...state,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          userLoaded: true,
        };
      }
    },
    // eslint-disable-next-line no-unused-vars
    logOutUser(state, action: PayloadAction): any {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: any = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
          isAdmin: user.isAdmin,
        };
      } else return state;
    });
    // eslint-disable-next-line no-unused-vars
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    // eslint-disable-next-line no-unused-vars
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: any = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          loginStatus: "success",
        };
      } else return state;
    });
    // eslint-disable-next-line no-unused-vars
    builder.addCase(loginUser.rejected, (state, action) => {
      return { ...state, loginStatus: "rejected", loginError: action.payload };
    });
  },
});

export const authSelector = (state: AppState) => state.auth;
export const { getUser, logOutUser } = authReducer.actions;
export default authReducer.reducer;
