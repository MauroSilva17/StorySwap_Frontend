import { ethers } from 'ethers'
import axios from 'axios'
import { randomString } from '../utils/randomString'

export const signIn = async (): Promise<boolean> => {
    try {
        // Wallet connecting
        const provider = new ethers.BrowserProvider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        const account = await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()

        // Get user's data
        const address = (await signer).address
        const chain = (await signer).provider._network.chainId
        const chainId = chain.toString()

        // Generating signing message
        const randomCode = randomString()

        const message = `Address: ${address}, chain ${chainId}, Code: ${randomCode}`

        // User signature
        const signed = (await signer).signMessage(message)
        const signature = (await signed).toString()

        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/signin`,
            { address, chainId, signature, message },
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
