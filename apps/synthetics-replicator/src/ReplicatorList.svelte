<script lang='ts'>
  import MenuItemCard from './MenuItemCard.svelte';
	import { addImagePathToItem, MenuItem } from './models';
	import { menuItems } from './models';

	const items = menuItems.map((item: MenuItem) => {
			return addImagePathToItem(item);
		});
</script>

<div class='menu'>
	<div class='item-list'>
		{#each items as item}
			<MenuItemCard menuItem={item} />
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