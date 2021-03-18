import {Layout,Button , Form, Input , Radio,
    Table,Row,Col,Menu, Dropdown} from 'antd'
import React from 'react'
import 'antd/dist/antd.css';
import Title from 'antd/lib/typography/Title';
import {useState} from "react"
import { DownOutlined } from '@ant-design/icons';



function Sale() {
const { Column } = Table;
const {Content } = Layout;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

const data = [
    {
        serial_number: 1,
        Product: "abc",
        Quantity: 1,
        Price: 100,
        Discount: 10,
        Total: 90,
    },
    {
        serial_number: 2,
        Product: "abcs",
        Quantity: 1,
        Price: 100,
        Discount: 10,
        Total: 90,
    },
    {
        serial_number: 3,
        Product: "absc",
        Quantity: 1,
        Price: 100,
        Discount: 10,
        Total: 90,
    },
  ];

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  };
  

  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };


      const [value, setvalue] = useState(1)


     const onChange = e => {
        console.log('radio checked', e.target.value);
        setvalue(e.target.value)
      };
     


    return (
        
            <div>
                <Title  style={{color:'Black', textAlign:"left" , marginLeft:10 , fontWeight:800}} level={4}>Sale Order</Title>
                
                <Row>
                    <Col span={12}>
                <Content >
                        <div className="site-layout-background" style={{ padding: 24, maxHeight: 200 }}>
                        
                        <h1 style={{marginLeft:200}}>Order</h1> 
                            <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                                
                            <Form.Item
                                label="Name"
                                name="Name"
                                
                                rules={[{ required: true, message: 'Please input your Name!' }]}
                                
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="E-Mail"
                                name="E-Mail"
                                rules={[{ required: true, message: 'Please input your E-Mail!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="Phone"
                                rules={[{ required: true, message: 'Please input your Phone!' }]}
                            >
                                <Input />
                            </Form.Item>
                            </Form>
                            
                            
                        </div>

                        
                </Content>
                </Col>
                <Col span={12}>

                <Content >
                    <div className="site-layout-background" style={{ padding: 24, maxHeight: 250 }}>
                    <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                    <h1>Payment Method</h1>
                    <Radio.Group onChange={onChange} value={value} >
                            
                                    <Radio style={radioStyle} value={1} onClick={()=>setvalue(1)}>
                                    Cash
                                    </Radio>
                                    <Radio style={radioStyle} value={2} onClick={()=>setvalue(2)}>
                                    Card
                                    </Radio>
                    </Radio.Group>              

                    <h1>Address</h1>
                    <Form.Item
                                name="Address"
                                rules={[{required: true, message: 'Address' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                            
                            </Form>
                    </div>
            </Content>
            </Col>

            </Row>


                <Content >
                    <div className="site-layout-background" style={{ padding: 24, maxHeight: 290 }}>
                    <Table dataSource={data}>
                        
                        <Column title="S.No" dataIndex="serial_number" key="sno" />
                        <Column title="Product" dataIndex="Product" key="prod" />
                        
                        

                        <Column title="Quantity" dataIndex="Quantity" key="quant" />
                        <Column title="Price" dataIndex="Price" key="pri" />
                        <Column title="Discount" dataIndex="Discount" key="disc" />
                        <Column title="Total" dataIndex="Total" key="tot" />
                        
                        
                        
                    </Table> 
                    </div>

                    <div>
                    <Button type="primary" style={{left:900}}>Add Item</Button>
                        
                    </div>

                    <div>
                    <Button type="primary" style={{width:500 , left:300 }}>Place Order</Button>  
                    </div>
                </Content>
                
               
            </div>
   
    )
}

  
export default Sale