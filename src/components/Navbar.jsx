import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="  bg-purple-900 h-full">
      <div className="  p-4 flex gap-3 md:gap-0 justify-between items-center">
        <div className="flex items-center hover:text-purple-300 ">
          <Link
            to="/"
            style={{ fontFamily: "Permanent Marker" }}
            className="  text-white font-white mt-7 text-base md:text-lg"
          >
            InfoCrypto
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? (
            <MenuIcon className="w-6 h-6 flex items-center text-white hover:text-purple-300 mt-7" />
          ) : (
            <MenuIcon className="w-6 h-6 flex items-center text-white hover:text-purple-300 mt-7" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`flex md:hidden mt-7 flex-col items-center justify-center gap-10 md:gap-5 ${
          isMenuOpen ? "block" : "block"
        }`}
      >
        <Link to="/" className="nav-item flex items-center justify-center">
          <HomeIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Home</span>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="nav-item flex items-center justify-center"
        >
          <AttachMoneyIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Cryptos</span>
        </Link>
        <Link
          to="/exchanges"
          className="nav-item flex items-center justify-center"
        >
          <BarChartIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Exchanges</span>
        </Link>
        <Link to="/news" className="nav-item flex items-center justify-center ">
          <LightbulbIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">News</span>
        </Link>
      </motion.div>

      {/* Large screen navigation  */}
      <div
        className={`hidden md:block mt-7 flex-col items-center justify-center space-y-8  ${
          isMenuOpen ? "block" : "block"
        }`}
      >
        <Link to="/" className="nav-item flex items-center justify-center">
          <HomeIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Home</span>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="nav-item flex items-center justify-center"
        >
          <AttachMoneyIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Cryptos</span>
        </Link>
        <Link
          to="/exchanges"
          className="nav-item flex items-center justify-center"
        >
          <BarChartIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">Exchanges</span>
        </Link>
        <Link to="/news" className="nav-item flex items-center justify-center ">
          <LightbulbIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
          <span className="text-white hover:text-purple-300">News</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
