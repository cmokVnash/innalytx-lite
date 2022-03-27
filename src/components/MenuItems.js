import { SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

const MenuItems = (props) => {
  const { name, subMenus, to, icon } = props;
  return (
    <>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={icon}>
          <NavLink to={to}> {name}</NavLink>
        </Menu.Item>
        {subMenus && subMenus.length > 0 ? (
          <SubMenu icon={<SettingOutlined />} title={name}>
            {subMenus.map((menu, index) => (
              <Menu.Item key={index}>
                <NavLink to={menu.to}>{menu.name}</NavLink>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : null}
      </Menu>
    </>
  );
};

export default MenuItems;
