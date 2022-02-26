import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import AddCustomer from "./AddCustomer";

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    name: "Setting",
    exact: true,
    to: `setting`,
    icon: <SettingOutlined />,
    comp: <AddCustomer />,
    subMenus: [
      { name: "Add Customer", to: "setting/customer", comp: <AddCustomer /> },
      { name: "Add Employee", to: "setting/employee" },
    ],
  },
  { name: "Sales", to: `design`, icon: <ShoppingCartOutlined /> },
  {
    name: "Pending Orders",
    exact: true,
    to: `sales`,
    icon: <DesktopOutlined />,
  },
];
