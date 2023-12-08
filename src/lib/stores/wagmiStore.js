import { writable } from 'svelte/store';
import config, { chains } from '$lib/wagmiConfig';
import  connector  from '$lib/walletConnection';

export const blockchainStore = writable({
    wagmiConfig: config,
    chains: chains,
    connectors: connector,
    wallet: {
        isConnected: false,
        address: null
    }
    // Add other blockchain-related states as needed
});