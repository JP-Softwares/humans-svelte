<script>
	
	import { enhance, applyAction } from '$app/forms';

	import { browser } from "$app/environment";
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let grupos = getGrupos();

	function getGrupos() {

		var response = Object();
		
		response = data.grupos;

		return response;
	}
</script>

<svelte:head>
	<title>Humans</title>
	<meta name="description" content="" />
</svelte:head>

<div>
	<div class="group-list">
		{#each grupos as grupo}
			<a href={"/groups/" + grupo.id}>
				<div class="card card-group">
					<div>
						<p class="title">
							{grupo.nome}
						</p>
					</div>
					
					<div>
						
						<p class="card-group-text">
							Última interação: {new Date(grupo.ultimaInteracao).toLocaleDateString("pt-br") + " " + new Date(grupo.ultimaInteracao).toLocaleTimeString("pt-br")}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.group-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		width: 100%;
		border-radius: 1rem;
		min-height: 5rem;
	}

	.card-group:hover {
		background-color: #f4f0f0;
	}

	.card-group-text {
		color: #000;
		font-size: 1.5rem;
	}
</style>