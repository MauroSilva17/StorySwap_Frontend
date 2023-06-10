import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signIn } from '../services/auth/signIn'
import { useAccount, useSignMessage } from 'wagmi'
import { randomString } from '../utils/randomString'

export default () => {
    // Get random number for signature message
    const randomCode = randomString()
    const message = `***->> Private code :: ${randomCode} :: Do you wish to sign ? :: ->>`

    const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
        message: message,
        onSuccess(data) {
            signIn(data, randomCode)
        },
    })

    return (
        <div>
            <button disabled={isLoading} onClick={() => signMessage()}>
                Sign message
            </button>

            {isSuccess && <div>Signature: {data}</div>}
            {isError && <div>Error signing message</div>}
        </div>
    )
}

//     const { address, isConnecting, isDisconnected } = useAccount()

//     const [state, setState] = useState(false)

//     // useEffect(() => {
//     //     console.log('inside useEffect')
//     //     if (!isDisconnected) {
//     //         // Call signIn to create a session cookie IF connected
//     //         signIn()
//     //         console.log('called signIn')
//     //         setState(true)
//     //     }
//     //     setState(false)
//     // }, [state])

//     return <ConnectButton />
// }
