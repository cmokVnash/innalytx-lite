import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import useGetUrl from '../../utils/useGetUrl'
import http from '../../https'
import { urls } from '../../https/config'
const initialState = {
  loading: false,
  restaurants: null,
}

export const getRestaurants = createAsyncThunk(
  'admin/getRestaurants',
  async (thunkApi) => {
    const { rootUrl } = urls
    console.log(rootUrl)
    const response = await http.get(`${rootUrl}/superadmin/schema_list`)
    console.log(response)
    return response?.data
  }
)

const AdminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      console.log(action.payload)
      state.restaurants = action.payload
    })
    builder.addCase(getRestaurants.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getRestaurants.rejected, (state, action) => {
      console.log(action)
      state.loading = false
    })
  },
})

export default AdminSlice
