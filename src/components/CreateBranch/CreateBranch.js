import React from 'react'
import { Form, Button } from 'antd'
import FormElement from './FormElement'

const CreateBranch = () => {
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
            name: 'branch_name',
            label: 'Branch Name',
            required: true,
            config: { placeholder: "Restaurant's Branch name" },
        },
        {
            component: 'input',
            name: 'address',
            label: 'Address',
            required: true,
            config: { placeholder: 'Address' },
        },
    ]

    return (
        <>
            <Form
                style={{ marginTop: '100px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                {components.map((component, index) => (
                    <FormElement key={index} {...component} />
                ))}
                <Form.Item wrapperCol={{ offset: 4, span: 2 }} hasFeedback>
                    <Button block type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default CreateBranch
