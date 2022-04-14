import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'
import http from '../../https'
import { urls } from '../../https/config'
import useGetUrl from '../../utils/useGetUrl'

const initialState = {
    loading: false,
    categories: null,
   
}

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const restaurantUrl = useGetUrl()
        console.log(restaurantUrl)
        const response = await http.get(`${restaurantUrl}/category/`)
        return response?.data
    }
)

export const addCategory = createAsyncThunk(
    'categories/addCategory',
    async (formData, { dispatch }) => {
        const restaurantUrl = useGetUrl()
        try {
            console.log(restaurantUrl)
            const response = await http.post(
                `${restaurantUrl}/category/`,
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
            console.log(action.payload)
            state.loading = false
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
        })
        builder.addCase(addCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addCategory.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
        })
    },
})

export default CategorySlice
