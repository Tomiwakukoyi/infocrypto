import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import { Puff } from "react-loader-spinner"; // Import the loader component
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        // Display the loading animation here
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Puff type="Puff" color="purple" height={100} width={100} />
        </div>
      ) : (
        // Your main content here
        <div>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  <Route exact path="/exchanges" element={<Exchanges />} />
                  <Route
                    exact
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  />
                  <Route
                    exact
                    path="/crypto/:coinId"
                    element={<CryptoDetails />}
                  />
                  <Route exact path="/news" element={<News />} />
                </Routes>
              </div>
            </Layout>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
