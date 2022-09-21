import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "28260f82e4mshce78a73ef3961c0p1f6394jsn082a9f6d3cc2",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeders,
});

//createAPi is coming from redux also
export const cryptoNewsApi = createApi({
  //what is the reducer for? its for cryptoApi
  //we always need reducerPath when using redux
  reducerPath: "cryptoNewsApi",

  //baseQuery is equal to fetchBaseQuery, a function that acccepts an object
  baseQuery: fetchBaseQuery({ baseUrl }),

  //endpoints is equal to a function which takes builder as a first parameter
  // and it returns an object
  endpoints: (builder) => ({
    //getCryptos is the name of the first object and can be named
    //anything
    getCryptoNews: builder.query({
      //the query is a functionthat points to the specific request
      //which is coins
      //the create request passes the url which is /coins
      //pass the count const in here as a param then add the ?limit={count}
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
