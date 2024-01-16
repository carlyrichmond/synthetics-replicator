<script lang='ts'>
	import 'iconify-icon';
    import { navigate } from 'svelte-routing';

	export let userFirstname;
	$: isLoggedIn = userFirstname?.length > 0;

    function goToLogin() {
		navigate('/login', { replace: true });
	}
</script>
	
<button hidden='{isLoggedIn}' aria-hidden='{isLoggedIn}' 
	data-testid='account-button' class='account-button' on:click={goToLogin}>
	<iconify-icon class='user-icon' icon='mdi:account' width='36' height='36' />
	{ isLoggedIn ? `Welcome ${userFirstname}!` : 'Login'}
</button>

<style>
	.account-button {
		height: 3rem;
		width: 8rem;
		border-color: #b0b4f5;
		color: #b0b4f5;
		background-color: #454aa1;

        font-size: 16px;
        text-align: center;
        
        display: flex;
        align-items: center;
        justify-content: center;
	}

    .account-button:focus {
		background-color: #2229a1;
	}

	.user-icon {
		color: #b0b4f5;
	}
</style>
