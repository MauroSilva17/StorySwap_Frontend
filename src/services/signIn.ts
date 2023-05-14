import { ethers } from 'ethers'
import axios from 'axios'

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
        const secretCode = process.env.REACT_APP_SIGNATURE_KEY as string
        const secretSignature = `Message for address: ${address} and chain ${chainId} with code: ${secretCode}`

        // User signature
        const signed = (await signer).signMessage(secretSignature)
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