import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import Item from "antd/lib/list/Item";
import MenuItem from "antd/lib/menu/MenuItem";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* icon has been imported at the top */}
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          {/* Routing to HomePage */}
          <Link to="/">InfoCrypto</Link>
        </Typography.Title>
      </div>
      {/* menu and menu items are styling from antd */}
      <Item theme="dark">
        {/* all menu items must be wrapped in Menu then wrapped
        in item */}
        <Menu>
          <MenuItem icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </MenuItem>
          <MenuItem icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </MenuItem>
          <MenuItem icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </MenuItem>
        </Menu>
      </Item>
    </div>
  );
};

export default Navbar;
