<script>
	import AnimatedActions from '$lib/components/animated-actions.svelte';
	import ApiLoading from '$lib/components/api-loading.svelte';
	import ApiResponses from '$lib/components/api-responses.svelte';
	import Validation from '$lib/components/validation.svelte';

	let { input, loading, responses, validation, action } = $props();
</script>

<main>
	{@render input()}
	{@render loading()}
	{@render responses()}
	{@render validation()}
	{@render action()}
</main>
