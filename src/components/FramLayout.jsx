import React from 'react';
import IndexRouter from '../pages/index/router';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const FramLayout = (props) => {
  // 页面逻辑
  return (
    <Layout>
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
                  测试功能点
                </span>
              }
            >
              <Menu.Item key="1"><Link to='/index'>首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/outTime/3333'>动态传值</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/urlModel?cid=123'>url 模块获取get传值</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/redux'>redux</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/reminder'>reminder pro</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/lifeTimesFun'>生命周期函数</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  小型demo
                </span>
              }
            >
              <Menu.Item key="1"><Link to='/comment'>评论功能</Link></Menu.Item>
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
    </Layout>
  )
};

export default FramLayout