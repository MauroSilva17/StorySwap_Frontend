import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Button, Col, Divider, Input, Row, Space } from 'antd'
// import { signer } from './../utils/provider'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './../utils/constants'
import { sessionProtect } from '../services/sessionProtect'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }

export default () => {
    const [balance, setBalance] = useState('0')

    const checkBalance = async () => {
        // // sessionMiddleware to send cookie and receive signature
        sessionProtect()
        // // creating instance of contract
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        // // Get user user address
        // const userAdress = signer.address

        // const userBalance = await contract.balanceOf(userAdress)
        // setBalance(userBalance)

        alert('minted func')
    }
    const mint = async () => {
        // // creating instance of contract
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        // const userAddress = signer.address

        // const tx = await contract.safeMint(userAddress)
        // await tx.wait()
        alert('getBalance func')
    }

    return (
        <>
            <Divider orientation='center'></Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className='gutter-row' span={4}></Col>
                <Col className='center-col' span={16}>
                    <Row>
                        <Button size='large' type='primary' danger ghost={true} onClick={mint}>
                            Mint
                        </Button>
                    </Row>
                    <br />
                    <Row>
                        <Space>
                            <Input size='large' suffix='STC' disabled placeholder={balance} style={{ width: 200 }} />
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
