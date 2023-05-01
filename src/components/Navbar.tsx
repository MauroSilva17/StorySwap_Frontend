import React from 'react'
import { Button, Col, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { WalletOutlined } from '@ant-design/icons'
import { connectWallet } from '../services/connectWallet.ts'

export default () => {
    return (
        <>
            <Header>
                <Row>
                    <Col push={22}>
                        <Button type='primary' size='large' icon={<WalletOutlined />} onClick={connectWallet}>
                            Connect to MetaMask
                        </Button>
                    </Col>
                </Row>
            </Header>
        </>
    )
}
