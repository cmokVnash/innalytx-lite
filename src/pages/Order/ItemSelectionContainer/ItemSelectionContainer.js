import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Bills,
  CartContainer,
  CartHeading,
  Devider,
  Div,
  InputPromo,
  OrderImg,
  OrderPromo,
  OrderTotal,
  OrderWrapper,
  PromoBtn,
} from '../OrderStyle'
import OrderCardItem from './OrderCardItem'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { createOrder } from '../../../store/slice/orderSlice'

const ItemSelectionContainer = () => {
  const { cartItems, totalPrice } = useSelector(
    (state) => state?.Order?.cart || {}
  )
  const { confirm } = Modal
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false)
  const dispatch = useDispatch()
  const canceOrderHandler = ()=>{
    
  }
  const placeOrderHandler = () => {
    confirm({
      title: 'Do you want to confirm the order?',
      icon: <ExclamationCircleOutlined />,
      content: 'By submitting yes your order will be placed',
      onOk() {
        dispatch(createOrder({ items: cartItems, total: totalPrice }))
      },
    })
  }

  return (
    <div>
      <CartContainer>
        <CartHeading>
          <Div>
            <OrderImg
              src="https://pmtips.net/Portals/0/EasyDNNnews/1895/img-attributes-of-a-successful-projectmManager.png"
              alt=""
            />
          </Div>
          {/* <Div style={{ marginRight: '70px' }}>
                        <h3>Manager</h3>
                        <p>221 B Baker Street, London</p>
                    </Div> */}
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
          {cartItems.map((cartItem, index) => {
            return <OrderCardItem key={index} item={cartItem} />
          })}
        </OrderWrapper>
        {/* <Devider /> */}
        <OrderTotal>
          <p>
            Subtotal <span>{totalPrice}/=</span>
          </p>

          {/* <OrderPromo>
            <InputPromo type="text" placeholder="Apply voucher" />
            <PromoBtn>Apply Promo</PromoBtn>
          </OrderPromo> */}
          <Devider />
          {/* <p style={{ margin: '20px 0' }}>
            Total <span>$174.6 </span>
          </p> */}
        </OrderTotal>
        {/* <input className="cancel-order" type="button" value="Cancel Order" />{' '}
        <Link to="/dashboard/confirm-order">
          <input className="place-order" type="button" value="Place Order" />
        </Link> */}
        <Button
          type="danger"
          className="cancel-order"
          style={{ margin: '5px' }}
        >
          Cancel Order
        </Button>
        <Button
          type="primary"
          className="place-order"
          onClick={placeOrderHandler}
        >
          {' '}
          Place Order
        </Button>
      </CartContainer>
      {/* {isOpenConfirmationModal && <Modal></Modal>} */}
    </div>
  )
}

export default ItemSelectionContainer
