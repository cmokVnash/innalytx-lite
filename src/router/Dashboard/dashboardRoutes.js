import { lazy } from 'react'
import { privateRoute } from '../routes'

export const dashboardRoutes = [
    {
        path: privateRoute.products,
        component: lazy(() =>
            import('../../components/AllProducts/AllProducts')
        ),
    },
    {
        path: privateRoute.addProduct,
        component: lazy(() => import('../../components/AddProduct/AddProduct')),
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
