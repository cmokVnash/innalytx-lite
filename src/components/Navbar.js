import { Button, Menu } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.Auth.token)
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo"></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features</Menu.Item>
                    <Menu.Item key="works">How It Works</Menu.Item>
                    <Menu.Item key="faq">FAQ</Menu.Item>
                    <Menu.Item key="pricing">
                        {isLoggedIn ? (
                            <Button
                                type="link"
                                onClick={() => dispatch(logout())}
                                style={{ color: 'white' }}
                            >
                                Log out
                            </Button>
                        ) : (
                            <Button type="link" style={{ color: 'white' }}>
                                Log in
                            </Button>
                        )}
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
