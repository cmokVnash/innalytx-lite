import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee, getEmployees } from '../../store/slice/employeeSlice'
import { Link } from 'react-router-dom'

const AllEmployee = () => {
    const dispatch = useDispatch()

    const employee = useSelector((state) => state.Employee.employees) || []
    console.log(employee)

    const data = []
    employee.map((e, index) => {
        return data.push({
            id: e.id,
            key: index,
            index: index + 1,
            name: e.user.name,
            email: e.user.email,
            address: e.address,
        })
    })

    console.log(data)

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    const columns = [
        {
            key: '1',
            title: 'Sl',
            dataIndex: 'index',
        },
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
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (address) => {
                console.log(address)
                return address
            },
        },

        {
            title: 'Action',
            dataIndex: 'id',
            key: 'x',
            render: (id) => {
                console.log(id)
                return (
                    <Link
                        onClick={() => dispatch(deleteEmployee({ id: id }))}
                        to=""
                    >
                        Delete
                    </Link>
                )
            },
        },
    ]

    return (
        <>
            <Table columns={columns} dataSource={data}></Table>
        </>
    )
}

export default AllEmployee
