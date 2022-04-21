import {
    AppstoreOutlined,
    DeleteOutlined,
    EditOutlined,
    UnorderedListOutlined,
    DownOutlined,
} from '@ant-design/icons'
import {
    Button,
    Card,
    Col,
    Row,
    Table,
    Badge,
    Menu,
    Dropdown,
    Space,
} from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slice/productSlice'
// import { useProduct } from '../../Context/ProductContext'
import { columns } from '../Data/ProductColumns'
import ProductModal from './ProductModal'
const { Meta } = Card

const AllProducts = () => {
    const [loading, setLoading] = useState(false)
    // const { products, setProducts } = useState([])
    const [productView, setProductView] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalProduct, setModalProduct] = useState([])

    const products = useSelector((state) => state.Product.products) || []
    console.log(products)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const getProduct = (name, price, details, vat) => {
        let tempData = [name, price, details, vat]
        setModalProduct((pd) => [1, ...tempData])
        showModal()
    }

    const expandedRowRender = (record) => {
        console.log('record', record)
        const columns = [
            { title: 'Size', dataIndex: 'size', key: 'size' },
            { title: 'Price', dataIndex: 'price', key: 'price' },
        ]

        return (
            <Table
                columns={columns}
                dataSource={record.size}
                pagination={false}
            />
        )
    }

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Details', dataIndex: 'details', key: 'details' },
        {
            title: 'Base Price',
            dataIndex: 'size',
            key: 'price',
            render: (size) => {
                return size[0].price
            },
        },
    ]

    // const data = []
    // products.map((product, index) => {
    //     return data.push({
    //         key: index,
    //         name: product.name,
    //         details: product.details,
    //         price: product.size[0].price,
    //     })
    // })

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
                <Row gutter={[12, 24]}>
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
                                        src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
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
                                    description={
                                        'Price: $' + product.size[0].price
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Table
                    rowKey={'id'}
                    className="components-table-demo-nested"
                    columns={columns}
                    expandable={{ expandedRowRender }}
                    dataSource={products}
                />
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
