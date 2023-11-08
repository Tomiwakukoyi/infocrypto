import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={` md:bg-purple-900 md:h-full`}>
      {/* Mobile only */}
      <div className="md:hidden absolute mx-auto space-x-[220px] flex pt-3 items-center justify-between">
        <Link
          to="/"
          style={{ fontFamily: "Permanent Marker" }}
          className="text-slate-800 ml-8 font-white text-sm md:text-lg"
        >
          InfoCrypto
        </Link>

        <MenuIcon onClick={toggleMobileMenu} />
      </div>

      <div className={` bottom-0 w-full fixed   h-[60px] md:relative`}>
        <div>
          <div className="p-4 flex gap-3 md:gap-0 justify-between items-center">
            <div className="flex items-center hover:text-purple-300 ">
              <Link
                to="/"
                style={{ fontFamily: "Permanent Marker" }}
                className="hidden md:block text-white font-white mt-7 text-sm md:text-lg"
              >
                InfoCrypto
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bg-purple-700 py-2 md:relative mx-auto bottom-0 flex md:hidden items-center w-full justify-evenly md:justify-center md:gap-5"
              >
                <Link
                  to="/"
                  className="nav-item flex flex-col items-center justify-center"
                >
                  <HomeIcon className="hover:text-amber-400 w-6 h-6 text-amber-600" />
                  <span className="text-white text-xs hover:text-purple-300">
                    Home
                  </span>
                </Link>
                <Link
                  to="/cryptocurrencies"
                  className="nav-item flex flex-col items-center justify-center"
                >
                  <AttachMoneyIcon className="hover:text-gray-200 w-6 h-6 text-gray-300" />
                  <span className="text-white text-xs hover:text-purple-300">
                    Cryptos
                  </span>
                </Link>
                <Link
                  to="/exchanges"
                  className="nav-item flex flex-col items-center justify-center"
                >
                  <BarChartIcon className="hover:text-green-400 text-green-600 w-6 h-6 " />
                  <span className="text-white text-xs hover:text-purple-300">
                    Exchanges
                  </span>
                </Link>
                <Link
                  to="/news"
                  className="nav-item flex flex-col md:flex-row items-center justify-center"
                >
                  <LightbulbIcon className="hover:text-yellow-300 w-6 h-6 text-yellow-400" />
                  <span className="text-white text-xs hover:text-purple-300">
                    News
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Large screen navigation  */}
          <div
            className={`hidden md:block mt-7 flex-col items-center justify-center space-y-8 ${
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
              <span className="text-white hover:text-purple-300">
                Exchanges
              </span>
            </Link>
            <Link
              to="/news"
              className="nav-item flex items-center justify-center"
            >
              <LightbulbIcon className="hover:text-purple-300 w-6 h-6 text-slate-900" />
              <span className="text-white hover:text-purple-300">News</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
