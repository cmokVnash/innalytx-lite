import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../../store/slice/productSlice'

// const products = useSelector((state) => state.Product.products) || []

// const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(getProducts())
// }, [])

export const columns = [
    {
        key: '1',
        title: 'Name',
        dataIndex: 'name',
    },
    {
        key: '2',
        title: 'Details',
        dataIndex: 'details',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <Link to="/dashboard">View</Link>,
    },
]
