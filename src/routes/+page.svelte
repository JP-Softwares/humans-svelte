<script>
	
	import { enhance, applyAction } from '$app/forms';

	import { browser } from "$app/environment";
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let grupos = getGrupos();

	function getGrupos() {

		var response = Object();
		
		response = data.getGrupos;

		return response;
	}
</script>

<svelte:head>
	<title>Humans</title>
	<meta name="description" content="" />
</svelte:head>

<div>
	{#each grupos as grupo}
		<a href={"/messages/" + grupo.id}>
			<div>
				Grupo: {grupo.nome},
				Última interação: {grupo.ultimaInteracao}
			</div>
		</a>
	{/each}
</div>

<style>

</style>