import {
    CiCircleFilled,
    CloseOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons'
import { Card, Col, Input, Layout, Row, Radio, Button, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { orderItems } from '../../components/Data/OrderData'
import { productsData } from '../../components/Data/ProductsData.js'
import OrderItems from '../../components/OrderDetails/OrderItems'
import { useProduct } from '../../Context/ProductContext'
import './Order.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './../../store/slice/productSlice'
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
const { Content } = Layout
const onSearch = (value) => console.log(value)

const Order = () => {
    const products = useSelector((state) => state.Product.products) || []
    console.log(products)
    const dispatch = useDispatch()
    const [currentPrice, setCurrentPrice] = useState(null)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const allCatValues = [
        ...new Set(productsData.map((currentElm) => currentElm.category)),
        'all',
    ]

    const [catItems, setCatItems] = useState(allCatValues)

    const filterItem = (category) => {
        // if (category === 'all') {
        //     setItems(products)
        //     return
        // } else {
        //     const updatedItems = products.filter((currentElm) => {
        //         return currentElm.category === category
        //     })
        //     setItems(updatedItems)
        // }
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Layout className="site-layout">
                    <Content
                        style={{ padding: '10px 20px', background: '##e9ecef' }}
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
                                    {catItems.map((currentElm, index) => (
                                        <CategoryBtn
                                            key={index}
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
                                    {products.map((item, index) => (
                                        <Col span={8} key={index}>
                                            <Card
                                                style={{
                                                    width: 200,
                                                    boxShadow:
                                                        ' rgba(0, 0, 0, 0.35) 0px 1px 3px',
                                                    backgroundColor: '#edf2fb',
                                                    padding: '2px',
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
                                                actions={[
                                                    <div key="1">
                                                        {/* <PlusCircleOutlined /> */}
                                                        Add to cart
                                                    </div>,
                                                ]}
                                            >
                                                <Meta
                                                    title={item.name}
                                                    description={[
                                                        <div key="1">
                                                            <div>
                                                                {'Price: $' +
                                                                    item.size[0]
                                                                        .price}
                                                            </div>
                                                        </div>,
                                                        <Radio.Group
                                                            key="r-1"
                                                            defaultvalue={'l'}
                                                            onChange={(e) => {
                                                                return e.target
                                                                    .value
                                                            }}
                                                        >
                                                            <Radio.Button value="l">
                                                                l
                                                            </Radio.Button>
                                                            <Radio.Button value="m">
                                                                s
                                                            </Radio.Button>
                                                            <Radio.Button value="s">
                                                                m
                                                            </Radio.Button>
                                                        </Radio.Group>,
                                                    ]}
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
