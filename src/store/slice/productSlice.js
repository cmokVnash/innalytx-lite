import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import toast from 'react-hot-toast'
const initialState = {
    loading: false,
    products: null,
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkApi) => {
        const { restaurantUrl } = useGetUrl()
        console.log(restaurantUrl)
        const response = await http.get(`${restaurantUrl}item/`)
        return response?.data
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (formData, { dispatch }) => {
        const { restaurantUrl } = useGetUrl()
        try {
            console.log(restaurantUrl)
            const response = await http.post(`${restaurantUrl}item/`, formData)

            dispatch(getProducts())
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

const ProductSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.products = action.payload
        })
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log(action)
            state.loading = false
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false
            toast.success('Product created!')
        })
        builder.addCase(addProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.loading = false
            toast.error('Product cannot be created!')
        })
    },
})

export default ProductSlice
