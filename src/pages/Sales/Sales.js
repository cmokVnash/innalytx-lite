import { Typography, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/slice/orderSlice'

const Sales = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const { orders } = useSelector((state) => state.Order)
  const expandedRowRender = (record) => {
    console.log('record', record)
    const columns = [
      { title: 'id', dataIndex: 'id', key: 'id' },
      { title: 'name', dataIndex: 'name', key: 'name' },
      { title: 'price', dataIndex: 'price', key: 'price' },
      { title: 'count', dataIndex: 'count', key: 'count' },
      { title: 'size', dataIndex: 'size', key: 'size' },
    ]

    return (
      <Table columns={columns} dataSource={record.items} pagination={false} />
    )
  }
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Total item type',
      dataIndex: 'items',
      key: 'total_items',
      render: (items) => {
        return <Typography>{items?.length}</Typography>
      },
    },
    {
      title: 'Total Price',
      dataIndex: 'total',
      key: 'total',
      render: (total) => {
        return <Typography>{total}/=</Typography>
      },
    },
  ]
  return (
    <Table
      rowKey={'id'}
      dataSource={orders}
      columns={columns}
      expandable={{ expandedRowRender }}
      pagination={false}
    >
      Sales
    </Table>
  )
}

export default Sales
