/// <reference types="react-scripts" />
import { ExternalProvider } from '@ethersproject/providers'

declare global {
    interface Window {
        // ethereum?: ExternalProvider
        ethereum?: Eip1193Provider
    }
}
