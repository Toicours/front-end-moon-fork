<script>
	import SwapCardAmount from "./SwapCardAmount.svelte";
	import SettingsWheel from "./SettingsWheel.svelte";
</script>

<div class="mx-auto my-8 p-6 bg-blue-violet-950 text-white rounded-lg shadow-lg w-full max-w-md">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-xl font-bold">Swap</h2>
		<SettingsWheel />
	</div>

	<div class="mb-4">
		<!-- Token input group for ETH -->
		<div class="flex justify-between items-center mb-3">
			<div class="flex items-center space-x-2">
				<!-- ETH Icon -->
				<span>ETH</span>
			</div>
			<span class="text-sm">Balance: 0.11739</span>
		</div>
		<SwapCardAmount />
	</div>

	<div class="flex justify-center my-4">
		<!-- Swap direction icon -->
	</div>

	<div class="mb-4">
		<!-- Token input group for MOON -->
		<div class="flex justify-between items-center mb-3">
			<div class="flex items-center space-x-2">
				<!-- MOON Icon -->
				<span>MOON</span>
			</div>
			<span class="text-sm">Balance: 0</span>
		</div>
		<SwapCardAmount />
	</div>

	<div class="mb-4">
		<label for="slippage" class="block mb-2 text-sm">Slippage Tolerance</label>
		<input
			id="slippage"
			type="text"
			class="w-full bg-blue-900 p-2 rounded text-white focus:outline-none"
			placeholder="1%"
		/>
	</div>

	<button class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
		Enter an amount
	</button>
</div>
