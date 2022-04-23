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
import ItemSelectionContainer from './ItemSelectionContainer/ItemSelectionContainer'
import { addToCart } from '../../store/slice/orderSlice'

const { Search } = Input
const { Content } = Layout
const onSearch = (value) => console.log(value)

const Order = () => {
  const products = useSelector((state) => state.Product.products) || []
  console.log(products)
  const dispatch = useDispatch()
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0)
  const [currentItemId, setCurrentItemId] = useState(null)
  const currentSizedPriceArr = products?.map((product) => {
    return {
      size: product?.size[0].size,
      id: product?.id,
      price: product?.size[0].price,
    }
  })

  const [currentSizedPrice, setCurrentSizedPrice] =
    useState(currentSizedPriceArr)

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
  const currentPriceHandler = (item, index) => {
    if (currentItemId === item?.id) {
      return item?.size?.[currentSizeIndex].price
    } else {
      return item?.size?.[0].price
    }
  }
  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Content
            style={{
              padding: '10px 20px',
              background: '##e9ecef',
            }}
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
                  <Div style={{ marginRight: '30px' }} className="right">
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
                      onClick={() => filterItem(currentElm)}
                      className="btn-category"
                    >
                      {currentElm}
                    </CategoryBtn>
                  ))}
                </CategoryContainer>
                <Row gutter={[2, 20]}>
                  {products?.map((item, index) => (
                    <Col span={8} key={index}>
                      <Card
                        style={{
                          width: 200,
                          boxShadow: ' rgba(0, 0, 0, 0.35) 0px 1px 3px',
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
                          <Button
                            key="1"
                            onClick={() => {
                              addItemToCart({
                                id: item.id,
                                unitPrice: item.size[currentSizeIndex]?.price,
                                size: item.size[currentSizeIndex].size,
                                name: item.name,
                              })
                            }}
                          >
                            {/* <PlusCircleOutlined /> */}
                            Add to cart
                          </Button>,
                        ]}
                      >
                        <Meta
                          title={item.name}
                          description={[
                            <Radio.Group
                              key="r-1"
                              onChange={(e) => {
                                console.log(e)
                                setCurrentSizeIndex(e.target.value)
                                setCurrentItemId(item.id)
                              }}
                            >
                              {item?.size?.map((currentSize, index) => {
                                return (
                                  <Radio value={index} key={index}>
                                    {currentSize?.size} : {currentSize?.price}{' '}
                                    /=
                                  </Radio>
                                )
                              })}
                            </Radio.Group>,
                          ]}
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </ProductContainer>

              <ItemSelectionContainer />
            </OrderContainer>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Order
