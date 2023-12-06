<script>
	import { web3Modal } from 'svelte-wagmi';

	import { defaultConfig } from 'svelte-wagmi';
	import { onMount } from 'svelte';
	import { connection } from 'svelte-wagmi';

	const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
	const walletConnectId = import.meta.env.VITE_PUBLIC_WALLETCONNECT_ID;

	let balance;
	let address;
	let formatedBalance;
	let isWalletConnected = false;
</script>

<div class="flex space-x-4 items-center">
	{#if isWalletConnected}
		{Number(formatedBalance).toFixed(3)} ETH
	{/if}
	<button class="btn" on:click={() => $web3Modal.openModal()}>Connect Wallet</button>
</div>
