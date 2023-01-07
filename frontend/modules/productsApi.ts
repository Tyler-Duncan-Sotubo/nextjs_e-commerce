import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/",
  }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const {useGetAllProductsQuery} = productApi