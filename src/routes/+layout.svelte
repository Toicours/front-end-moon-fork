<script>
	import { onMount } from "svelte";
	import "../app.css";
	import Navbar from "$src/components/Navbar.svelte";

	import { walletClientStore } from "$lib/stores/viemWalletClientStore";
	import { publicClientStore } from "$lib/stores/viemPublicClientStore";

	import MoonChef from "$src/lib/abis/MoonChef";
	// Viem

	// let isWalletClientReady = false;

	const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
	const walletConnectId = import.meta.env.VITE_PUBLIC_WALLETCONNECT_ID;

	onMount(async () => {
		walletClientStore.initializeWalletClient();
		publicClientStore.initializePublicClient();
		await walletClientStore.loadAddress();

		publicClientStore.getBalance($walletClientStore.address);
	});
</script>

<Navbar />

{#if $walletClientStore.isWalletClientReady}
	<p>Address is {$walletClientStore.address}</p>
{/if}
{#if $publicClientStore.isPublicClientReady}
	<p>Public Client is ready</p>
	<p>Balance is {$publicClientStore.balance} ETH</p>
{/if}

<slot />
