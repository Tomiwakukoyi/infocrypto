//where the logic of fetching api is
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//setting the headers which are objects from rapid api
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "28260f82e4mshce78a73ef3961c0p1f6394jsn082a9f6d3cc2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
//this is the url from rapid api also
const baseUrl = "https://coinranking1.p.rapidapi.com";

//a fucntion to add the url and headers to our call
const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

//createAPi is coming from redux also
export const cryptoApi = createApi({
  //what is the reducer for? its for cryptoApi
  //we always need reducerPath when using redux
  reducerPath: "cryptoApi",

  //baseQuery is equal to fetchBaseQuery, a function that acccepts an object
  baseQuery: fetchBaseQuery({ baseUrl }),

  //endpoints is equal to a function which takes builder as a first parameter
  // and it returns an object
  endpoints: (builder) => ({
    //getCryptos is the name of the first object and can be named
    //anything
    getCryptos: builder.query({
      //the query is a functionthat points to the specific request
      //which is coins
      //the create request passes the url which is /coins
      //pass the count const in here as a param then add the ?limit={count}
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      //the query is a functionthat points to the specific request
      //which is coins
      //the create request passes the url which is /coins
      //pass the coinId const in here as a param then add the ?limit={count}
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
