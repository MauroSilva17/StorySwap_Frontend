import axios from 'axios'
import { ethers } from 'ethers'

export const sessionProtect = async (): Promise<boolean> => {
    try {
        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth`,
            {},
            {
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                    'accept-encoding': '*',
                },
            },
        )
        console.log('Response status: ' + response.status)
        return response.status == 200
    } catch (error) {
        console.log('Failed to verify session cookie')
        return false
    }
}
