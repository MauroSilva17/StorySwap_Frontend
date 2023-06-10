import axios from 'axios'

export const signIn = async (signature: string, randomCode: string): Promise<boolean> => {
    try {
        // User authentication endpoint
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT as string}/auth/signin`,
            { signature, randomCode },
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
