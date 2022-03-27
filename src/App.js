import './App.css'
import 'antd/dist/antd.min.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login/Login'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader/Preloader'
import Order from './pages/Order/Order'
import OrderDetails from './pages/Order/OrderDetails'
import Home from './pages/Homepage/Home'
import ProductContextProvider from './Context/ProductContext'
import LoginForm from './pages/Login/LoginForm'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2)
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
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/order/*" element={<Order />} />
                        <Route
                            path="/order/conformOrder"
                            element={<OrderDetails />}
                        />
                    </Routes>
                </ProductContextProvider>
            )}
        </>
    )
}

export default App
