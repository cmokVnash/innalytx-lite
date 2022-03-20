import React from "react";
import "./Home.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Nav from "./Nav";
import About from "./About";
import { Link } from "react-router-dom";

const Home = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="contain">
      <header>
        <Nav />
        <div className="showcase-area">
          <div className="container">
            <div style={{}} className="left">
              <div className="big-title">
                <h1 style={{ color: "#d8f3dc" }}>INNALYTX</h1>
                <h1 style={{ color: "lightGray" }}>
                  Start Your Business Like A Boss
                </h1>
              </div>
              <p
                style={{ width: "86%", color: "lightGray", fontSize: "14px" }}
                className="text"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                ad provident, vero quis dolores ab?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae ad provident, vero quis
                dolores ab? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Beatae ad provident, vero quis dolores ab?
              </p>
              <div className="cta">
                <Link to="/dashboard" style={{ fontWeight: "bold" }} className="btn" href="">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="right">
              <div
                style={{
                  maxWidth: "350px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
                className="wrapper"
              >
                <Form
                  style={{
                    maxWidth: "300px",
                    display: "block",
                    margin: "0 auto",
                    padding: "20px 0px",
                  }}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "#3d405b",
                      fontWeight: "700",
                      width: "27%",
                      borderBottom: "3px solid #3d405b",
                      marginBottom: "20px",
                    }}
                  >
                    SIGN UP
                  </h3>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone no!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined className="site-form-item-icon" />}
                      placeholder="Phone No"
                    />
                  </Form.Item>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      style={{ width: "300px", background: "#3d405b" }}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      SIGN UP
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
