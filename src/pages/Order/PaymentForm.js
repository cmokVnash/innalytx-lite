import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'

const PaymentForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div>
      <Form
        style={{
          display: 'block',
          margin: '',
          padding: '20px',
          background: '#e9ecef',
        }}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <h3
          style={{
            fontSize: '20px',
            color: '#3d405b',
            fontWeight: '700',
            width: '32%',
            borderBottom: '3px solid #3d405b',
            marginBottom: '20px',
          }}
        >
          Apply Payment
        </h3>

        <Form.Item
          name="discount"
          label="Discount"
          rules={[
            {
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input placeholder="Discount %" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Payment"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Select placeholder="Select Payment Method">
            <Select.Option value="card">Card</Select.Option>
            <Select.Option value="cash">Cash</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="platform"
          label="Platform"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Select placeholder="Select Platform">
            <Select.Option value="pathao">Pathao</Select.Option>
            <Select.Option value="uber">Uber</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: '210px', background: '#3d405b' }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Confirm Payment
          </Button>
          <Button
            style={{
              width: '210px',
              background: '#3d405b',
              marginLeft: '30px',
            }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Print Recept
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PaymentForm
