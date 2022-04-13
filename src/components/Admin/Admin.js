import { Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Branch', dataIndex: 'branch', key: 'branch' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <Link to="/dashboard">View</Link>,
    },
]

const data = [
    {
        key: 1,
        name: 'BBQ Bangladesh',
        branch: 2,
        address: 'New York No. 1 Lake Park',
        description:
            'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Sultan Dine',
        branch: 5,
        address: 'London No. 1 Lake Park',
        description:
            'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Take Out',
        branch: 0,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Chillox',
        branch: 2,
        address: 'Sidney No. 1 Lake Park',
        description:
            'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
]

const Admin = () => {
    return (
        <>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.description}</p>
                    ),
                    rowExpandable: (record) => record.name !== 'Take Out',
                }}
                dataSource={data}
            />
        </>
    )
}

export default Admin
