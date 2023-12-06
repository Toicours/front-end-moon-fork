<script>
	import WalletConnect from './WalletConnect.svelte';
</script>

<nav class="bg-gray-800 text-white p-4">
	<div class="flex justify-between items-center">
		<!-- Left-aligned items -->
		<div class="flex space-x-4 items-center">
			<a href="/swap">Swap</a>
			<a href="/liquidty">Liquidity</a>
			<a href="/farms">Farms</a>
		</div>
		<!-- Right-aligned item -->
		<WalletConnect />
	</div>
</nav>
