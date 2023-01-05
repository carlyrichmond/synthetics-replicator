<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
  	
	import MenuItemCard from './MenuItemCard.svelte';
	import { addImagePathToItem, menuItems, MenuItem } from './models';

	const items = menuItems.map((item: MenuItem) => {
			return addImagePathToItem(item);
		});
	
	const dispatchAddToCart = createEventDispatcher();

    function addItemToCart() {
        dispatchAddToCart('increment-cart');
    }
</script>

<div class='menu'>
	<div class='item-list'>
		{#each items as item}
			<MenuItemCard menuItem={item} on:add-item={addItemToCart}/>
		{/each}
	</div>
</div>

<style>

	div.menu {
		width: 100%;
	}

	div.item-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		
		justify-content: center;
	}
</style>