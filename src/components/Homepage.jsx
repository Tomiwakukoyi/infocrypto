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
      <h2 className="text-2xl font-medium md:mt-10">Global Crypto Stats</h2>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:mt-3">
        <div>
          <div className="text text-gray-400">Total Cryptocurrencies</div>
          <div className="text-2xl">{globalStats.total}</div>
        </div>
        <div>
          <div className="text text-gray-400">Total Exchanges</div>
          <div className="text-2xl">{millify(globalStats.totalExchanges)}</div>
        </div>
        <div>
          <div className="text text-gray-400">Total Market Cap</div>
          <div className="text-2xl">{millify(globalStats.totalMarketCap)}</div>
        </div>
        <div>
          <div className="text text-gray-400">Total 24Hr Volume</div>
          <div className="text-2xl">{millify(globalStats.total24hVolume)}</div>
        </div>
        <div>
          <div className="text text-gray-400">Total Markets</div>
          <div className="text-2xl">{millify(globalStats.totalMarkets)}</div>
        </div>
      </div>

      <div className="md:mt-8 flex md:items-center md:justify-between mx-3">
        <h2 className="text-2xl font-semibold">
          Top 10 Cryptocurrencies in the world
        </h2>
        <div className="flex items-center justify-between">
          <h3 className="text-xl">
            <Link to="/cryptocurrencies" className="text-blue-500">
              Show More
            </Link>
          </h3>
        </div>
      </div>
      <Cryptocurrencies simplified />

      <div className="md:mt-8 md:space-y-4">
        <h2 className="text-3xl font-bold">Latest Crypto News</h2>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">
            <Link to="/news" className="text-blue-500">
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
