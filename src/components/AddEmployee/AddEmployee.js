import React from 'react'
import { Form, Button, Select } from 'antd'
import FormElement from './FormElement'
import { useProduct } from '../../Context/ProductContext'

const AddEmployee = () => {
    const { products, setProducts } = useProduct()
    console.log(products)
    const onFinish = (values) => {
        console.log('Success:', values)
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
        },
        {
            component: 'input',
            name: 'address',
            label: 'Address',
            required: true,
        },
        {
            component: 'input',
            name: 'national_id',
            label: 'National Id',
            required: true,
        },
        {
            component: 'input',
            name: 'email',
            label: 'Email',
            required: true,
        },
        {
            component: 'input',
            name: 'phone',
            label: 'Phone',
            required: true,
        },
        {
            component: 'input',
            name: 'photo',
            label: 'Photo',
            required: true,
        },
        {
            component: 'select',
            name: 'position',
            label: 'Position',
            required: true,
            render: () => {
                products.map((option, key) => {
                    return (
                        <Select.Option
                            key={`${option.name}-${key}`}
                            value={option.name}
                        >
                            {option.name}
                        </Select.Option>
                    )
                })
            },
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
