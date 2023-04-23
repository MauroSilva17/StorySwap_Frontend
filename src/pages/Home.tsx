import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Input, Row, Space } from 'antd'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }

export default () => {
    const [balance, setBalance] = useState('0')

    const checkBalance = () => {
        setBalance('5')
    }

    return (
        <>
            <Divider orientation='center'></Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className='gutter-row' span={4}></Col>
                <Col className='center-col' span={16}>
                    <Row>
                        <Button size='large' type='primary' danger ghost={true}>
                            Mint
                        </Button>
                    </Row>
                    <br />
                    <Row>
                        <Space>
                            <Input size='large' prefix='￥' suffix='RMB' disabled placeholder={balance} style={{ width: 200 }} />
                            <Button size='large' type='primary' onClick={checkBalance}>
                                Check Balance
                            </Button>
                        </Space>
                    </Row>
                </Col>
                <Col className='gutter-row' span={4}></Col>
            </Row>
        </>
    )
}
