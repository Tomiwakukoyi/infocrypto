import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="  bg-purple-900 md:h-full">
      <div className="  p-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Link
            to="/"
            style={{ fontFamily: "Permanent Marker" }}
            className=" text-white font-white mt-7 text-lg ray 3"
          >
            InfoCrypto
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <MenuIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`flex-col items-center justify-center md:flex md:gap-5  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="nav-item flex items-center justify-center">
          <HomeIcon className="w-6 h-6 text-slate-900" />
          <span className=" text-white hover:text-gray-300">Home</span>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="nav-item flex items-center justify-center"
        >
          <AttachMoneyIcon className="w-6 h-6 text-slate-900" />
          <span className=" text-white hover:text-gray-300">Cryptos</span>
        </Link>
        <Link
          to="/exchanges"
          className="nav-item flex items-center justify-center"
        >
          <BarChartIcon className="w-6 h-6 text-slate-900" />
          <span className=" text-white hover:text-gray-300">Exchanges</span>
        </Link>
        <Link to="/news" className="nav-item flex items-center justify-center ">
          <LightbulbIcon className="w-6 h-6 text-slate-900" />
          <span className=" text-white hover:text-gray-300">News</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
