import React from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const OrderItems = (props) => {
  const { name, to, icon } = props;
  return (
    <>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={icon}>
          <NavLink to={to}> {name}</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default OrderItems;
