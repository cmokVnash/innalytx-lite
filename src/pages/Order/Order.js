import React from 'react'
import { Card, Col, Layout, Menu, Row } from 'antd'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { orderItems } from '../../components/Data/OrderData'
import './Order.css'
import OrderItems from '../../components/OrderDetails/OrderItems'
import { Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useProduct } from '../../Context/ProductContext'
import Meta from 'antd/lib/card/Meta'
import styled from 'styled-components'
import {
    Bills,
    CartContainer,
    CartHeading,
    CategoryBtn,
    CategoryContainer,
    Devider,
    Div,
    InputPromo,
    OrderCard,
    OrderContainer,
    OrderDetails,
    OrderImg,
    OrderPromo,
    OrderTotal,
    OrderWrapper,
    ProductContainer,
    ProductHeading,
    PromoBtn,
} from './OrderStyle'

const { Search } = Input
const { Content, Sider } = Layout
const onSearch = (value) => console.log(value)

const Order = () => {
    const [collapsed, setCollapsed] = useState(true)
    const { products, setProducts } = useProduct()
    const [items, setItems] = useState([products])

    const allCatValues = [
        ...new Set(products.map((currentElm) => currentElm.category)),
        'all',
    ]

    const [catItems, setCatItems] = useState(allCatValues)

    const filterItem = (category) => {
        if (category === 'all') {
            setItems(products)
            return
        } else {
            const updatedItems = products.filter((currentElm) => {
                return currentElm.category === category
            })
            setItems(updatedItems)
        }
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
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
                </Sider>
                <Layout className="site-layout">
                    <Content
                        style={{ padding: '20px 30px', background: '##e9ecef' }}
                    >
                        <Routes>
                            {orderItems.map((menu, index) => (
                                <>
                                    <Route
                                        key={menu.name}
                                        path={menu.to}
                                        element={menu.comp}
                                    ></Route>
                                </>
                            ))}
                        </Routes>

                        <OrderContainer>
                            <ProductContainer>
                                <ProductHeading>
                                    <Div>
                                        <h2>Choose Category</h2>
                                    </Div>
                                    <Div
                                        style={{ marginRight: '30px' }}
                                        className="right"
                                    >
                                        <Search
                                            style={{
                                                width: '300px',
                                                height: '30px',
                                            }}
                                            placeholder="search your meal.."
                                            onSearch={onSearch}
                                            enterButton
                                        />
                                    </Div>
                                </ProductHeading>
                                <CategoryContainer>
                                    {catItems.map((currentElm) => (
                                        <CategoryBtn
                                            onClick={() =>
                                                filterItem(currentElm)
                                            }
                                            className="btn-category"
                                        >
                                            {currentElm}
                                        </CategoryBtn>
                                    ))}
                                </CategoryContainer>
                                <Row gutter={[2, 20]}>
                                    {items.map((item) => (
                                        <Col span={8}>
                                            <Card
                                                style={{
                                                    width: 300,
                                                    boxShadow:
                                                        ' rgba(0, 0, 0, 0.35) 0px 1px 3px',
                                                    backgroundColor: '#edf2fb',
                                                }}
                                                cover={
                                                    <img
                                                        style={{
                                                            width: '90%',
                                                            display: 'block',
                                                            margin: '15px auto',
                                                        }}
                                                        alt="example"
                                                        src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                                    />
                                                }
                                                actions={
                                                    [
                                                        // <Button
                                                        //   style={{
                                                        //     background: "#2a9d8f",
                                                        //     border: "none",
                                                        //     color: "white",
                                                        //   }}
                                                        // >
                                                        //   <EditOutlined key="edit" /> Edit
                                                        // </Button>,
                                                        // <Button type="primary" danger>
                                                        //   <DeleteOutlined key="delete" /> Delete
                                                        // </Button>,
                                                    ]
                                                }
                                            >
                                                <Meta
                                                    title={item.name}
                                                    description={
                                                        'Price: $' + item.price
                                                    }
                                                />
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </ProductContainer>

                            <CartContainer>
                                <CartHeading>
                                    <Div>
                                        <OrderImg
                                            src="https://pmtips.net/Portals/0/EasyDNNnews/1895/img-attributes-of-a-successful-projectmManager.png"
                                            alt=""
                                        />
                                    </Div>
                                    <Div style={{ marginRight: '70px' }}>
                                        <h3>Manager</h3>
                                        <p>221 B Baker Street, London</p>
                                    </Div>
                                </CartHeading>
                                <Bills
                                    style={{
                                        width: '10%',
                                        borderBottom: '3px solid gray',
                                    }}
                                >
                                    Bills
                                </Bills>
                                <OrderWrapper>
                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />
                                            <span>1</span>{' '}
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>

                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />{' '}
                                            <span>1</span>
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>

                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />
                                            <span>1</span>{' '}
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>
                                </OrderWrapper>
                                <Devider />
                                <OrderTotal>
                                    <p>
                                        Subtotal <span>$156</span>
                                    </p>
                                    <p>
                                        Tax (10%) <span>$15.6</span>
                                    </p>
                                    <p>
                                        Delivery Fee <span>$3</span>
                                    </p>
                                    <OrderPromo>
                                        <InputPromo
                                            type="text"
                                            placeholder="Apply voucher"
                                        />
                                        <PromoBtn>Apply Promo</PromoBtn>
                                    </OrderPromo>
                                    <Devider />
                                    <p style={{ margin: '20px 0' }}>
                                        Total <span>$174.6 </span>
                                    </p>
                                </OrderTotal>
                                <input
                                    className="cancel-order"
                                    type="button"
                                    value="Cancel Order"
                                />{' '}
                                <Link to="/order/conformOrder">
                                    <input
                                        className="place-order"
                                        type="button"
                                        value="Place Order"
                                    />
                                </Link>
                            </CartContainer>
                        </OrderContainer>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default Order
