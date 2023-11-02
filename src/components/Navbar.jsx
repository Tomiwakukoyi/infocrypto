import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className=" text-white p-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Link to="/" className=" font-semibold text-xl">
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
        className={`flex-col   md:flex md:space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="nav-item">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link to="/cryptocurrencies" className="nav-item">
          <AttachMoneyIcon className="w-6 h-6" />
          <span>Cryptocurrencies</span>
        </Link>
        <Link to="/exchanges" className="nav-item">
          <BarChartIcon className="w-6 h-6" />
          <span>Exchanges</span>
        </Link>
        <Link to="/news" className="nav-item">
          <LightbulbIcon className="w-6 h-6" />
          <span>News</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
