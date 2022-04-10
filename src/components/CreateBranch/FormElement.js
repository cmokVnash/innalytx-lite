import { Input, Form, Checkbox, Select } from 'antd'

const componentMapping = {
    input: Input,
}

const FormElement = ({ component, label, required, name }) => {
    const Component = componentMapping[component]

    return (
        <>
            <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                label={label}
                name={name}
            >
                <Component />
            </Form.Item>
        </>
    )
}

export default FormElement
