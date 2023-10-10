import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "3a75fcb8968bb9d0432399734b6031674df432f4";

export const fetchAdress = async (query: string) => {
  const options: any = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };
  try {
    const response = await fetch(url, options);
    return response.text();
  } catch (err) {
    err;
  }
};

export const api: any = createApi({
  reducerPath: "api",
  tagTypes: ["Food"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://delivery-food-app-back.vercel.app/products",
  }),
  endpoints: (builder) => ({
    getFood: builder.query<any, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetFoodQuery } = api;
