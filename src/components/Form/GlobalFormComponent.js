import { Input, Form, Checkbox } from 'antd'
import ComponentMapping from './ComponentMapper'

const FormElement = ({ component, label, required, name, rules, config }) => {
    const Component = ComponentMapping[component]
    return (
        <>
            <Form.Item
                label={label}
                name={name}
                rules={[{ required, message: 'Field is required!' }]}
            >
                <Component {...config} />
            </Form.Item>
        </>
    )
}

export default FormElement
