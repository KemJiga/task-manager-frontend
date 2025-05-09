import React from 'react';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import CustomCalendar from '../components/CustomCalendar';
import items1 from '../components/Header';
import items2 from '../components/Aside';
import { Footer } from 'antd/es/layout/layout';
import FooterSection from '../components/Footer';

const { Header, Content, Sider } = Layout;

const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Button type="primary" style={{ marginRight: '20px' }}>
          <UserOutlined />
        </Button>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}
        />
        <Button type="default" style={{ marginLeft: 'auto' }}>
          <PlusOutlined />
        </Button>
      </Header>

      <Layout>
        <Sider width={350} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <CustomCalendar />
          </Content>
        </Layout>
      </Layout>
      <Layout>
        <Footer>
          <FooterSection />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;