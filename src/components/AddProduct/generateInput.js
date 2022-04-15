import { PlusOutlined } from '@ant-design/icons'
import { Select, Divider, Input, Typography, Space, Spin } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../store/slice/categorySlice'

const GenerateInput = () => {
    const { Option } = Select
    const dispatch = useDispatch()
    const { categories, loading } = useSelector((state) => state.Category)
    const [name, setName] = useState('')
    const addItem = () => {
        dispatch(addCategory({ name }))
        setName('')
    }
    return [
        {
            component: 'input',
            name: 'name',
            label: "Item's Name",
            required: true,
            config: { placeholder: "Item's Name is Required" },
        },
        {
            component: 'textArea',
            label: 'Description',
            name: 'details',
            required: true,
            config: {
                placeholder: 'Description is required',
            },
        },
        {
            component: 'select',
            label: 'Category',
            name: 'category_id',
            required: true,
            config: {
                placeholder: 'Category is required',
                dropdownRender: (menu) => (
                    <>
                        {menu}
                        <Divider style={{ margin: '8px 0' }} />
                        <Space align="center" style={{ padding: '0 8px 4px' }}>
                            <Input
                                placeholder="Please enter item"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                            <Typography.Link
                                onClick={addItem}
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                {/* <Spin spinning={loading}> */}
                                <PlusOutlined /> Add item
                                {/* </Spin> */}
                            </Typography.Link>
                        </Space>
                    </>
                ),
            },
            render: () =>
                categories?.map((option) => {
                    return (
                        <Option key={option.id} value={option.id}>
                            {option.name}
                        </Option>
                    )
                }),
        },
    ]
}

export default GenerateInput
