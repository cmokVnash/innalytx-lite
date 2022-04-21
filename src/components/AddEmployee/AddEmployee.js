import React from 'react'
import { Form, Button, Select } from 'antd'
import FormElement from './FormElement'
import { useProduct } from '../../Context/ProductContext'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../store/slice/employeeSlice'

const AddEmployee = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(addEmployee(values))
    }
    const { useForm } = Form
    const [form] = useForm()
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    const components = [
        {
            component: 'input',
            name: 'name',
            label: 'Full Name',
            required: true,
            config: { placeholder: 'Enter Your Name' },
        },
        {
            component: 'input',
            name: 'email',
            label: 'Email',
            required: true,
            config: { placeholder: 'Your Email' },
        },
        {
            component: 'input',
            name: 'password',
            label: 'Password',
            required: true,
            config: { placeholder: 'Your Password' },
        },
        {
            component: 'input',
            name: 'address',
            label: 'Address',
            required: true,
            config: { placeholder: 'Your Address' },
        },
    ]

    return (
        <>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                {components.map((component, key) => (
                    <FormElement key={key} {...component} />
                ))}
                <Form.Item wrapperCol={{ offset: 4, span: 10 }} hasFeedback>
                    <Button block type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddEmployee
