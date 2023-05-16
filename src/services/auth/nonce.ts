import axios from 'axios'

export const nonce = async (): Promise<number | null> => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/nonce`, {
            headers: {
                'content-type': 'application/json',
            },
        })

        return response.data
    } catch (error) {
        console.log('Failed to get nonce')
        return null
    }
}
