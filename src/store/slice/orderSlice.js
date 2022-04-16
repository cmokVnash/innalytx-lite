import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import toast from 'react-hot-toast'
const initialState = {
    loading: false,
    orders: null,
    cart: [],
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
    reducer: {
        addToCart(state, { payload }) {
            let found = false
            let newCart = state.cart.map((it) => {
                if (payload.id == it.id) {
                    found = true
                    return {
                        ...it,
                        count: payload.count + 1,
                    }
                } else {
                    return it
                }
            })

            if (!found) {
                state.cart = [
                    ...state.cart,
                    { id: payload.id, count: 1, item: payload.item },
                ]
            } else {
                state.cart = newCart
            }
        },
        removeFromCart(state, { payload }) {
            
        },
        deductFromCart(state, { payload }) {},
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

export default OrderSlice
