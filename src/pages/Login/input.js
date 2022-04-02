import { Select } from 'antd'
import React from 'react'
import { ProductContext } from '../../Context/ProductContext'

const GenerateInput = () => {
    return [
        {
            component: 'input',
            name: 'restaurant_name',
            label: "Restaurant's Name",
            required: false,
            config: { placeholder: "Restaurant's name" },
        },
        {
            component: 'input',
            label: 'Email',
            name: 'email',
            required: 'true',
            config: {
                placeholder: 'Select an email',
                type: 'email',
            },
        },
        {
            component: 'password',
            label: 'Password',
            name: 'password',
            required: 'true',
            config: {
                placeholder: 'Type your password',
            },
        },
    ]
}

export default GenerateInput
