import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="logo">Innalytx</div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i>
                        <MenuOutlined />
                    </i>
                </label>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>

                    <li className="">
                        <Link className="btn" to="/login">
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
