import React from "react";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { orderItems } from "../../components/Data/OrderData";
import './Order.css';
import RightSider from "../../components/OrderDetails/RightSider";
import OrderItems from "../../components/OrderDetails/OrderItems";

const { Content, Sider } = Layout;

const Order = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(collapsed)}
        >
          <div
            style={{
              height: "32px",
              margin: "16px",
              background: "#00b4d8",
            }}
            className="logo"
          ></div>

          {orderItems.map((menuItem, index) => (
            <OrderItems
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              icon={menuItem.icon}
            />
          ))}
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "30px 20px" }}>
            <Routes>
              {orderItems.map((menu, index) => (
                <>
                  <Route
                    key={menu.name}
                    path={menu.to}
                    element={menu.comp}
                  ></Route>
                </>
              ))}
            </Routes>
          </Content>
          <Sider
            style={{
              height: "100vh",
              background: "#023047",
              marginLeft: "20px",
              position: "sticky",
              top: "0",
            }}
            width={300}
          >
            <RightSider />
          </Sider>
        </Layout>
      </Layout>
    </>
  );
};

export default Order;
