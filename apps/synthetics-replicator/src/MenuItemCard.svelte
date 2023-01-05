<script lang='ts'>
	import 'iconify-icon';
    import { allergenIconMapping, MenuItem } from './models';

	export let menuItem: MenuItem;
</script>

<div class='menu-item-card' data-testid='menu-item-card'>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src={menuItem.imagePath} alt='Menu Item Image'/>
    <div class='menu-item-details'>
        <h2 title='{menuItem.name}'>{menuItem.name}</h2>
        <h4>£{menuItem.price}</h4>
        <div class='allergens'>
          <span class='allergens-label'>Allergens</span>
          <div data-testid='allergen-icon-collection' class='format-icons'>
                {#each menuItem.allergens || [] as allergen}
                    <iconify-icon icon='{allergenIconMapping[allergen]}' width='16' height='16'></iconify-icon>
                {/each}
                {#if !menuItem.allergens}
                    <span class='allergen-na-label'>N/A</span>
                {/if}
          </div>
        </div>
    </div>
</div>

<style>
    .menu-item-card {
        display: flex;
        flex-direction: column;
        width: fit-content;
        max-width: 14rem;
        height: fit-content;

        background-color: #454aa1;
        box-shadow: 1px 4px 8px 0 #b0b4f5;
        transition: 0.3s;

        margin: 0.5rem 1rem;
        padding: 1rem 1.5rem;
    }

    .menu-item-card:hover {
        box-shadow: 1px 8px 16px 0 #b0b4f5;
    }

    img {
        width: 100%;
        height: 12.5rem;

        margin: auto;
    } 

    .format-icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .menu-item-details {
        text-align: start;
        color: #b0b4f5;
    }

    h2 {
        margin-bottom: 0rem;
        color: #b0b4f5;
        font-size: large;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: clamp(160px, 1vw, 180px);
    }

    h4 {
        margin-top: 0rem;
        margin-bottom: 0rem;
        color: #b0b4f5;
        font-size: smaller;
    }

    .allergens-label {
        font-style: italic;
        font-size: small;
    }

    .allergen-na-label {
        font-size: small;
    }

</style>
