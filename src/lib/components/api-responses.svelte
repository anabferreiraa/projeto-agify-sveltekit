<script>
	let { name = 'Exemplo', age = 50, count = 3456 } = $props();
</script>

<div class="api-responses">
	<h2>Resultado para:</h2>
	<span class="api-response-name">{name}</span>
	<h2>A idade estimada é:</h2>
	<span class="api-response-age">{age}</span>
	<h2>Está estimativa foi baseada em:</h2>
	<span class="api-response-count">{count}</span>
</div>
