<script lang='ts'>
	import 'iconify-icon';
    import { navigate } from 'svelte-routing';

    let username: string  = '';
    let password: string = '';

    export let userFirstname: string;

    $: isAbleToSubmit = username.length > 0 && password.length > 0;

    function onSubmit(): void {
        if (!isAbleToSubmit) {
            return;
        }

        userFirstname = transformUsername(username);
        navigate('/order', { replace: true });
	}

    function transformUsername(username: string): string {
        const remainingFirstname = username.slice(1).split('@')[0];
        const firstLetter = username.charAt(0).toUpperCase();

        return firstLetter + remainingFirstname;
    }
</script>

<div>
    <form data-testid='login-form'>
        <h2 id='form-header'>Log in</h2>
        <label for='username-input'>Username</label>
        <input type='text' id='username-input' data-testid='username-input'
            class='username-input' bind:value={username}/>

        <label for='password-input'>Password</label>
        <input type='password' id='password-input' data-testid='password-input'
            class='password-input' bind:value={password}/>

        <button data-testid='login-button' aria-disabled='{!isAbleToSubmit}'
            disabled='{!isAbleToSubmit}' on:click={onSubmit}>Login</button>
    </form>
</div>

<style>
    div {
        width: 100%;
		height: 90vh;

        display: flex;
        align-items: center;
    }

	form {
        display: flex;
        flex-direction: column;

        padding: 2rem 3rem;
        width: 25rem;
        margin: auto;

        background-color: rgba(69, 74, 161, 0.8);
        box-shadow: 1px 4px 8px 0 #b0b4f5;
        transition: 0.3s;
    }

    h2 {
        color: #b0b4f5;
        font-family: 'Teko';
        font-size: 3rem;
    }

    label {
        color: #b0b4f5;
        
        font-size: 1.25rem;
        font-weight: bold;
        text-align: left;

        margin-bottom: 1rem;
    }

    input {
        margin-bottom: 1.5rem;
    }
</style>
