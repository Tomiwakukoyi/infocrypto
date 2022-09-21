import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  //to specify 10 cryptos to show on homepage but when the
  //cryptocurrencies page is opened then the full 50
  //if were in a simlified view then count = 10 else =100
  //pass the simplified as props. By default it is set to be true on the homepage, check homepage
  //if simplified = true then count isset to 10 else set to 100
  //then pass the count to the useGetCryptosQuery
  const count = simplified ? 10 : 100;
  //here were renaming data to cryptolist to fit the need
  //then we destructure
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // this state has a starting value of cryptoList?.data?.coins which
  //is giving us access to all the coins
  const [cryptos, setCryptos] = useState([]);
  //state for the input value, the initial value is an empty string
  const [searchTerm, setSearchTerm] = useState("");
  //the use effect accepts a call back function and a dependency array
  //the function will eventually get executed when any of [cryptosList, searchTerm] changes
  useEffect(() => {
    //filter the searched coin out
    //theres a calback function where we get one specific coin
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  console.log(cryptos);
  if (isFetching) return "loading...";
  return (
    //<> </> is called a react fragment
    <>
      {/* if its not simplified, render the div */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            //onchange of the input field, get the event,e then setSearchTerm(from use state)=e.target.value
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {/* rows in antdesign can have gutters, gutters are just space inbtw the
    items 32,32 means top&bottom, left&right */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {/* were mapping over our cryptos and theres no {} because were instantly
        returning something */}
        {/* the question mark is soo that even if its undefined it will not break
        the code */}
        {cryptos?.map((currency) => (
          //xs means how wide the element should be on smaller devices
          //xs asin extra small and since the total width is 24, then it
          //should take 24
          //xs takes one col, small takes two col and lg takes 4 cols
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            //whenever youre looping over something, always remeber to add
            //a key
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-img"
                    src={currency.iconUrl}
                    height={20}
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketcap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
