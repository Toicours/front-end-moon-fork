import { createConfig, configureChains } from '@wagmi/core'
import { base } from '@wagmi/core/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { InjectedConnector } from '@wagmi/core';


const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
const walletConnectId = import.meta.env.VITE_PUBLIC_WALLETCONNECT_ID;

    if (!alchemyApiKey) {
        throw new Error('Alchemy API key is not defined in environment variables.');
    }

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base],
  [alchemyProvider({ apiKey: alchemyApiKey })]
)

const config = createConfig({
    autoConnect: true,
    connectors: [
        new InjectedConnector({ chains }),
    ],
    publicClient,
    webSocketPublicClient,
});

export default config;
export { chains };