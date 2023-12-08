import { writable } from "svelte/store";
// Viem
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

// Create a writable store
const publicClientState = writable({ client: null, isInitialized: false });

// Function to initialize the public client
function initializePublicClient() {
	// Configuration options for the public client

	const config = {
		chain: base,
		transport: http("https://base-mainnet.g.alchemy.com/v2/-kOv8-44rAh5hSOh5Nu3cmjg4DxxLZhj")
	};

	// Create and set the public client
	const client = createPublicClient(config);
	publicClientState.set({ client, isInitialized: true });
}

// Export the store and the initialization function
export { publicClientState, initializePublicClient };
