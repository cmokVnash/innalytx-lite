import React, { useEffect } from 'react'
import { Button, Form, notification } from 'antd'
import FormElement from '../../components/Form/GlobalFormComponent'
import { useNavigate } from 'react-router-dom'
import GenerateInput from './input'
import http from '../../https'
import { urls } from '../../https/config'
import { useDispatch } from 'react-redux'
import { loginReq } from '../../store/slice/authSlice'
// import './Login.css'

const AddSpaceTypeForm = () => {
    const navigate = useNavigate()
    const Elements = GenerateInput()
    const { Item: FormItem, useForm } = Form
    const [form] = useForm()
    const { suffixSubdomainUrl, rootUrl, prefixSubdomainUrl } = urls
    const dispatch = useDispatch()

    const onFinish = async (formData) => {
        const response = dispatch(loginReq(formData))
        
        
    }

    return (
        <section className="login">
            <div className="imgBx">
                <img
                    className="foodImg"
                    src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <Form
                        layout="vertical"
                        form={form}
                        name="nest-messages"
                        onFinish={onFinish}
                    >
                        {Elements.map((Element, index) => (
                            <FormElement key={index} {...Element} />
                        ))}
                        <FormItem>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </section>
    )
}
export default AddSpaceTypeForm
