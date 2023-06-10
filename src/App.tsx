import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
// RainbowKit imports
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, goerli, arbitrumGoerli } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export default function App() {
    // /** RainbowKit config's **
    const { chains, publicClient } = configureChains([mainnet, polygon, optimism, arbitrum, goerli], [alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_API_KEY as string }), publicProvider()])

    const { connectors } = getDefaultWallets({
        appName: 'StorySwap',
        projectId: process.env.REACT_APP_PROJECT_ID as string,
        chains,
    })

    const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient,
    })
    // ** RainbowKit config's **/

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider chains={chains}>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </RainbowKitProvider>
            </WagmiConfig>
        </>
    )
}
