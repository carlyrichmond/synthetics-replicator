<script lang='ts'>
	import 'iconify-icon';

	export let currentCartCount;
</script>

<div class='shopping-cart'>
	<iconify-icon class='cart-icon' icon='ic:round-shopping-basket' width='36' height='36' />
    <span class='badge badge-warning' data-testid='cart-count-label' id='cart-count-label'>{currentCartCount}</span>
</div>

<style>
	.shopping-cart {
		margin-left: auto;
		margin-top: 0.25rem;
		margin-right: 3rem;
	}

	.cart-icon {
		color: #b0b4f5;
	}

	#cart-count-label {
        font-size: 12px;
        background: #b0b4f5;
        color: #454aa1;
        padding: 0 5px;
        vertical-align: top;
        margin-left: -10px;
    }

    .badge {
        padding-left: 15px;
        padding-right: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
    }
</style>
