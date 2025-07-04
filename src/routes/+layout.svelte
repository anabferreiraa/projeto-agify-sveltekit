<script>
	import Footer from '$lib/sections/footer.svelte';
	import Header from '$lib/sections/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="container">
	<Header />
	{@render children()}
	<Footer />
</div>
