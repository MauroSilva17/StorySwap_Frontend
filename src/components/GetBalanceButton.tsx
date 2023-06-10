import { usePrepareContractWrite, useContractWrite, useAccount, useContractRead, useWalletClient, useWaitForTransaction } from 'wagmi'
import { CONTRACT_ADDRESS } from '../utils/constants'
import { _abi } from '../contracts/types/factories/STCoinAbi__factory'
import { Button, Input, Space } from 'antd'
import { read } from 'fs'
import { useState } from 'react'
import { sessionProtect } from '../services/auth/sessionProtect'

export default () => {
    const [balance, setBalance] = useState('')
    // Get the account address
    const { address, isConnected } = useAccount()
    sessionProtect()

    if (!address) {
        // Handle the case when the address is undefined
        return <div>Loading...</div>
    }

    const result = useContractRead({
        address: `0x${CONTRACT_ADDRESS}`,
        abi: _abi,
        functionName: 'balanceOf',
        args: [address],
        onSettled(data, error) {
            setBalance(data?.toString() ?? '0')
            console.log('Settled', { data, error })
        },
    })

    const checkBalance = async () => {
        await result.refetch() // Trigger a fresh read of the contract state

        const updated = result.data?.toString() ?? 'Error'
        setBalance(updated)
    }

    return (
        <div>
            <Space>
                <Input size='large' suffix='STC' disabled placeholder={balance} style={{ width: 200 }} />
                <Button size='large' type='primary' onClick={checkBalance}>
                    Check Balance
                </Button>
            </Space>
        </div>
    )
}
