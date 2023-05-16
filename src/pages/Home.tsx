import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Button, Col, Divider, Input, Row, Space } from 'antd'
// import { signer } from './../utils/provider'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './../utils/constants'
import { sessionProtect } from '../services/auth/sessionProtect'
import { nonce } from '../services/auth/nonce'

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' }

export default () => {
    const [balance, setBalance] = useState('0')

    const checkBalance = async () => {
        // // Get address signer
        // const provider = new ethers.BrowserProvider(window.ethereum)

        // // MetaMask requires requesting permission to connect users accounts
        // const account = await provider.send('eth_requestAccounts', [])
        // // The MetaMask plugin also allows signing transactions to
        // // send ether and pay to change state within the blockchain.
        // // For this, you need the account signer...
        // const signer = provider.getSigner()

        //     ************** FOR TESTING ************* Send cookie authentication route
        sessionProtect()

        // const signature = Cookies.get('signature')
        // // creating instance of contract
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signature)
        // // Get user user address
        // const userAdress = signer.address

        // const userBalance = await contract.balanceOf(userAdress)
        // setBalance(userBalance)

        alert('check balance func')
    }
    const mint = async () => {
        // creating instance of contract
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        // const userAddress = signer.address
        // const tx = await contract.safeMint(userAddress)
        // await tx.wait()
        // alert('mint func')
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
