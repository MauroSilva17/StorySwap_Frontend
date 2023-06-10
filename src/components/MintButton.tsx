import { usePrepareContractWrite, useContractWrite, useAccount, useWalletClient } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../utils/constants'
import { _abi } from '../contracts/types/factories/STCoinAbi__factory'
import { Button } from 'antd'
import { useState } from 'react'

export default () => {
    const { address } = useAccount()

    if (!address) {
        // Handle the case when the address is undefined
        return <div>Loading...</div>
    }
    const { config } = usePrepareContractWrite({
        address: `0x${CONTRACT_ADDRESS}`,
        abi: _abi,
        functionName: 'safeMint',
        args: [address],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return (
        <>
            <Button size='large' type='primary' danger ghost={true} onClick={() => write?.()}>
                Mint
            </Button>
        </>
    )
}
