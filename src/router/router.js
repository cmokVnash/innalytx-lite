import React, { lazy, Suspense } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { publicRoute, privateRoute } from './routes.js'
import Home from '../pages/Homepage/Home.js'
import Login from '../pages/Login/LoginForm'

import Order from '../pages/Order/Order.js'
import Dashboard from '../pages/Dashboard/Dashboard.js'
import { OrderDetails } from '../pages/Order/OrderStyle.js'
// import { PUBLIC_ROUTE } from './appRoutes'

// const Dashboard = lazy(() => import('features/Dashboard'))
// const SignInPage = lazy(() => import('pages/SignInPage'))
// const NotFound = lazy(() => import('pages/NotFoundPage'))

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.Auth.token)
  return isLoggedIn ? children : <Navigate to={publicRoute.login} />
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

function RoutesCollection() {
  const publicRoutes = [
    {
      path: publicRoute.landing,
      component: Home,
    },
    {
      path: publicRoute.login,
      component: Login,
    },
  ]

  return (
    <div>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          {publicRoutes.map((routeElement) => {
            const RouteComponent = routeElement.component
            return (
              <Route
                key={routeElement.path}
                path={routeElement.path}
                element={<RouteComponent />}
              />
            )
          })}
          )
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/order/*"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
      {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/order/*" element={<Order />} />
                <Route path="/order/conformOrder" element={<OrderDetails />} />
            </Routes> */}
    </div>
  )
}

export default RoutesCollection
