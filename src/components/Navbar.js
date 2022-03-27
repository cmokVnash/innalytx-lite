import { Button, Menu } from 'antd';
import React from 'react';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="works">How It Works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">
            <Button type="primary">Login</Button>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
