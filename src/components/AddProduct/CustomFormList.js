import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Select } from 'antd'
const CustomFormList = () => {
    const { Option } = Select
    const { Item: FormItem, useForm, List: FormList } = Form
    const sizes = ['s', 'm', 'l']
    return (
        <FormList name="size_price">
            {(fields, { add, remove }) => (
                <>
                    {fields.map((field, index) => (
                        <Space key={index} align="baseline">
                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, curValues) =>
                                    prevValues.size !== curValues.size
                                }
                            >
                                {() => (
                                    <Form.Item
                                        {...field}
                                        label="Size"
                                        name={[field.name, 'size']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing size',
                                            },
                                        ]}
                                    >
                                        <Select style={{ width: 230 }}>
                                            {sizes.map((item) => (
                                                <Option key={item} value={item}>
                                                    {item}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                )}
                            </Form.Item>
                            <Form.Item
                                {...field}
                                label="Price"
                                name={[field.name, 'price']}
                                style={{ width: 230 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Missing price',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <MinusCircleOutlined
                                onClick={() => remove(field.name)}
                            />
                        </Space>
                    ))}

                    <Form.Item>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                        >
                            Price
                        </Button>
                    </Form.Item>
                </>
            )}
        </FormList>
    )
}

export default CustomFormList
