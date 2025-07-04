<script>
	let { action = 'starting' } = $props();

	const images = {
		starting: 'starting.png',
		typing: 'typing.webp',
		error: 'error.png',
		invalid: 'invalid.png',
		success: 'success.png'
	};

	let imageName = $state(images[action] || images.starting);
</script>

<div class="animated-actions">
	<img
		class="animated-action"
		src="/images/{imageName}"
		alt={`Animação para o estado: ${action}`}
	/>
</div>
