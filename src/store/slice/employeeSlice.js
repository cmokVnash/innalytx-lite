import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '../../https'
import useGetUrl from '../../utils/useGetUrl'
import toast from 'react-hot-toast'

const initialState = {
    loading: false,
    employees: null,
}

export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async (thunkApi) => {
        const { restaurantUrl } = useGetUrl()
        console.log(restaurantUrl)
        const response = await http.get(`${restaurantUrl}employee/`)
        console.log(response)
        return response.data
    }
)

export const addEmployee = createAsyncThunk(
    'employee/addEmployee',
    async (values, { dispatch }) => {
        const { restaurantUrl, restaurantName } = useGetUrl()
        try {
            console.log(restaurantUrl)
            const response = await http.post(
                `${restaurantUrl}employee/`,
                values
            )

            dispatch(getEmployees())
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async ({ id }, { dispatch }) => {
        const { restaurantUrl } = useGetUrl()
        const response = await http.delete(`${restaurantUrl}employee/${id}/`)
        console.log(response)
        dispatch(getEmployees())
        return response.data
    }
)

export const EmployeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            console.log(action.payload)
            state.employees = action.payload
        })
        builder.addCase(getEmployees.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getEmployees.rejected, (state, action) => {
            console.log(action)
            state.loading = false
        })
        builder.addCase(addEmployee.fulfilled, (state, action) => {
            state.loading = false
            toast.success('Employee created!')
        })
        builder.addCase(addEmployee.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addEmployee.rejected, (state, action) => {
            state.loading = false
            toast.error('Employee Creation failed!')
        })
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            state.loading = false
            toast.success('Employee deleted!')
        })
        builder.addCase(deleteEmployee.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteEmployee.rejected, (state, action) => {
            state.loading = false
            toast.error('Something wrong!')
        })
    },
})

export default EmployeeSlice
