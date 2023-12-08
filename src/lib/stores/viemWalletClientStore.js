import { writable } from "svelte/store";
// Viem
import { createWalletClient, custom } from "viem";
import { base } from "viem/chains";

// Create a writable store
// const walletClientStore = writable(null);

const walletClientState = writable({
	client: null,
	isInitialized: false
});

function initializeWalletClient() {
	if (typeof window !== "undefined" && window.ethereum) {
		const client = createWalletClient({
			chain: base,
			transport: custom(window.ethereum)
		});

		walletClientState.set({ client, isInitialized: true });
	} else {
		// Handle the case where window or window.ethereum is not available
		console.log("Wallet provider (e.g., MetaMask) not found");
	}
}

// Export the store and the initialization function
export { walletClientState, initializeWalletClient };
