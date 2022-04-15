import { Button, Form, Input, Space, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/slice/productSlice'
import FormElement from '../Form/GlobalFormComponent'
import { getCategories } from './../../store/slice/categorySlice'
import CustomFormList from './CustomFormList'
import GenerateInput from './generateInput'

const api = 'http://localhost:3006/products'

const AddProduct = () => {
    const [addCategory, setAddCategory] = useState(false)
    const categories = useSelector((state) => state.Category.categories)
    const dispatch = useDispatch()
    const Elements = GenerateInput()
    const { Option } = Select
    const { Item: FormItem, useForm, List: FormList } = Form
    const [form] = useForm()
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    console.log(categories)
    return (
        <>
            <Form
                layout="vertical"
                form={form}
                name="nest-messages"
                onFinish={(values) => {
                    let sizeArr = []
                    let priceArr = []
                    const { size_price, ...rest } = values
                    size_price.forEach(({ size, price }) => {
                        sizeArr.push(size)
                        priceArr.push(price)
                    })
                    const formData = { ...rest, size: sizeArr, price: priceArr }
                    dispatch(addProduct(formData))
                    form.resetFields()
                }}
                style={{ maxWidth: '500px' }}
            >
                {Elements.map((Element, index) => (
                    <FormElement key={index} {...Element} />
                ))}
                <CustomFormList />
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        //loading={loading}
                    >
                        Submit
                    </Button>
                </FormItem>
            </Form>
        </>
    )
}

export default AddProduct
