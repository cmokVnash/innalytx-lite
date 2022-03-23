import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
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
    </>
  );
};

export default SignupForm;
