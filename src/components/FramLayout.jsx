import React from 'react';
import IndexRouter from '../pages/index/router';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const FramLayout = (props) => {
  // 页面逻辑

  
  return   <Layout>
  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px', textAlign: 'right' }}
    >
      <Menu.Item key="1">建档管理</Menu.Item>
      <Menu.Item key="2">续当管理</Menu.Item>
      <Menu.Item key="3">赎当管理</Menu.Item>
    </Menu>
  </Header>
  <Layout>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              建档管理
            </span>
          }
        >
          <Menu.Item key="1">完成订单</Menu.Item>
          <Menu.Item key="2">过期订单</Menu.Item>
          <Menu.Item key="3">快逾期订单</Menu.Item>
          <Menu.Item key="4">逾期订单</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout style={{ padding: '24px' }}>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 520,
        }}
      >
        <IndexRouter />
      </Content>
    </Layout>
  </Layout>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>;
};

export default FramLayout