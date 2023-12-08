import { InjectedConnector } from '@wagmi/core';
import { chains } from './wagmiConfig'; 

const connector = new InjectedConnector({ chains: chains });

export default connector;