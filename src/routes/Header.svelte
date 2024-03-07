<script>
	import { page } from '$app/stores';
	//import logo from '$lib/images/jp_softwares_logo.png';
	import github from '$lib/images/github.svg';
</script>


{#if $page.url.pathname != '/'}
	<div class="divback">
		<a href="/">
			<button class="button">
				Voltar
			</button>
		</a>
	</div>
{/if}

<header class="card-header">

	<div class="page-name div-align-center"> <!-- class="corner" -->

		<h1 class="page-name">
			HUMANS
		</h1>
</header>

<style>
	* {
		--nav-height: 4em;
		--page-name-size: clamp(1.5rem, 2.5vw, 10rem);
	}

	header {
		display: flex;
		justify-content: center;
		height: var(--nav-height);
		padding: 0 1em;
		/*background: rgba(255, 255, 255, 0.7);*/
		/*box-shadow: 15px 15px 15px #0000000e;*/
	}

	div.page-name {
		height: 100%;
	}

	h1.page-name {
		font-size: var(--page-name-size);
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
	}

	.div-align-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.divback {
		height: var(--nav-height);
		display: flex;
		align-items: center;
		position: absolute;
		margin-left: 2rem;
	}
</style>
