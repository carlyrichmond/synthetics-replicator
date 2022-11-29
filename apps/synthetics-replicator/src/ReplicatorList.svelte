<script lang='ts'>
	let src: string = '/favicon.png';
    let count: number = 0;
    $: price = count * 1.5;

    function addToOrder(): void {
        count += 1;
    }
</script>

<p class='order-prompt'>Can we take your order?</p>
<p class='order-count'>{count} items in order</p>
<p class='order-total'>£{price.toFixed(2)}</p>
<img {src} alt='Svelte logo'>
<button on:click={addToOrder}>Add</button>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>