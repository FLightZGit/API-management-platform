import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';


import { menuRoutes } from '../../routes/index'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Frame(props) {
  const navigate = useNavigate()
  return (
    < Layout >
      <Header className="header">
        <div className="logo" />
        <h1 style={{ color: 'white' }}>API管理平台</h1>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              menuRoutes.map(route => {
                return (
                  <SubMenu key={route.key} icon={route.icon} title={route.title}>
                    {
                      route.subMenu.map(menuChild => {
                        return <Menu.Item key={menuChild.path} onClick={() => { navigate(menuChild.path) }}>{menuChild.name}</Menu.Item>
                      })
                    }
                  </SubMenu>)
              })
            }
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
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
}

export default Frame