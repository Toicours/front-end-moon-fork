import { writable } from "svelte/store";
// Viem
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { formatEther } from "viem";

function createPublicClientStore() {
	// Initial state of the store

	const transport = http("https://base-mainnet.g.alchemy.com/v2/-kOv8-44rAh5hSOh5Nu3cmjg4DxxLZhj");

	const { subscribe, set, update } = writable({
		publicClient: null,
		isPublicClientReady: false,
		balance: null,
		error: null
	});

	let currentState = {
		publicClient: null,
		isPublicClientReady: false,
		balance: null,
		error: null
	};

	// Update currentState whenever the store changes
	subscribe((state) => {
		currentState = state;
	});

	function initializePublicClient() {
		const client = createPublicClient({
			chain: base,
			transport
		});

		set({ publicClient: client, isPublicClientReady: true, balance: null, error: null });
	}

	function resetClient() {
		set({
			publicClient: null,
			isPublicClientReady: false,
			balance: null,
			error: null
		});
	}

	async function getBalance(address) {
		if (!currentState.isPublicClientReady) {
			console.error("Public client is not initialized");
			return;
		}
		try {
			// get balance, round it to 2 decimal places, and update the store
			const balance = parseFloat(
				formatEther(await currentState.publicClient.getBalance({ address }))
			).toFixed(2);
			update((state) => ({ ...state, balance }));
		} catch (error) {
			console.error("Error getting balance:", error);
			update((state) => ({ ...state, error }));
		}
	}

	return {
		subscribe,
		initializePublicClient,
		getBalance,
		resetClient
	};
}

export const publicClientStore = createPublicClientStore();
