import React from "react";
import { Layout, Menu } from "antd";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { menuItems } from "../components/DashboardData";
import MenuItems from "../components/MenuItems";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div
            style={{
              height: "32px",
              margin: "16px",
            }}
            className="logo"
          >
            <p
              style={{
                color: "#00b4d8",
                fontSize: "20px",
                textTransform: "uppercase",
                marginLeft: "12px",
              }}
            >
              {" "}
              Innalytx
            </p>
          </div>

          {menuItems.map((menuItem, index) => (
            <MenuItems
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
            />
          ))}
        </Sider>
        <Layout className="site-layout">
          <Header>
            <Navbar />
          </Header>
          <Content style={{ margin: "16px" }}>
            <Routes>
              {menuItems.map((menu, index) => (
                <>
                  <Route
                    key={menu.name}
                    path={menu.to}
                    element={menu.comp}
                  ></Route>
                  {menu.subMenus && menu.subMenus.length > 0
                    ? menu.subMenus.map((subMenu, i) => (
                        <Route
                          key={subMenu.name}
                          path={subMenu.to}
                          element={subMenu.comp}
                        ></Route>
                      ))
                    : null}
                </>
              ))}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;