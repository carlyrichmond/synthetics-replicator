<script lang="ts">
	import ReplicatorList from "./ReplicatorList.svelte";

	let name: string = `<strong>Carly</strong>`
</script>

<main>
	<h1>Welcome {@html name}!</h1>
	<ReplicatorList/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
