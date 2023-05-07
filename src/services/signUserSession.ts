import { ethers } from 'ethers'
import axios from 'axios'

export const SignIn = async (): Promise<boolean> => {
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

        // Generating signing message on backend endpoint
        const messageResponse = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/generateSignMessage`,
            { address },
            {
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                },
            },
        )
        const generateSignMessage: string = messageResponse.data.message

        // User signature
        const signed = (await signer).signMessage(generateSignMessage)
        const signature = (await signed).toString()

        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/signin`,
            { address, chainId, signature },
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

export default SignIn
