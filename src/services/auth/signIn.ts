import { ethers } from 'ethers'
import axios from 'axios'
import { randomString } from '../../utils/randomString'
import { nonce } from './nonce'
import { useState } from 'react'

export const signIn = async (): Promise<boolean> => {
    try {
        // Wallet connecting
        const provider = new ethers.BrowserProvider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        const account = await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()

        // // Get user's data
        // const address = (await signer).address
        // const chain = (await signer).provider._network.chainId
        // const chainId = chain.toString()

        // Get random code from GET /nonce to sign
        let randomNumber = await nonce()
        if (!randomNumber) {
            randomNumber = 0
        }
        const nonceCode = randomNumber.toString()

        console.log('nonce Code: ' + nonceCode)

        // Generating a random string, with code from GET /nonce request
        const message = `***->> Private code :: ${nonceCode} :: Do you wish to sign ? :: ->>`

        // User signature
        const signed = (await signer).signMessage(message)
        const signature = (await signed).toString()

        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/signin`,
            { signature, nonceCode },
            {
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                },
            },
        )

        return response.data.success
    } catch (error) {
        console.log(error)
        return false
    }
}
