import axios from 'axios'
import { message } from 'antd'
import { store } from '../utils/getStore'

const http = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

http.interceptors.request.use(async (config) => {
    const state = store.getState()

    const token = state.Auth.token
    if (token) {
        const jwtToken = `Bearer ${token}`
        config.headers.Authorization = jwtToken
    }

    return config
})

export default http
