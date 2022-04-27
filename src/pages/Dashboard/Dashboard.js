import React from 'react'
import { Layout } from 'antd'
// import Sidebar from 'features/Sidebar';
// import Topbar from 'features/Topbar';

import { Header } from 'antd/lib/layout/layout'
import Navbar from '../../components/Navbar'
import DashboardRouter from '../../router/Dashboard/dashboarRouter'
import Sidebar from '../../components/Sidebar/Sidebar'

const { Content } = Layout
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '90px 0 0',
    flexShrink: '0',
    position: 'relative',
  },
}

export default function Dashboard() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <Navbar />
      </Header>
      <Layout>
        <Sidebar />

        <Layout
          className=""
          style={{
            height: 'calc(100vh - 65px)',
            overflowY: 'scroll',
          }}
        >
          <Content
            style={{
              paddingTop: '20px',
              marginLeft: '260px',
            }}
          >
            <DashboardRouter />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
