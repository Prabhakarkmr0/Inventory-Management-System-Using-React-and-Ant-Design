import React from 'react'
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


const { Header,Sider} = Layout;

function Home() {

    const [Value, setValue] = useState(0)

    
    // console.log(Value)

    return (
      
      <div>
    <Layout>

      <Header className="site-layout-background" style={{ padding: 20}}>
        <Title  style={{color:'white', textAlign:"left" , marginLeft:-15}} level={4}>Order Management</Title>
      </Header>

    <Layout>

    <Sider>
    
      <div className="logo" />
      <Menu theme="dark" mode="inline" >
            
            <Menu.Item key="1" icon={<ShoppingCartOutlined />} onClick={()=>setValue(1)}>
              
                Sale Order
              
            </Menu.Item>
        
            <Menu.Item key="2" icon={<ShoppingOutlined />} onClick={()=>setValue(2)}>
              
                Purchase Order
              
            </Menu.Item>
        
            <Menu.Item key="3" icon={<FormOutlined />} onClick={()=>setValue(3)}>
             
                Summary
              
            </Menu.Item>
        
            <Menu.Item key="4" icon={<UserOutlined />} >

              Login

            </Menu.Item>
      </Menu>

    </Sider>
    <Layout className="site-layout">

      {
        {
            "1" : <Sale/>,
            "2" : <Purchase/>,
            "3" : <Summary/>

        }[Value]
      }
      
    </Layout>
      </Layout>
  </Layout>
  </div>
    
    )
}

export default Home
