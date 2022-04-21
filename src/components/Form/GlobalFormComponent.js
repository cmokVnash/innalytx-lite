import React from 'react'
import { Input, Form, Checkbox } from 'antd'
import ComponentMapping from './ComponentMapper'

const FormElement = ({ component, label, required, name, render, config }) => {
    const Component = ComponentMapping[component]
    return (
        <>
            <Form.Item
                label={label}
                name={name}
                rules={[{ required, message: 'Field is required!' }]}
            >
                {component === 'select' ? (
                    <Component {...config}>{render()}</Component>
                ) : (
                    <Component {...config} />
                )}
            </Form.Item>
        </>
    )
}

export default FormElement



