import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '../../https'
import storage from 'redux-persist/lib/storage'
import { urls } from '../../https/config'
const initState = {
    token: null,
    loading: false,
    isFetched: true,
    restaurantName: null,
    isAdmin: null,
}
export const loginReq = createAsyncThunk(
    'auth/loginReq',
    async (formdata, thunkApi) => {
        const { restaurant_name, ...rest } = formdata
        const { suffixSubdomainUrl, rootUrl, prefixSubdomainUrl } = urls
        const subDomainUrl = `${prefixSubdomainUrl}${restaurant_name}.${suffixSubdomainUrl}/login/`

        if (restaurant_name) {
            try {
                const response = await http.post(subDomainUrl, formdata)
                console.log(response)
                return response?.data
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const response = await http.post(`${rootUrl}/login/`, rest)
                console.log(rootUrl)
                console.log(response)
                return response?.data
            } catch (error) {
                console.log(error?.response)
            }
        }
        // const response = await http.post(
        //     // `${authUrl}/users/user/email-token/`,
        //     // formdata
        // )
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        // login(state, { payload }) {
        //     state.token = payload
        // },
        logout(state) {
            storage.removeItem('persist:root')
            state.token = null
            state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginReq.fulfilled, (state, action) => {
            console.log(action.payload)
            state.token = action.payload?.access_token
            state.loading = false
            state.isFetched = true
            state.restaurantName = action.payload?.restaurant_name
        })
        builder.addCase(loginReq.pending, (state, action) => {
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
