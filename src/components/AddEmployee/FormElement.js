import React from 'react'
import { Input, Form, Checkbox, Select } from 'antd'

const componentMapping = {
    input: Input,
    password: Input.Password,
    checkbox: Checkbox,
    select: Select,
}

const FormElement = ({
    component,
    label,
    required,
    name,
    rules,
    render,
    config,
}) => {
    const Component = componentMapping[component]

    return (
        <>
            <Form.Item
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 10 }}
                label={label}
                name={name}
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
