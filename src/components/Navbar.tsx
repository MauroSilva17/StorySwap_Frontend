import React from 'react'
import { Col, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default () => {
    return (
        <>
            <Header>
                <Row>
                    <Col push={22}>
                        <ConnectButton />
                    </Col>
                </Row>
            </Header>
        </>
    )
}
