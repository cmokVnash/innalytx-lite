import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Spin } from 'antd'
import { dashboardRoutes } from './dashboardRoutes'

// const NotFound = lazy(() => import('pages/NotFoundPage'))

export default function DashboardRouter() {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <Suspense fallback={<Spin />}>
            <Routes>
                {dashboardRoutes.map((route, i) => {
                    const RouteComponent = route.component
                    return (
                        <Route
                            exact={route.exact}
                            key={`${i + route.key}`}
                            path={`${route.path}`}
                            element={<RouteComponent />}
                        />
                    )
                })}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Suspense>
    )
}
