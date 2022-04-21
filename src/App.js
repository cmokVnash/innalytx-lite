import { Spin } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'
import Preloader from './components/Preloader/Preloader'
import RoutesCollection from './router/router'
import { persistor, store } from './store/store'
import { loadProgressBar } from 'axios-progress-bar'
import http from './https/index'
import { Toaster } from 'react-hot-toast'
import { injectStore } from './utils/getStore'

function App() {
    const [loading, setLoading] = useState(true)
    loadProgressBar({}, http)
    injectStore(store)
  
    return (
        <Provider store={store}>
            <PersistGate loading={<Spin />} persistor={persistor}>
                <Toaster position="top-center" reverseOrder={false} />
                <BrowserRouter>{<RoutesCollection />}</BrowserRouter>
            </PersistGate>
        </Provider>
    )
    // return <>{loading ? <Preloader /> : <RoutesCollection />}</>
}

export default App
