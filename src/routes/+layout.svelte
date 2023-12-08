<script>
	import { onMount } from "svelte";
	import "../app.css";
	import Navbar from "$src/components/Navbar.svelte";

	import { walletClientState, initializeWalletClient } from "$lib/stores/viemWalletClientStore";
	import { publicClientState, initializePublicClient } from "$lib/stores/viemPublicClientStore";

	import MoonChef from "$src/lib/abis/MoonChef";
	let address;
	let blockNumber;

	// const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
	// const walletConnectId = import.meta.env.VITE_PUBLIC_WALLETCONNECT_ID;

	onMount(async () => {
		initializePublicClient();
		initializeWalletClient();
	});

	$: if ($walletClientState.isInitialized == true) {
		const walletClient = $walletClientState.client;
		loadAddress(walletClient);
	}

	$: if ($publicClientState.isInitialized == true) {
		const publicClient = $publicClientState.client;
		getBlockNumber(publicClient);
	}

	async function loadAddress(_walletClient) {
		if ($walletClientState.isInitialized) {
			try {
				address = await _walletClient.requestAddresses();
			} catch (error) {
				console.error("Error loading addresses:", error);
			}
		} else {
			console.error("Wallet client is not initialized");
		}
	}

	async function getBlockNumber(publicClient_) {
		if ($publicClientState.isInitialized) {
			try {
				blockNumber = await publicClient_.getBlockNumber();
			} catch (error) {
				console.error("Error getting block number:", error);
			}
		} else {
			console.error("Public client is not initialized");
		}
	}
</script>

<Navbar />

<p>{address}</p>
<p>{blockNumber}</p>

<slot />
