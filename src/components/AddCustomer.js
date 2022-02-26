import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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
              name="basic"
              labelCol={{
                span: 2,
              }}
              wrapperCol={{
                span: 8,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                htmlType="text"
                rules={[
                  {
                    required: true,
                    message: "Your Name",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                htmlType="text"
                rules={[
                  {
                    required: true,
                    message: "Your Address",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="National ID"
                name="national_id"
                htmlType="file"
                type="file"
                rules={[
                  {
                    required: true,
                    message: "Your Id",
                  },
                ]}
              >
               
                <Input />
              
                
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                htmlType="email"
                rules={[
                  {
                    required: true,
                    message: "Your Email Address",
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 2,
                  span: 8,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 2,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </div>
    );
};

export default AddCustomer;