import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import moment from "moment";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {!simplified && (
        <div className="col-span-full">
          <select
            className="w-full p-2 bg-gray-200 rounded"
            placeholder="Select a crypto"
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <option value="Cryptocurrency"></option>
            {data?.data?.coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </select>
        </div>
      )}
      {cryptoNews.value.map((news, i) => (
        <div className="bg-white rounded p-4 shadow-md" key={i}>
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className="mb-4">
              <h4 className="  font-bold">{news.name}</h4>
              <img
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="news"
                className="w-full h-auto"
              />
            </div>
            <p className="text-gray-600">
              {news.description.length > 100
                ? `${news.description.substring(0, 100)}...`
                : news.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <img
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt=""
                  className="w-8 h-8 bg-gray-300 rounded-full"
                />
                <span className="text-gray-700 text-xs">
                  {news.provider[0]?.name}
                </span>
              </div>
              <span className="text-gray-500">
                {moment(news.datePublished).fromNow()}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
