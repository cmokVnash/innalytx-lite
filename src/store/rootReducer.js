import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from './slice/authSlice'
import CategorySlice from './slice/categorySlice'
import ProductSlice from './slice/productSlice'
import OrderSlice from './slice/orderSlice'

export default combineReducers({
    Auth: AuthSlice.reducer,
    Category: CategorySlice.reducer,
    Product: ProductSlice.reducer,
    Order: OrderSlice.reducer,
})
