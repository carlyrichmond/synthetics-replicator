<script lang='ts'>
	import { addImagePathToItem, MenuItem } from './models';
	import { menuItems } from './models';

	const items = menuItems.map((item: MenuItem) => {
			return addImagePathToItem(item);
		});
</script>

<!--<p class='order-prompt'>Can we take your order?</p>
<p class='order-count'>{count} items in order</p>
<p class='order-total'>£{price.toFixed(2)}</p>
<img {src} alt='Svelte logo'>
<button on:click={addToOrder}>Add</button>-->

<div class='item-list'>
	{#each items as item}
	<p>{item.name}</p>
	{/each}
</div>


<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	div.item-list {
		width: 100%;
		height: 90vh;
		background-image: url('/replicator-splash.jpg');
		opacity: 0.6;
		margin: 0;
		display: flex;
		flex-direction: column;
	}
</style>