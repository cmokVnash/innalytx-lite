import { Menu } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          {/* <i className="fas fa-bolt"></i>
          <a href="http://google.com">Innalytx</a> */}
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="works">How It Works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              style={{height: '35px', width: '32px', borderRadius: '50%'}}
            />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
