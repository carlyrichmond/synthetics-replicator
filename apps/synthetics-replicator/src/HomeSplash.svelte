<script lang='ts'>
	import { createEventDispatcher } from 'svelte';

	let src: string = '/replicator-splash.jpg';

	const dispatch = createEventDispatcher();

	function onOrderClick() {
		dispatch('place-order');
	}
</script>

<div class='splash'>
	<p data-testid='order-prompt'>To seek out new food and new cuisines. 
		<br/> To boldly eat what no one has eaten before!</p>
		<div class='buttons'>
			<button class='order-button' data-testid='order-button' on:click={onOrderClick}>Order Now!</button>
			<a href='https://twitter.com/CarlyLRichmond'>
				<iconify-icon class='twitter-button' data-testid='twitter-nav' icon="mdi:twitter" width="36" height="36"></iconify-icon>
			</a>
			<a href='https://github.com/carlyrichmond/synthetics-replicator'>
				<iconify-icon class='github-button' data-testid='github-nav' icon="uiw:github" width="36" height="36"></iconify-icon>
			</a>
		</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');

	div.splash {
		width: 100%;
		height: 90vh;
		background-image: url('/replicator-splash.jpg');
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	p {
		color: white;
		font-family: 'Teko';
		text-align: justify;
		font-size: 4.5rem;
		margin: 0;
		padding: 4rem 4rem 1rem 4rem;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		margin-left: 5rem;
	}

	.order-button {
		height: 3rem;
		width: 8rem;
		border-color: #b0b4f5;
		color: #b0b4f5;
		background-color: #454aa1;
	}

	.order-button:focus {
		background-color: #2229a1;
	}

	.twitter-button, .github-button {
		color: #b0b4f5;
	}
</style>