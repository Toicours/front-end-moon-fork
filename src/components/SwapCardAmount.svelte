<script>
	function validateNumber(event) {
		// This will replace any non-digit characters with an empty string
		event.target.value = event.target.value.replace(/\D/g, '');
	}
</script>

<div class="flex items-center justify-between bg-blue-900 p-2 rounded">
	<input
		type="number"
		min="0"
		class="bg-transparent text-white focus:outline-none"
		placeholder="0.0"
		on:input={validateNumber}
	/>
	<button class="text-sm text-blue-300">MAX</button>
</div>
