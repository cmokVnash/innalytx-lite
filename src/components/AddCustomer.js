import React from "react";
import { Upload } from "antd";
import { Form, Button,  Input, Select } from "antd";

const AddCustomer = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Enter your Address",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your address" />
        </Form.Item>

        <Form.Item
          name="national_id"
          label="National Id"
          rules={[
            {
              required: true,
              message: "Please enter your national id",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Upload your national id" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            { type: "email", message: "Please enter a valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone No"
          rules={[
            {
              required: true,
              message: "Please enter your phone no.",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your phone no" />
        </Form.Item>

        <Form.Item
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 10 }}
          name="photo"
          label="Photo"
          rules={[
            {
              required: true,
              message: "Upload your photo",
            },
            
          ]}
          hasFeedback
        ><Upload >
            <Input  placeholder="Upload Your Photo" /> 
        </Upload>
          
        </Form.Item>

        <Form.Item name="role" label="Position">
          <Select placeholder="Select Your Role">
            <Select.Option value="male">Manager</Select.Option>
            <Select.Option value="female">Moderator</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomer;
