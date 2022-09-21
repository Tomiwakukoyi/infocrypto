import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

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
  if (!cryptoNews?.value) return "loading....";
  return (
    <Row gutter={[24, 24]}>
      {/* if theres no simplified, render the followinng code */}
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            //this is filtering the options so it shows the one of the selected crypto
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency"></Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        //xs is xtra small one col, sm is small2cols, lg large 4 cols
        //key is equal to the index of the array were mapping over
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                />
              </div>
              <p>
                {/* if news.description is longer than 100 characters
                render a news.description.substring(0,100) meaning first 100 characters
                then the ... at the end to signify theres more and if its less than 100 just render news.description */}
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                {/* this text will be the timestamp so we use the moment library */}
                <Text>
                  {/* moment then the news.datePublished for the date then startOf as begining then from now as in when */}
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
