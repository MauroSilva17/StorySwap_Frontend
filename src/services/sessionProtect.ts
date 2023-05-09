import axios from 'axios'
import { ethers } from 'ethers'

export const sessionProtect = async (): Promise<boolean> => {
    try {
        // Check's for address's logged in
        const provider = new ethers.BrowserProvider(window.ethereum)
        const account = await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()

        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/protect`,
            {},
            {
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                    'accept-encoding': '*',
                },
            },
        )

        return response.data.success
    } catch (error) {
        console.log('Failed to verify session cookie')
        return false
    }
}
