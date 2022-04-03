import { CoffeeOutlined, FileOutlined, FundViewOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';

import AllMenus from '../OrderDetails/AllMenus';
import OrderHome from '../OrderDetails/OrderHome';
import Setting from '../OrderDetails/Setting';

  
  
  export const orderItems = [
    {
      name: "Home",
      exact: true,
      to: "order",
      icon: <HomeOutlined />,
      comp: <OrderHome />,
    },
    {
      name: "Menus", 
      exact: true,
      to: `menu`,
      icon: <CoffeeOutlined />,
      comp: <AllMenus/>,
    },
    {
      name: "Pending Orders",
      exact: true,
      to: `pending-orders`,
      icon: <FileOutlined/>,
    },
    {
      name: "Setting",
      exact: true,
      to: `setting`,
      icon: <SettingOutlined />,
      comp: <Setting />,
    },
    {
      name: "Wallet",
      exact: true,
      to: `wallet`,
      icon: <FundViewOutlined />,
    },
  ];