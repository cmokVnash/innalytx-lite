import 'antd/dist/antd.min.css'
import React, { useEffect, useState } from 'react'
import './App.css'
import Preloader from './components/Preloader/Preloader'
import ProductContextProvider from './Context/ProductContext'
import RoutesCollection from './router/router'


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
                    {/* <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/order/*" element={<Order />} />
                        <Route
                            path="/order/conformOrder"
                            element={<OrderDetails />}
                        />
                    </Routes> */}
                    <RoutesCollection />
                </ProductContextProvider>
            )}
        </>
    )
}

export default App
