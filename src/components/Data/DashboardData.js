import React from 'react'
import {
    HomeOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    FileOutlined,
    FundViewOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons'
import AddCustomer from '../AddCustomer'
import AddEmployee from '../AddEmployee/AddEmployee'
import AddProduct from '../AddProduct/AddProduct'
import AllProducts from '../AllProducts/AllProducts'
import CreateBranch from '../CreateBranch/CreateBranch'
import AllEmployee from '../AddEmployee/AllEmployee'
import Admin from '../Admin/Admin'

export const menuItems = [
    {
        name: 'Dashboard',
        exact: true,
        to: '/dashboard',
        icon: <HomeOutlined />,
    },
    {
        name: 'Setting',
        exact: true,
        to: `setting`,
        icon: <SettingOutlined />,
        comp: <AddCustomer />,
        subMenus: [
            {
                name: 'Add Customer',
                to: 'setting/customer',
                comp: <AddCustomer />,
            },
            {
                name: 'Add Employee',
                to: 'setting/employee',
                comp: <AddEmployee />,
            },
            {
                name: 'All Employee',
                to: 'setting/all_employee',
                comp: <AllEmployee />,
            },
        ],
    },
    { name: 'Sales', to: `design`, icon: <ShoppingCartOutlined /> },
    {
        name: 'Pending Orders',
        exact: true,
        to: `pending-orders`,
        icon: <FileOutlined />,
    },
    {
        name: 'Add Product',
        exact: true,
        to: `new-product`,
        icon: <PlusCircleOutlined />,
        comp: <AddProduct />,
    },
    {
        name: 'Create Branch',
        exact: true,
        to: `new-branch`,
        icon: <PlusCircleOutlined />,
        comp: <CreateBranch />,
    },
    {
        name: 'All Products',
        exact: true,
        to: `products`,
        comp: <AllProducts />,
        icon: <FundViewOutlined />,
    },
    {
        name: 'Admin',
        exact: true,
        to: `admin`,
        comp: <Admin />,
        icon: <FundViewOutlined />,
    },
]
