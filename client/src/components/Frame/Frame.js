import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import { Layout, Menu, Button } from 'antd';
import { AlignLeftOutlined, ControlOutlined } from '@ant-design/icons';
import '../../style/Frame.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Frame() {
  const navigate = useNavigate()
  return (
    < Layout >
      <Header className="header">
        <h1 style={{ color: 'white' }}>API管理平台</h1>
        <Button type="primary" onClick={() => { navigate('/login') }} style={{ color: 'white' }}>退出</Button>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<AlignLeftOutlined />} title='项目管理'>
              <Menu.Item key="1">
                <Link to='/'>项目列表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ControlOutlined />} title='系统设置'>
              <Menu.Item key="2">
                <Link to='/menu/sysConfig/person'>管理员</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
}

export default Frame