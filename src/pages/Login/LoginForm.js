import React, { useEffect } from 'react'
import { Button, Form, notification } from 'antd'
import FormElement from '../../components/Form/GlobalFormComponent'
import { useNavigate } from 'react-router-dom'
import GenerateInput from './input'
import http from '../../https'
import { urls } from '../../https/config'
// import './Login.css'

const AddSpaceTypeForm = () => {
    const navigate = useNavigate()
    const Elements = GenerateInput()
    const { Item: FormItem, useForm } = Form
    const [form] = useForm()
    const { suffixSubdomainUrl, rootUrl, prefixSubdomainUrl } = urls

    const onFinish = async (formData) => {
        const { restaurant_name, ...rest } = formData
        const subDomainUrl = `${prefixSubdomainUrl}${restaurant_name}.${suffixSubdomainUrl}/login/`
        if (restaurant_name) {
            try {
                const response = await http.post(subDomainUrl, formData)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const response = await http.post(`${rootUrl}/login/`, rest)
                console.log(rootUrl)
                console.log(response)
            } catch (error) {
                console.log(error?.response)
            }
        }
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
