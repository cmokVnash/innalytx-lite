import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { menuItems } from "./components/DashboardData";
import MenuItems from "./components/MenuItems";
import Navbar from "./components/Navbar";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
