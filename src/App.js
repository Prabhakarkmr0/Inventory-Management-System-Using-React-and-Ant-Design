import { BrowserRouter as Router, Link , Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  FormOutlined,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

import Sale from "./Sale"
import Purchase from "./Purchase"
import Summary from "./Summary"
import {useState} from "react"


const { Header, Sider , Content } = Layout;

function App() {

  const [Value, setValue] = useState(1)

  console.log(Value)

  return (
    <Router>

      <Layout>

      <Header className="site-layout-background" style={{ padding: 20}}>
        <Title  style={{color:'white', textAlign:"left" , marginLeft:-15}} level={4}>Order Management</Title>
      </Header>

    <Layout>

    <Sider>
    
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[Value]} >
            
            <Menu.Item key="1" icon={<ShoppingCartOutlined />} onClick={()=>setValue(1)}>
              
                Sale Order
                <Link to="/"/>
            </Menu.Item>
        
            <Menu.Item key="2" icon={<ShoppingOutlined />} onClick={()=>setValue(2)}>
              
                Purchase Order
                <Link to="/purchase"/>
            </Menu.Item>
        
            <Menu.Item key="3" icon={<FormOutlined />} onClick={()=>setValue(3)}>
             
                Summary
                <Link to="/summary"/>
            </Menu.Item>
        
            <Menu.Item key="4" icon={<UserOutlined />} >

              Login

            </Menu.Item>
      </Menu>

    </Sider>
    <Layout className="site-layout">

     <Content>
     <Route exact path="/" component={Sale} />
     <Route exact path="/purchase" component={Purchase} />
     <Route exact path="/summary" component={Summary} />

     </Content>
      
    </Layout>
      </Layout>
  </Layout>   



    </Router>
    
  );
}

export default App;
