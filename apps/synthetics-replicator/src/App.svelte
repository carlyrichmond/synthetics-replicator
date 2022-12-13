<script lang='ts'>
	import 'iconify-icon';
	import Cart from './Cart.svelte';

	import HomeSplash from './HomeSplash.svelte';

	let src: string = '/replicator.png';

	let currentCartCount: number = 0;

	function updateCart() {
		currentCartCount+= 1;
	}
</script>

<header>
	<img id='replicator-logo' {src} alt='Star Trek Replicator'/>
	<h1>Replicatr</h1>
	<Cart {currentCartCount}/>
</header>
<main>
	<HomeSplash on:update-order={updateCart}></HomeSplash>
</main>

<style>

	header {
		display: flex;
		flex-direction: row;
		background-color: #454aa1;
		padding: 1.5rem;
		gap: 0.8rem;
		width: 100%;
		height: 6vh;
	}

	#replicator-logo {
		width: 4rem;
		height: 3.5rem;
	}

	h1 {
		color: #b0b4f5;
		font-family: 'Blanka';
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		margin: 0;
		margin-top: -0.25rem;
		padding: 0
	}

	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>