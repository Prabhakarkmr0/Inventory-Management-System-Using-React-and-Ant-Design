import {Layout,Table,Card} from 'antd'
import React from 'react'
import 'antd/dist/antd.css';
import Title from 'antd/lib/typography/Title';

const { Content } = Layout;

function Summary() {


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


    return (
        <div>
            <Title  style={{color:'Black', textAlign:"left" , marginLeft:10 , fontWeight:800}} level={4}>Order Summary</Title>
            <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 270 }}>
                        
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
            </Content>

                
            <Content style={{ marginLeft:350 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 270 }}>
                        <Card title="Default size card"  style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
            </Content>
                    
            

        </div>
    )
}

export default Summary
