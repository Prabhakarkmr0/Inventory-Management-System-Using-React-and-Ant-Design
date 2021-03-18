import {Layout,Button , Form, Input ,Row,Col,List,Table} from 'antd'
import React from 'react'
import 'antd/dist/antd.css';
import Title from 'antd/lib/typography/Title';




function Purchase() {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
            key: '3',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          {
            key: '4',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          
      ];


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];


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
    

    const { Content } = Layout;
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

    return (
        <div>
            <Title  style={{color:'Black', textAlign:"left" , marginLeft:10 , fontWeight:800}} level={4}>Purchase Order</Title>

            <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 270 }}>
                         Items Needed

                         <Table dataSource={dataSource} columns={columns} />
                    </div>
            </Content>
   
                <Row>
                    <Col span={12}>
                <Content >
                        <div className="site-layout-background" style={{ padding: 24, maxHeight: 300 }}>
                        
                        <h1 style={{fontWeight:400,marginLeft:20}}>Order</h1>
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

                           

                            <Form.Item
                                label="Address"
                                name="Address"
                                rules={[{required: true, message: 'Address' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                            </Form>
                            
                            
                        </div>

                        
                </Content>
                </Col>
                <Col span={12}>

                <Content >
                    <div className="site-layout-background" style={{ padding: 24, maxHeight: 250 }}>
                            <Table dataSource={dataSource} columns={columns} />
                    </div>
            </Content>
            </Col>

            </Row>
            

        </div>
    )
}

export default Purchase
