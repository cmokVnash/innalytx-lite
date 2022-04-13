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
]
