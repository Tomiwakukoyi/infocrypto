import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        {/* Layout is a component from antdesign that
        basically lays everything out */}
        <Layout>
          <div className="routes">
            {/* the switch component is coming from react-router-dom */}
            {/**switch allos us create multiple routews */}
            <Routes>
              {/* the 'exact' means it will only be triggered if yougo exactly to that
              url */}
              <Route exact path="/" element={<Homepage />} />

              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        {/* footer */}
        {/* <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Infocrypto <br />
            All rights reserved
          </Typography.Title> */}
        {/* space is antdesigns way of saying this is a 
        div but we need space btw the items */}
        {/* <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div> */}
      </div>
    </div>
  );
};

export default App;
