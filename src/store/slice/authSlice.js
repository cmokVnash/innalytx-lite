import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '../../https'
import storage from 'redux-persist/lib/storage'

const initState = {
    token: null,
    loading: false,
}
export const loginReq = createAsyncThunk(
    'auth/loginReq',
    async (formdata, thunkApi) => {
        const response = await http.post(
            // `${authUrl}/users/user/email-token/`,
            // formdata
        )
        return response?.data
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        login(state, { payload }) {
            state.token = payload
        },
        logout(state) {
            storage.removeItem('persist:root')
            state.token = null
            state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginReq.fulfilled, (state, action) => {
            console.log(action.payload)
            state.token = action.payload?.token
            state.loading = false
        })
        builder.addCase(loginReq.pending, (state, action) => {
            console.log(action.payload)
            state.token = action.payload?.token
            state.loading = true
        })
        builder.addCase(loginReq.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
        })
    },
})

// export const loginRequest = createAction('auth/login_request');
export const { login, logout } = AuthSlice.actions

export default AuthSlice
