import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from './slice/authSlice'
import CategorySlice from './slice/categorySlice'

export default combineReducers({
    Auth: AuthSlice.reducer,
    Category: CategorySlice.reducer,
})
