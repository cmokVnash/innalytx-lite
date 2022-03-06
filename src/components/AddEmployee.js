import React from "react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import FormElement from "./Form/FormElement";

const AddEmployee = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const components = [
    {
      component: "input",
      label: "First Name",
      required: true,
    },
    {
      component: "input",
      label: "Last Name",
      required: true,
    },
    {
      component: "input",
      label: "Email",
      required: true,
    },
    {
      component: "password",
      label: "Password",
      required: true,
    },
   
  ];
  
  return (
    
    <>
      <Form onFinish={(values) => {
        console.log({ values });
      }}
      onFinishFailed={(error) => {
        console.log({ error });
      }}>
        {components.map((component) => (
          <FormElement {...component} />
        ))}
       <Form.Item wrapperCol={{ offset: 4, span: 10 }} hasFeedback>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddEmployee;
