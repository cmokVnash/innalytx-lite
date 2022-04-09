import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from './slice/authSlice'

export default combineReducers({
    Auth: AuthSlice.reducer,
})
