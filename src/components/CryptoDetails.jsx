import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  // getCryptoDetails,
  useGetCryptoDetailsQuery,
  // useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
// import Loader from "./Loader";
// import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  //coin id is to know which currency were looking at
  //use params takes the id in the url and allows us use it as a variable
  const { coinId } = useParams();
  const [timePeriod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);

  return <div>CryptoDetails</div>;
};

export default CryptoDetails;
