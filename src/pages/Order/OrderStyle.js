import styled from 'styled-components'
import { Radio } from 'antd'

const CartContainer = styled.div`
    width: 26%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: #ffffff;
    padding: 0.5rem 1.5rem;
    z-index: 3;
    border-left: 1px solid #b1a7a6;
`

const CartHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`

const OrderImg = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 15px;
`

const OrderCard = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1fr 0.5fr;
    padding: 10px 0;
    gap: 5px;
    justify-content: space-around;
    align-items: flex-start;
`

const OrderWrapper = styled.div`
    height: 180px;
    width: 100%;
    overflow-y: scroll;
    margin: 20px 0;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-track {
        background-color: lightGray;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
    }
`

const ProductContainer = styled.div`
    width: 74%;
    height: 100vh;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 7px;
    }
`

const OrderContainer = styled.div`
    overflow: hidden;
`

const ProductHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Div = styled.div`
    & h2 {
        font-size: 25px;
        color: #264653;
        font-weight: 700;
    }
`

const CategoryContainer = styled.div`
    display: flex;
`

const CategoryBtn = styled.button`
    padding: 8px 12px;
    background: #00b4d8;
    color: #fff;
    border: 1px solid #457b9d;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 30px;
    margin-right: 20px;
`

const Bills = styled.h3`
    width: 10%;
    border-bottom: 2px solid gray;
`

const OrderDetails = styled.div`
    & span {
        color: black;
        font-size: 16px;
        font-weight: 500;
    }
    & input {
        width: 30px;
        height: 30px;
        text-align: center;
        border: 2px solid gray;
        border-radius: 10px;
        background-color: transparent;
        margin-left: 10px;
    }
`

const Devider = styled.hr`
    width: 100%;
    border: 1px dashed gray;
`

const OrderTotal = styled.div`
    & span {
        float: right;
        font-weight: 600;
    }
`

const OrderPromo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cce3de;
    border: none;
    border-radius: 10px;
    height: 45px;
    padding: 0 5px;
    margin: 5px 0 10px 0;
`

const InputPromo = styled.input`
    height: 100%;
    background-color: transparent;
    border: none;
    margin: 20px 0;
`

const PromoBtn = styled.button`
    float: right;
    background-color: #2a9d8f;
    border: none;
    border-radius: 5px;
    height: 80%;
    width: 30%;
    cursor: pointer;
    color: white;
`

const OrderPlaceBtn = styled.button`
    width: 48%;
    height: 40px;
    text-align: center;
    background-color: #2a9d8f;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 600;
`

const CancelOrderBtn = styled.button`
    width: 48%;
    height: 40px;
    text-align: center;
    background-color: #e63946;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 600;
`

const PaymentContainer = styled.div`
    width: 70%;
    height: 100vh;
    align-items: center;
    background-color: #e9ecef;
`

const PaymentWrapper = styled.div`
    max-width: 550px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    top: 25%;
    left: 23%;
`

const OrderCart = styled.div`
    width: 30%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: #ffffff;
    padding: 0.5rem 1.5rem;
    z-index: 3;
    border-left: 1px solid #b1a7a6;
`
const { Group, Button } = Radio

export {
    CartContainer,
    CartHeading,
    OrderImg,
    OrderCard,
    OrderWrapper,
    ProductContainer,
    OrderContainer,
    ProductHeading,
    Div,
    CategoryContainer,
    CategoryBtn,
    Bills,
    OrderDetails,
    Devider,
    OrderTotal,
    OrderPromo,
    InputPromo,
    PromoBtn,
    OrderPlaceBtn,
    CancelOrderBtn,
    PaymentContainer,
    PaymentWrapper,
    OrderCart,
}
