import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return "loading...";

  return (
    <div className=" pl-8">
      <h2 className="text-2xl font-medium mt-10">Global Crypto Stats</h2>
      <div className="md:grid flex flex-wrap gap-x-5 gap-y-4 items-center md:grid-cols-2 md:gap-4 md:mt-3">
        <div>
          <div className="text text-gray-400">Total Cryptocurrencies</div>
          <div className=" text-lg md:text-2xl">{globalStats.total}</div>
        </div>
        <div>
          <div className="text text-gray-400">Total Exchanges</div>
          <div className=" text-lg md:text-2xl">
            {millify(globalStats.totalExchanges)}
          </div>
        </div>
        <div>
          <div className="text text-gray-400">Total Market Cap</div>
          <div className=" text-lg md:text-2xl">
            {millify(globalStats.totalMarketCap)}
          </div>
        </div>
        <div>
          <div className="text text-gray-400">Total 24Hr Volume</div>
          <div className=" text-lg md:text-2xl">
            {millify(globalStats.total24hVolume)}
          </div>
        </div>
        <div>
          <div className="text text-gray-400">Total Markets</div>
          <div className=" text-lg md:text-2xl">
            {millify(globalStats.totalMarkets)}
          </div>
        </div>
      </div>

      <div className="md:mt-8 mt-6 flex items-center justify-center gap-8 md:justify-between mx-0 md:mx-3">
        <h2 className=" text-lg md:text-2xl font-semibold">
          Top 10 Cryptocurrencies in the world
        </h2>
        <div className="flex items-center ">
          <h3 className="  md:text-xl ">
            <Link to="/cryptocurrencies" className="text-purple-800">
              Show More
            </Link>
          </h3>
        </div>
      </div>
      <Cryptocurrencies simplified />

      <div className="flex items-center justify-between mx-2 mt-4 md:mt-8 md:space-y-4">
        <h2 className="text-lg font-bold">Latest Crypto News</h2>
        <div className="flex items-center justify-between">
          <h3 className=" hover:text-purple-800">
            <Link to="/news" className="text-purple-300 ">
              Show More
            </Link>
          </h3>
        </div>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
