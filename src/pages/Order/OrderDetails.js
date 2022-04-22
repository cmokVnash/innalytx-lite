import React, { useState } from 'react'
import { Layout, Input, Button } from 'antd'

import { Link, Route, Routes } from 'react-router-dom'
import { orderItems } from '../../components/Data/OrderData'
import './OrderDetails.css'
import OrderItems from '../../components/OrderDetails/OrderItems'

import { CloseOutlined, LeftCircleOutlined } from '@ant-design/icons'
import SignupForm from '../Homepage/SignupForm'
import PaymentForm from './PaymentForm'
import Numpad from './Numpad/Numpad'
import {
  Bills,
  Devider,
  OrderCard,
  OrderCart,
  OrderContainer,
  OrderDetails,
  OrderImg,
  OrderTotal,
  OrderWrapper,
  PaymentContainer,
  PaymentWrapper,
} from './OrderStyle'
import OrderCardItem from './ItemSelectionContainer/OrderCardItem'
import { useSelector } from 'react-redux'
const { Content, Sider } = Layout

const Order = () => {
  const { cartItems, totalPrice } = useSelector(
    (state) => state?.Order?.cart || {}
  )
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed(collapsed)}
                >
                    <div
                        style={{
                            height: '32px',
                            margin: '16px',
                            background: '#00b4d8',
                        }}
                        className="logo"
                    ></div>

                    {orderItems.map((menuItem, index) => (
                        <OrderItems
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            icon={menuItem.icon}
                        />
                    ))}
                </Sider> */}
        <Layout className="site-layout">
          <Content>
            {/* <Routes>
              {orderItems.map((menu, index) => (
                <>
                  <Route
                    key={menu.name}
                    path={menu.to}
                    element={menu.comp}
                  ></Route>
                </>
              ))}
            </Routes> */}

            <OrderContainer>
              <PaymentContainer>
                <Button icon={<LeftCircleOutlined />} />

                <PaymentWrapper>
                  <PaymentForm />
                </PaymentWrapper>
              </PaymentContainer>

              <OrderCart>
                <Bills
                  style={{
                    width: '10%',
                    borderBottom: '3px solid gray',
                  }}
                >
                  Bills
                </Bills>
                <OrderWrapper>
                  {cartItems.map((cartItem, index) => {
                    return <OrderCardItem key={index} item={cartItem} />
                  })}
                </OrderWrapper>
                <Devider />
                <OrderTotal>
                  {/* <p>
                    Subtotal <span>$156</span>
                  </p>
                  <p>
                    Tax (10%) <span>$15.6</span>
                  </p>
                  <p>
                    Delivery Fee <span>$3</span>
                  </p> */}

                  <Devider />
                  <p style={{ margin: '20px 0' }}>
                    Total <span>{totalPrice} </span>
                  </p>
                  <Numpad />
                </OrderTotal>
              </OrderCart>
            </OrderContainer>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Order
