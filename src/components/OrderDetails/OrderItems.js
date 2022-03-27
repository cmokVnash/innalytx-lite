import { Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderItems = (props) => {
    const { name, to, icon } = props
    return (
        <>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" icon={icon}>
                    <NavLink to={to}> {name}</NavLink>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default OrderItems
