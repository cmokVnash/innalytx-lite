import React from 'react'
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { OrderCard, OrderDetails, OrderImg } from '../OrderStyle'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addToCart, deductFromCart } from '../../../store/slice/orderSlice'

const OrderCardItem = ({ item }) => {
  console.log(item)
  const { name, size, price, id, count } = item
  const dispatch = useDispatch()
  const addItemToCart = (item) => {
    console.log('item', item)
    dispatch(addToCart(item))
  }
  const deductItemToCart = (item) => {
    dispatch(deductFromCart(item))
  }
  return (
    <OrderCard>
      <OrderImg
        src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
        alt=""
      />
      <OrderDetails>
        <p>{name}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <CloseOutlined style={{ fontSize: '14px' }} />
            <span>{count}</span> <input type="text" value={size} />
          </div>

          <div style={{ display: 'flex' }}>
            <Button
              icon={<PlusOutlined />}
              onClick={() => addItemToCart(item)}
            />
            <Button
              icon={<MinusOutlined />}
              onClick={() => deductItemToCart(item)}
            />
          </div>
        </div>
      </OrderDetails>
      <h4 className="order-price">{price}/=</h4>
    </OrderCard>
  )
}

export default OrderCardItem
