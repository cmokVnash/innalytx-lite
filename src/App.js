import 'antd/dist/antd.min.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Preloader from './components/Preloader/Preloader'
import ProductContextProvider from './Context/ProductContext'
import Dashboard from './pages/Dashboard'
import Home from './pages/Homepage/Home'
import Login from './pages/Login/Login'
import Order from './pages/Order/Order'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <ProductContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/order/*" element={<Order />} />
                    </Routes>
                </ProductContextProvider>
            )}
        </>
    )
}

export default App
