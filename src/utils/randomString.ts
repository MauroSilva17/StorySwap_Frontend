import { randomBytes } from 'ethers'
import { v4 as uuidv4 } from 'uuid'

export const randomString = (): string => {
    return uuidv4()
    // return randomBytes(16).toString()
}
