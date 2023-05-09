import { ethers } from 'ethers'

export const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts
    const account = await provider.send('eth_requestAccounts', [])
    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner()
}
