import { Input, Form, Checkbox, Select } from 'antd'

const componentMapping = {
    input: Input,
    password: Input.Password,
    checkbox: Checkbox,
    select: Select,
}

const FormElement = ({ component, label, required, name, rules, render }) => {
    const Component = componentMapping[component]

    return (
        <>
            <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 10 }}
                label={label}
                name={name}
                // rules={[{ required, message: "Field is required!" }]}
            >
                {component === 'select' ? (
                    <Component>{render()}</Component>
                ) : (
                    <Component />
                )}
            </Form.Item>
        </>
    )
}

export default FormElement
