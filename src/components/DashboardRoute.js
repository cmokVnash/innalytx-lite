import React from "react";
import { menuItems } from "../App";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

const DashboardRoute = () => {
  return (
    <Routes>
      {/* {menuItems.map((menu, index) => (
        <>
          <Route key={menu.name} element={menu.to}>
            <h1>{menu.comp}</h1>
          </Route>
          {menu.subMenus && menu.subMenus.length > 0
            ? menu.subMenus.map((subMenu, i) => (
                <Route key={subMenu.name} element={subMenu.to}>
                  <h1>{subMenu.comp}</h1>
                </Route>
              ))
            : null}
        </>
      ))} */}
    </Routes>
  );
};

export default DashboardRoute;
