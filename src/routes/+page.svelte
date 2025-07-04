<script>
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	
	import AnimatedActions from '$lib/components/animated-actions.svelte';
	import ApiLoading from '$lib/components/api-loading.svelte';
	import ApiResponses from '$lib/components/api-responses.svelte';
	import Validation from '$lib/components/validation.svelte';
	import Main from '$lib/sections/main.svelte';

	let { data } = $props();
	let actionState = $state('starting');
	let inputValue = $state('');
	let debounce = null;
	
	$effect(() => {
		clearTimeout(debounce);
		
		if (inputValue === '') {
			actionState = 'starting';
		} else if (inputValue.trim() === '') {
			actionState = 'invalid';
		} else {
			actionState = 'typing';
			debounce = setTimeout(() => {
				actionState = 'success';
			}, 1000);
		}
	});
	
</script>

<svelte:head>
	<title>Projeto Agify</title>
	<meta
		name="description"
		content="Este é um projeto que utiliza a api agify.io para descobrir a idade de uma pessoa."
	/>
	<meta property="og:image" content="/images/thumb-sveltekit.webp" />
</svelte:head>

<Main>
	{#snippet input()}
		<div class="input-wrapper">
			<label for="name">Digite um nome</label>
			<input
				type="text"
				id="name"
				placeholder="Seu primeiro nome"
				bind:value={inputValue}
			/>
		</div>
	{/snippet}

	{#snippet loading()}
	{#if actionState === 'typing'}
		<ApiLoading loadingText="Buscando..." />
	{/if}
	{/snippet}

	{#snippet responses()}
	{#if actionState === 'success'}
		<ApiResponses name={data.ageData.name} age={data.ageData.age} count={data.ageData.count} />
	{/if}
	{/snippet}

	{#snippet validation()}
	{#if actionState === 'invalid'}
		<Validation validationMessage="Digite um nome válido e sem espaços" />
	{/if}
	{#if actionState === 'error'}
		<Validation validationMessage="Erro (nome do erro)" />
	{/if}
	{/snippet}

	{#snippet action()}
	{#if actionState === 'starting'}
		<AnimatedActions action="starting" />
	{:else if actionState === 'typing'}
		<AnimatedActions action="typing" />
	{:else if actionState === 'success'}
		<AnimatedActions action="success" />
	{:else if actionState === 'invalid'}
		<AnimatedActions action="invalid" />
	{:else if actionState === 'error'}
		<AnimatedActions action="error" />
	{/if}
	{/snippet}
</Main>
