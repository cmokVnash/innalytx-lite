import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import toast from 'react-hot-toast'
const initialState = {
    loading: false,
    categories: null,
}

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (thunkApi) => {
        const { restaurantUrl } = useGetUrl()
        console.log(restaurantUrl)
        const response = await http.get(`${restaurantUrl}category/`)
        return response?.data
    }
)

export const addCategory = createAsyncThunk(
    'categories/addCategory',
    async (formData, { dispatch }) => {
        const { restaurantUrl } = useGetUrl()
        try {
            console.log(restaurantUrl)
            const response = await http.post(
                `${restaurantUrl}category/`,
                formData
            )

            dispatch(getCategories())
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

const CategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            console.log(action.payload)
            state.categories = action.payload
        })
        builder.addCase(getCategories.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            console.log(action)
            state.loading = false
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            toast.success('Category created')
        })
        builder.addCase(addCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addCategory.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
            toast.error('Category could not be created')
        })
    },
})

export default CategorySlice
