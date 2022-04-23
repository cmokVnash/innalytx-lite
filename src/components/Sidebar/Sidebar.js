import React from 'react'
import { Layout, Menu } from 'antd'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import options from './options'
import SidebarWrapper from './styles'

const { Item: MenuItem, SubMenu } = Menu

const { Sider } = Layout

export default function Sidebar() {
  // const { collapsed } = useSelector((state) => state.App)

  const currentUser = useSelector((state) => state.Auth)
  const { isStuff, isSuperUser } = currentUser
  console.log(isStuff, isSuperUser)

  const filteredOptions = options.filter((option) => option.label !== 'Admin')

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible
        width={240}
        className="sidebar shadow"
        // collapsed={collapsed}
        // style={{
        //     backgroundColor: '#fff',
        //     overflowY: 'auto',
        // }}
      >
        {/* <div
                    className="logo"
                    style={{
                        height: '32px',
                        margin: '16px',
                        color: 'lightGray',
                        fontSize: '25px',
                        paddingLeft: '25px',
                    }}
                >
                    Innalytx
                </div> */}
        <Menu theme="dark" mode="inline">
          {!isStuff && isSuperUser
            ? options.map((singleOption, index) => {
                const { key, path, label, LeftIcon, children } = singleOption
                return children ? (
                  <SubMenu key={key} icon={<LeftIcon />} title={label}>
                    {children.map((subMenuItem) => (
                      <MenuItem key={subMenuItem.key}>
                        <NavLink end to={subMenuItem.path}>
                          {subMenuItem.label}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem key={key} icon={<LeftIcon />}>
                    <NavLink end to={path}>
                      {label}
                    </NavLink>
                  </MenuItem>
                )
              })
            : filteredOptions.map((singleOption, index) => {
                const { key, path, label, LeftIcon, children } = singleOption
                return children ? (
                  <SubMenu key={key} icon={<LeftIcon />} title={label}>
                    {children.map((subMenuItem) => (
                      <MenuItem key={subMenuItem.key}>
                        <NavLink end to={subMenuItem.path}>
                          {subMenuItem.label}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem key={key} icon={<LeftIcon />}>
                    <NavLink end to={path}>
                      {label}
                    </NavLink>
                  </MenuItem>
                )
              })}
        </Menu>
      </Sider>
    </SidebarWrapper>
  )
}
