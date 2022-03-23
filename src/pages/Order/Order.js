import React from "react";
import { Card, Col, Layout, Menu, Row } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { orderItems } from "../../components/Data/OrderData";
import "./Order.css";
import OrderItems from "../../components/OrderDetails/OrderItems";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
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
          <Content style={{ margin: "20px 30px" }}>
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

            <div className="order-container">
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
                <div style={{marginRight: "30px"}} className="right">
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
                        }}
                        cover={
                          <img
                            alt="example"
                            src="https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

              <div className="cart-container">
                <h3>Order cart</h3>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Order;
