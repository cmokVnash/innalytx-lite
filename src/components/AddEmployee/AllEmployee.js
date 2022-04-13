import { Table } from 'antd'
import React from 'react'

const columns = [
    {
        key: '1',
        title: 'Name',
        dataIndex: 'name',
    },
    {
        key: '2',
        title: 'Email',
        dataIndex: 'email',
    },
    {
        key: '3',
        title: 'Password',
        dataIndex: 'password',
    },
    {
        key: '4',
        title: 'Address',
        dataIndex: 'address',
    },
]

const employee = [
    {
        email: 'asif@gmail.com',
        name: 'Asif Omi',
        password: 'xy16sj7sd',
        address: '23/4 banasree',
    },

    {
        email: 'tareq@gmail.com',
        name: 'Tareq Ferdous',
        password: 'xy16sj7sd',
        address: '23/4 pabna',
    },
    {
        email: 'asif@gmail.com',
        name: 'Asif Omi',
        password: 'xy16sj7sd',
        address: '23/4 banasree',
    },

    {
        email: 'tareq@gmail.com',
        name: 'Tareq Ferdous',
        password: 'xy16sj7sd',
        address: '23/4 pabna',
    },
]

const AllEmployee = () => {
    return (
        <>
            <Table columns={columns} dataSource={employee}></Table>
        </>
    )
}

export default AllEmployee
