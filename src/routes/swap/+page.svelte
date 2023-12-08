<script>
	import SwapCard from "$src/components/SwapCard.svelte";
	import { onMount } from "svelte";
	import { getContract } from "viem";
	import { walletClientState, initializeWalletClient } from "$lib/stores/viemWalletClientStore";
	import { publicClientState, initializePublicClient } from "$lib/stores/viemPublicClientStore";
	import UniswapV2Router from "$lib/abis/UniswapV2Router";
	import wagmiAbi from "$lib/abis/wagmiAbi";

	let walletClient;
	let publicClient;
	let contract;

	onMount(async () => {
		initializePublicClient();
		initializeWalletClient();
	});

	$: if ($walletClientState.isInitialized == true) {
		walletClient = $walletClientState.client;
	}

	$: if ($publicClientState.isInitialized == true) {
		publicClient = $publicClientState.client;
		contract = getContract({
			address: "0xE4533F29FA269aA6e87Ffc2088dA55F4F17ceCC8",
			abi: UniswapV2Router,
			publicClient
		});
	}

	async function readContract(contract_) {
		try {
			const result = await contract_.read.WETH();
			return result;
		} catch (error) {
			console.error("Error getting contract function:", error);
		}
	}
</script>

{#if $walletClientState.isInitialized == true}
	{#await readContract(contract)}
		<p>Fetching</p>
	{:then value}
		<p>{value}</p>
	{/await}
{/if}
<SwapCard />
