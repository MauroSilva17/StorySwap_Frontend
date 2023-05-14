import axios from 'axios'
import { ethers } from 'ethers'

export const sessionProtect = async (): Promise<boolean> => {
    try {
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
