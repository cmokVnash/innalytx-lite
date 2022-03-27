import React from "react";
import { Card, Col, Layout, Menu, Row } from "antd";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { orderItems } from "../../components/Data/OrderData";
import "./Order.css";
import OrderItems from "../../components/OrderDetails/OrderItems";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useProduct } from "../../Context/ProductContext";
import Meta from "antd/lib/card/Meta";

const { Search } = Input;
const { Content, Sider } = Layout;
const onSearch = (value) => console.log(value);

const Order = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { products, setProducts } = useProduct();
  const [items, setItems] = useState([products]);

  const allCatValues = [
    ...new Set(products.map((currentElm) => currentElm.category)),
    "all",
  ];

  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = (category) => {
    if (category === "all") {
      setItems(products);
      return;
    } else {
      const updatedItems = products.filter((currentElm) => {
        return currentElm.category === category;
      });
      setItems(updatedItems);
    }
  };

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
          <Content style={{ padding: "20px 30px" }}>
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
              <div className="product-container">
                <div className="product-heading">
                  <div className="left">
                    <h2
                      style={{
                        fontSize: "25px",
                        color: "#264653",
                        fontWeight: "700",
                      }}
                    >
                      Choose Category
                    </h2>
                  </div>
                  <div style={{ marginRight: "30px" }} className="right">
                    <Search
                      style={{ width: "300px", height: "30px" }}
                      placeholder="search your meal.."
                      onSearch={onSearch}
                      enterButton
                    />
                  </div>
                </div>
                <div className="cat-container">
                  {catItems.map((currentElm) => (
                    <button
                      style={{ marginRight: "20px" }}
                      onClick={() => filterItem(currentElm)}
                      className="btn-category"
                    >
                      {currentElm}
                    </button>
                  ))}
                </div>
                <Row gutter={[2, 20]}>
                  {items.map((item) => (
                    <Col span={8}>
                      <Card
                        style={{
                          width: 300,
                          boxShadow: " rgba(0, 0, 0, 0.35) 0px 1px 3px",
                          backgroundColor: "#edf2fb",
                        }}
                        cover={
                          <img
                            style={{
                              width: "90%",
                              display: "block",
                              margin: "15px auto",
                            }}
                            alt="example"
                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                          />
                        }
                        actions={
                          [
                            // <Button
                            //   style={{
                            //     background: "#2a9d8f",
                            //     border: "none",
                            //     color: "white",
                            //   }}
                            // >
                            //   <EditOutlined key="edit" /> Edit
                            // </Button>,
                            // <Button type="primary" danger>
                            //   <DeleteOutlined key="delete" /> Delete
                            // </Button>,
                          ]
                        }
                      >
                        <Meta
                          title={item.name}
                          description={"Price: $" + item.price}
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

              <div className="dashboard-order">
                <div className="order-title">
                  <div>
                    <img
                      className="order-image"
                      src="https://pmtips.net/Portals/0/EasyDNNnews/1895/img-attributes-of-a-successful-projectmManager.png"
                      alt=""
                    />
                  </div>
                  <div style={{ marginRight: "70px" }}>
                    <h3>Manager</h3>
                    <p>221 B Baker Street, London</p>
                  </div>
                </div>
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
                  <div className="order-promo">
                    <input
                      type="text"
                      className="input-promo"
                      placeholder="Apply voucher"
                    />
                    <button className="button-promo">Apply Promo</button>
                  </div>
                  <hr className="devider" />
                  <p style={{ margin: "20px 0" }}>
                    Total <span>$174.6 </span>
                  </p>
                </div>
                <input
                  className="cancel-order"
                  type="button"
                  value="Cancel Order"
                />{" "}
                <Link to="/order/conformOrder">
                  <input
                    className="place-order"
                    type="button"
                    value="Place Order"
                  />
                </Link>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Order;
