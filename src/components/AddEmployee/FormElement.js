import { Input, Form, Checkbox } from "antd";

const componentMapping = {
  input: Input,
  password: Input.Password,
  checkbox: Checkbox,
};

function FormElement({ component, label, required, name, rules }) {
  const Component = componentMapping[component];
  return (
    <>
      <Form.Item
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        label={label}
        name={name}
        rules={[{ required, message: "Field is required!" }]}
      >
        <Component />
      </Form.Item>
    </>
  );
}

export default FormElement;
