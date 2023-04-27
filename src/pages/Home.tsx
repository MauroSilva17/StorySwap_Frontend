import React, { useEffect, useState } from 'react'
import { BrowserProvider, ethers } from 'ethers'
import { Button, Col, Divider, Input, Row, Space } from 'antd'
import { alchemyProvider, signer } from './../utils/provider'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './../utils/constants'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }

// Random string sent to populate NFT
const randomString = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcd23456789'
    let result = ''
    const length = 10
    const values = crypto.getRandomValues(new Uint32Array(length))
    values.forEach((value) => (result += chars[value % chars.length]))
    const converted = BigInt(result)
    return result
}

export default () => {
    const [balance, setBalance] = useState('0')

    const checkBalance = async () => {
        // creating instance of contract
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, await signer)
        // Get user user address
        const userAdress = await signer.address

        const userBalance = await contract.balanceOf(userAdress)
        setBalance(userBalance)
    }
    const minter = async () => {
        // creating instance of contract
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, await signer)
        const userAddress = await signer.address

        const randomURI = randomString()
        const tx = await contract.safeMint(userAddress, randomURI)
        await tx.wait()
    }

    return (
        <>
            <Divider orientation='center'></Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className='gutter-row' span={4}></Col>
                <Col className='center-col' span={16}>
                    <Row>
                        <Button size='large' type='primary' danger ghost={true} onClick={minter}>
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
