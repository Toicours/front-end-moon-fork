import { writable } from "svelte/store";
// Viem
import { createWalletClient, custom } from "viem";
import { base } from "viem/chains";

function createWalletClientStore() {
	const { subscribe, set, update } = writable({
		walletClient: null,
		isWalletClientReady: false,
		error: null
	});

	let currentState = {
		walletClient: null,
		isWalletClientReady: false,
		error: null
	};

	subscribe((state) => {
		currentState = state;
	});

	function resetStore() {
		set({
			walletClient: null,
			isWalletClientReady: false,
			error: null
		});
	}

	function initializeWalletClient() {
		if (typeof window !== "undefined" && window.ethereum) {
			const client = createWalletClient({
				chain: base,
				transport: custom(window.ethereum)
			});
			update((state) => ({ ...state, walletClient: client, isWalletClientReady: true }));
		} else {
			// Handle the case where window or window.ethereum is not available
			update((state) => ({ ...state, error: "Wallet provider (e.g., MetaMask) not found" }));
		}
	}

	async function loadAddress() {
		if (currentState.walletClient) {
			try {
				const addresses = await currentState.walletClient.requestAddresses();

				if (addresses.length > 0) {
					// Update the store with the new address
					update((state) => ({ ...state, address: addresses[0] }));
				} else {
					console.error("No addresses returned");
				}
			} catch (error) {
				console.error("Error loading addresses:", error);
			}
		} else {
			console.error("Wallet client is not initialized");
		}
	}

	return {
		subscribe,
		resetStore,
		initializeWalletClient,
		loadAddress
	};
}

export const walletClientStore = createWalletClientStore();
