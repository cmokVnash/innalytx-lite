import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import toast from 'react-hot-toast'
const initialState = {
    loading: false,
    orders: null,
}

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (thunkApi) => {
        const { restaurantUrl } = useGetUrl()
        console.log(restaurantUrl)
        const response = await http.get(`${restaurantUrl}item/`)
        return response?.data
    }
)

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (formData, { dispatch }) => {
        const { restaurantUrl } = useGetUrl()
        try {
            console.log(restaurantUrl)
            const response = await http.post(`${restaurantUrl}item/`, formData)

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
    reducer: {},
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
