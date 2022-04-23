import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import toast from 'react-hot-toast'
const initialState = {
  loading: false,
  orders: [],
  cart: {
    cartItems: [],
    totalPrice: 0,
  },
}

export const getOrders = createAsyncThunk(
  'orders/getOrders',
  async (thunkApi) => {
    const { restaurantUrl } = useGetUrl()
    console.log(restaurantUrl)
    const response = await http.get(`${restaurantUrl}order/`)
    return response?.data
  }
)

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (formData, { dispatch }) => {
    const { restaurantUrl } = useGetUrl()
    try {
      console.log(restaurantUrl)
      const response = await http.post(`${restaurantUrl}order/`, formData)

      dispatch(getOrders())
      return response?.data
    } catch (e) {
      console.log(e)
    }
  }
)

const OrderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload)
      let found = false
      let newCart = state.cart.cartItems.map((it) => {
        if (payload.id === it.id && payload.size === it.size) {
          found = true
          return {
            ...it,
            count: it.count + 1,
            unitPrice: Number(payload.unitPrice),
            price: Number(payload.unitPrice) + Number(it.price),
          }
        }
        return { ...it }
      })
      console.log(newCart)
      if (!found) {
        state.cart.cartItems.push({
          ...payload,
          count: 1,
          price: Number(payload.unitPrice),
        })
      } else {
        console.log(newCart)
        state.cart.cartItems = newCart
      }
      state.cart.totalPrice =
        Number(payload.unitPrice) + Number(state.cart.totalPrice)
    },
    removeFromCart: (state, { payload }) => {},
    clearCart: (state) => {
      state.cart = {
        cartItems: [],
        totalPrice: 0,
      }
    },
    deductFromCart(state, { payload }) {
      let newCart = []
      state.cart.cartItems.forEach((it) => {
        console.log('it', it)
        console.log('payload', payload)
        if (payload.id === it.id && payload.size === it.size) {
          if (payload.count > 1) {
            newCart.push({
              ...it,
              count: it.count - 1,
              price: Number(it.price) - Number(payload.unitPrice),
            })
          }
          state.cart.totalPrice =
            Number(state.cart.totalPrice) - Number(payload.unitPrice)
        } else {
          newCart.push(it)
        }
      })
      state.cart.cartItems = newCart
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      console.log(action.payload)
      state.orders = action.payload
    })
    builder.addCase(getOrders.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getOrders.rejected, (state, action) => {
      console.log(action)
      state.loading = false
    })
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false
      toast.success('Order completed!')
    })
    builder.addCase(createOrder.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false
      toast.error('Order failed!')
    })
  },
})

export const { addToCart, deductFromCart, clearCart } = OrderSlice.actions
export default OrderSlice
