import React, { useState, useEffect } from 'react'
import {
    Upload,
    message,
    Form,
    Button,
    Checkbox,
    DatePicker,
    Input,
    Select,
    Space,
} from 'antd'
import { UploadOutlined, PlusCircleOutlined } from '@ant-design/icons'

import axios from 'axios'
const { TextArea } = Input

const api = 'http://localhost:3006/products'

const AddProduct = () => {
    const [addCategory, setAddCategory] = useState(false)

    const onFinish = (values) => {
        fetch('http://localhost:3006/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...values, id: values.name }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        console.log('Success:', values)
        alert('form submitted')
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    useEffect(() => {}, [])

    return (
        <>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ position: 'relative' }}
                autoComplete="off"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 10 }}
            >
                <Form.Item wrapperCol={{ offset: 12, span: 8 }}>
                    <Button
                        onClick={() => setAddCategory(!addCategory)}
                        type="primary"
                    >
                        <PlusCircleOutlined />
                        Category
                    </Button>
                </Form.Item>

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product name',
                        },
                        { whitespace: true },
                        { min: 3 },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Type Product name" />
                </Form.Item>

                <Form.Item
                    label="Base Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product price',
                        },
                        { message: 'Enter your product price' },
                    ]}
                    hasFeedback
                >
                    <Input
                        min={1}
                        max={100000}
                        defaultValue={100}
                        placeholder="Enter your product price"
                    />
                </Form.Item>

                <Form.Item
                    label="Vat"
                    name="vat"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product vat',
                        },
                        { message: 'Enter your product vat' },
                    ]}
                    hasFeedback
                >
                    <Input
                        min={1}
                        max={1000}
                        defaultValue={10}
                        placeholder="Enter your product vat"
                    />
                </Form.Item>

                <Form.Item name="category" label="Product Category">
                    <Select placeholder="Select Product category">
                        <Select.Option value="pizza">Pizza</Select.Option>
                        <Select.Option value="burger">Burger</Select.Option>
                    </Select>
                </Form.Item>

                {addCategory && (
                    <Form.Item
                        label="Add Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your new category',
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type Product Category" />
                    </Form.Item>
                )}

                <Form.Item
                    label="Product Detail"
                    name="details"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product details',
                        },
                        { message: 'Enter your product details' },
                    ]}
                    hasFeedback
                >
                    <TextArea
                        rows={4}
                        placeholder="Enter your product details"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                    <Button block type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddProduct
