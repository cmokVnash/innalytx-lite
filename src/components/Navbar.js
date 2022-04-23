import { Button, Menu } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import { Link } from 'react-router-dom'
import { Header } from 'antd/lib/layout/layout'
import { MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.Auth.token)
  return (
    <div className="container-fluid">
      <nav>
        <div className="logo"></div>
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
          {isLoggedIn ? (
            <li>
              <Button
                type="link"
                onClick={() => dispatch(logout())}
                style={{
                  color: 'white',
                  backgroundColor: '#48bfe3',
                  fontWeight: 600,
                }}
              >
                Logout
              </Button>
            </li>
          ) : (
            <li>
              <Button type="link" style={{ color: 'white' }}>
                Log in
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
