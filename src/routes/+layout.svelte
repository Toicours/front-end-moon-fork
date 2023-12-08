<script>
	import { onMount } from "svelte";
	import "../app.css";
	import Navbar from "$src/components/Navbar.svelte";
	import { blockchainStore } from '$lib/stores/wagmiStore';
	import connector from '$lib/walletConnection';
	import {connect, fetchBalance, getContract, readContract } from "@wagmi/core"

	import UniswapV2Router from "$src/lib/abis/UniswapV2Router";
	
	let balance, contract;

	onMount(() => {
    if (typeof window.ethereum !== 'undefined') {
        connect({ connector }).then(data => {
            if (data.account) {
                blockchainStore.update(store => {
                    store.wallet = {
                        isConnected: true,
                        address: data.account
                    };
                    return store;
                });
                updateBalance();
            }
        }).catch(error => {
            console.error('Error connecting wallet:', error);
        });
    } else {
        console.log('MetaMask (or other injected wallet) is not available.');
    }
});

$: if ($blockchainStore.wallet.address && $blockchainStore.wallet.isConnected) {
    updateBalance();
}

async function updateBalance() {
    try {
        const address = $blockchainStore.wallet.address;
        if (!address) {
            console.error('Wallet address is undefined or empty.');
            return;
        }

        const response = await fetchBalance({ address });
        if (response) {
            balance = `${response.formatted} ${response.symbol}`;
        } else {
			console.error('No balance data received:', response);
			console.log(response.decimals)
            balance = '0 ETH'; // Set a default or error state for balance
        }
    } catch (error) {
        console.error('Error fetching balance:', error);
        balance = 'Error fetching balance'; // Set a default or error state for balance
    }
}

async function readContract_() {
	try {
		 contract = await readContract({
			address: "0xE4533F29FA269aA6e87Ffc2088dA55F4F17ceCC8",
			abi: UniswapV2Router,
			functionName: "WETH",
		});
		return contract;
	} catch (error) {
		console.error("Error getting contract function:", error);
	}
}
readContract_()
console.log($blockchainStore.wagmiConfig.chains)
</script>

<Navbar />

<h1>User Balance</h1>
<p>{balance}</p>
<p>{$blockchainStore.wagmiConfig.chains}</p>
<slot />
