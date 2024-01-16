<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet">
</svelte:head>
<script lang='ts'>
	import { navigate, Router, Route } from 'svelte-routing';

	import 'iconify-icon';
	import Cart from './Cart.svelte';

	import HomeSplash from './HomeSplash.svelte';
	import ReplicatorList from './ReplicatorList.svelte';
	import LoginButton from './login/LoginButton.svelte';
	import LoginForm from './login/LoginForm.svelte';

	export let url = '';

	let src: string = '/replicator.png';
	let loggedInUser: string;
	let currentCartCount: number = 0;

	function updateCart() {
		currentCartCount+= 1;
	}

	function placeOrder() {
		navigate('/order', { replace: true });
	}
</script>

<header>
	<a href='/'>
		<img id='replicator-logo' {src} alt='Star Trek Replicator'/>
	</a>
	<a href='/'>
		<h1>Replicatr</h1>
	</a>

	<div class='header-buttons'>
		<LoginButton userFirstname={loggedInUser}/>
		<Cart {currentCartCount}/>
	</div>
</header>
<main>
	<Router url='{url}'>
		<Route path='/'>
			<HomeSplash on:place-order={placeOrder}></HomeSplash>
		</Route>
		<Route path='order'>
			<ReplicatorList on:increment-cart={updateCart}/>
		</Route>
		<Route path='login'>
			<LoginForm bind:userFirstname={loggedInUser}/>
		</Route>
	</Router>
</main>

<style>

	header {
		display: flex;
		flex-direction: row;
		align-content: space-between;

		background-color: #454aa1;
		padding: 1.5rem;
		gap: 0.8rem;
		width: 100%;
		height: 6vh;
	}

	main {
		/*background-image: url('/replicator-splash.jpg'); */
		background: linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%);
		/*background-image: linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% );
		background-image: linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(176, 180, 245, 1),  15%,rgba(68,36,164,1) 99.9%);*/
		height: auto;
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

	.header-buttons {
		display: flex;
		align-items: baseline;
		gap: 1rem;

		margin-left: auto;
	}
</style>