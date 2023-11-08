import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <div className="space-y-8 ">
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex items-center justify-center mt-12  h-10 p-3 pr-8 rounded-md mx-auto"
          />
        </div>
      )}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
        {cryptos?.map((currency) => (
          <div
            key={currency.uuid}
            className="crypto-card  pt-10 pl-10 pr-10 pb-0 md:p-4 "
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <div className=" border border-gray-300 p-4   rounded-lg hover:shadow-md text-black">
                <div className="flex items-center justify-between border-b-[0.5px] border-b-gray-300">
                  <p className="text-lg font-semibold">
                    {currency.rank}. {currency.name}
                  </p>
                  <img
                    src={currency.iconUrl}
                    alt={currency.name}
                    className="crypto-img h-5 -mt-4"
                  />
                </div>
                <div className="mt-2">
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketcap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
