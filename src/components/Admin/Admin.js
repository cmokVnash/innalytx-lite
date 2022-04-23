import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRestaurants } from '../../store/slice/adminSlice'
import { getProducts } from '../../store/slice/productSlice'

const Admin = () => {
  const dispatch = useDispatch()

  const allRestaurants = useSelector((state) => state.Admin.restaurants) || []
  console.log(allRestaurants)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [])

  const columns = [
    { title: 'Sl No.', dataIndex: 'index', key: 'index' },
    { title: 'Restaurants', dataIndex: 'restaurant', key: 'restaurant' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Link to="">View</Link>,
    },
  ]

  const RestaurantData = []
  allRestaurants.map((restaurant, index) => {
    return RestaurantData.push({
      id: restaurant.id,
      key: index,
      index: index + 1,
      restaurant: restaurant.schema_name,
    })
  })
  return (
    <>
      <Table columns={columns} dataSource={RestaurantData}></Table>
    </>
  )
}

export default Admin
