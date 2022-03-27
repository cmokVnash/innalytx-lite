import React from "react";
import { Layout } from "antd";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { orderItems } from "../../components/Data/OrderData";
import "./OrderDetails.css";
import OrderItems from "../../components/OrderDetails/OrderItems";
import { Input } from "antd";
import { CloseOutlined, LeftCircleOutlined } from "@ant-design/icons";
import SignupForm from "../Homepage/SignupForm";
import PaymentForm from "./PaymentForm";
import Numpad from "./Numpad/Numpad";
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
          <Content>
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

            <div
              style={{ overflow: "hidden", overflowY: "hidden" }}
              className="order-container"
            >
              <div className="payment-detail">
                <Link to="/order" className="backBtn">
                  <LeftCircleOutlined />
                </Link>
                <div
                  style={{
                    maxWidth: "550px",
                    background: "#fff",
                    borderRadius: "5px",
                    position: "relative",
                    top: "25%",
                    left: "23%",
                  }}
                >
                  <PaymentForm />
                </div>
              </div>

              <div className="order-cart">
                <h3 style={{ width: "10%", borderBottom: "3px solid gray" }}>
                  Bills
                </h3>
                <div className="order-wrapper">
                  <div className="order-card">
                    <img
                      className="order-image"
                      src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                      alt=""
                    />
                    <div className="order-detail">
                      <p>Lorem ipsum dolor sit</p>
                      <CloseOutlined style={{ fontSize: "14px" }} />
                      <span>1</span> <input type="text" value="M" />
                    </div>
                    <h4 className="order-price">$40</h4>
                  </div>

                  <div className="order-card">
                    <img
                      className="order-image"
                      src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                      alt=""
                    />
                    <div className="order-detail">
                      <p>Lorem ipsum dolor sit</p>
                      <CloseOutlined style={{ fontSize: "14px" }} />{" "}
                      <span>1</span>
                      <input type="text" value="M" />
                    </div>
                    <h4 className="order-price">$40</h4>
                  </div>

                  <div className="order-card">
                    <img
                      className="order-image"
                      src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                      alt=""
                    />
                    <div className="order-detail">
                      <p>Lorem ipsum dolor sit</p>
                      <CloseOutlined style={{ fontSize: "14px" }} />
                      <span>1</span> <input type="text" value="M" />
                    </div>
                    <h4 className="order-price">$40</h4>
                  </div>
                </div>
                <hr className="devider" />
                <div className="order-total">
                  <p>
                    Subtotal <span>$156</span>
                  </p>
                  <p>
                    Tax (10%) <span>$15.6</span>
                  </p>
                  <p>
                    Delivery Fee <span>$3</span>
                  </p>

                  <hr className="devider" />
                  <p style={{ margin: "20px 0" }}>
                    Total <span>$174.6 </span>
                  </p>
                  <Numpad />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Order;
