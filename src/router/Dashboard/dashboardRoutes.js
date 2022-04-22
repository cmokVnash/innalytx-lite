import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { privateRoute } from '../routes'

const isStaff = true

export const dashboardRoutes = [
  {
    path: privateRoute.products,
    component: lazy(() => import('../../components/AllProducts/AllProducts')),
  },
  {
    path: privateRoute.addProduct,
    component: lazy(() => import('../../components/AddProduct/AddProduct')),
  },
  {
    path: privateRoute.order,
    component: lazy(() => import('../../pages/Order/Order')),
  },
  {
    path: privateRoute.order,
    component: lazy(() => import('../../pages/Order/PaymentForm')),
  },
  {
    path: privateRoute.admin,
    component: lazy(() => import('../../components/Admin/Admin')),
  },
  {
    path: privateRoute.employees,
    component: lazy(() => import('../../components/AddEmployee/AllEmployee')),
  },
  {
    path: privateRoute.addEmployee,
    component: lazy(() => import('../../components/AddEmployee/AddEmployee')),
  },
  {
    path: privateRoute.confirmOrder,
    component: lazy(() => import('../../pages/Order/OrderDetails')),
  },

  // {
  //     path: privateRoute.products,
  //     component: lazy(() =>
  //         import('../../components/AllProducts/AllProducts')
  //     ),
  // },
  // {
  //     path: privateRoute.createOrder,
  //     component: lazy(() => import('../../components/')),
  // },
  // {
  //     path: privateRoute.employees,
  //     component: lazy(() =>
  //         import('../../components/')
  //     ),
  // },
  // {
  //     path: privateRoute.addEmployee,
  //     component: lazy(() => import('../../components/AddProduct/AddProduct')),
  // },
  // {
  //     path: privateRoute.addCustomer,
  //     component: lazy(() => import('../../components/')),
  // },
  //  {
  //     path: privateRoute.sales,
  //     component: lazy(() => import('../../components/')),
  // },
]
