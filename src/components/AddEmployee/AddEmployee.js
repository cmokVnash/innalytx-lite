import React from "react";
import { Form, Button } from "antd";
import FormElement from "./FormElement";


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
      label: "Full Name",
      required: true,
    },
    {
      component: "input",
      label: "Address",
      required: true,
    },
    {
      component: "input",
      label: "National Id",
      required: true,
    },
    {
      component: "input",
      label: "Email",
      required: true,
    },
    {
      component: "input",
      label: "Phone",
      required: true,
    },
    {
      component: "input",
      label: "Photo",
      required: true,
    },
    {
      component: "input",
      label: "Position",
      required: true,
    },
   
  ];

  return (
    
    <>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
