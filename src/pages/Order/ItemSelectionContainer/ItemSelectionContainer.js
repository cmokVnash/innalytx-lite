import React from 'react'
import {
    CiCircleFilled,
    CloseOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {
    Bills,
    CartContainer,
    CartHeading,
    Devider,
    Div,
    InputPromo,
    OrderCard,
    OrderDetails,
    OrderImg,
    OrderPromo,
    OrderTotal,
    OrderWrapper,
    PromoBtn,
} from '../OrderStyle'
const ItemSelectionContainer = () => {
    return (
        <div>
            {' '}
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
                    <OrderCard>
                        <OrderImg
                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                            alt=""
                        />
                        <OrderDetails>
                            <p>Lorem ipsum dolor sit</p>
                            <CloseOutlined style={{ fontSize: '14px' }} />
                            <span>1</span> <input type="text" value="M" />
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
                            <CloseOutlined style={{ fontSize: '14px' }} />{' '}
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
                            <CloseOutlined style={{ fontSize: '14px' }} />
                            <span>1</span> <input type="text" value="M" />
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
                        <InputPromo type="text" placeholder="Apply voucher" />
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
        </div>
    )
}

export default ItemSelectionContainer
