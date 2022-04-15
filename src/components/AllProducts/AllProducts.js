import {
    AppstoreOutlined,
    DeleteOutlined,
    EditOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Row, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useProduct } from '../../Context/ProductContext'
import { columns } from '../Data/ProductColumns'
import ProductModal from './ProductModal'
const { Meta } = Card

const AllProducts = () => {
    const [loading, setLoading] = useState(false)
    const { products, setProducts } = useState([])
    const [productView, setProductView] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalProduct, setModalProduct] = useState([])

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    // useEffect(() => {
    //     setLoading(true)
    //     loadProducts()
    //     setLoading(false)
    // }, [])

    const loadProducts = async () => {
        // const response = await axios.get(api)
        // setProducts(response.data)
    }

    const getProduct = (name, price, details, vat) => {
        let tempData = [name, price, details, vat]
        setModalProduct((pd) => [1, ...tempData])
        showModal()
    }

    return (
        <div>
            {productView ? (
                <Button
                    style={{ marginBottom: '20px' }}
                    onClick={() => setProductView(!productView)}
                    type="primary"
                >
                    <AppstoreOutlined />
                    Grid
                </Button>
            ) : (
                <Button
                    style={{ marginBottom: '20px' }}
                    onClick={() => setProductView(!productView)}
                    type="primary"
                >
                    {' '}
                    <UnorderedListOutlined />
                    List
                </Button>
            )}
            {productView ? (
                <Row gutter={[16, 24]}>
                    {products.map((product, index) => (
                        <Col span={6} key={index}>
                            <Card
                                onClick={() =>
                                    getProduct(
                                        product.name,
                                        product.price,
                                        product.details,
                                        products.vat
                                    )
                                }
                                style={{
                                    width: 300,
                                    boxShadow:
                                        ' rgba(0, 0, 0, 0.35) 0px 1px 3px',
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    />
                                }
                                actions={[
                                    <Button
                                        key={1}
                                        style={{
                                            background: '#2a9d8f',
                                            border: 'none',
                                            color: 'white',
                                        }}
                                    >
                                        <EditOutlined key="edit" /> Edit
                                    </Button>,
                                    <Button type="primary" danger key={2}>
                                        <DeleteOutlined key="delete" /> Delete
                                    </Button>,
                                ]}
                            >
                                <Meta
                                    title={product.name}
                                    description={'Price: $' + product.price}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={products}
                ></Table>
            )}
            {
                <ProductModal
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    showModal={showModal}
                    products={modalProduct}
                />
            }
        </div>
    )
}

export default AllProducts
