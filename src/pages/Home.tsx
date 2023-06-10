import React, { useState } from 'react'
import { Col, Divider, Row } from 'antd'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import MintButton from '../components/MintButton'
import GetBalanceButton from '../components/GetBalanceButton'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }

export default () => {
    const [balance, setBalance] = useState('0')
    // Get the account address
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    if (isConnected)
        return (
            <>
                <Divider orientation='center'></Divider>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className='gutter-row' span={4}></Col>
                    <Col className='center-col' span={16}>
                        <Row>
                            <MintButton />
                        </Row>
                        <br />
                        <Row>
                            <GetBalanceButton />
                        </Row>
                    </Col>
                    <Col className='gutter-row' span={4}></Col>
                </Row>
            </>
        )
    return <h2> Please Connect your wallet</h2>
}
