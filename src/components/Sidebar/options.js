import {
    ClusterOutlined,
    DashboardOutlined,
    DesktopOutlined,
    MenuOutlined,
    OrderedListOutlined,
} from '@ant-design/icons'
import { privateRoute } from '../../router/routes'

const options = [
    {
        key: 1,
        path: privateRoute.dashboard,
        label: 'Dashboard',
        LeftIcon: DesktopOutlined,
    },
    {
        key: 2,
        path: privateRoute.products,
        label: 'Product',
        LeftIcon: DashboardOutlined,
        children: [
            {
                key: 'sub-1',
                path: privateRoute.products,
                label: 'All Products',
            },
            {
                key: 'sub-2',
                path: privateRoute.addProduct,
                label: 'Add Product',
            },
        ],
    },
    {
        key: 3,
        path: privateRoute.order,
        label: 'Order',
        LeftIcon: OrderedListOutlined,
    },
]
export default options
