<script>
	import Header from './Header.svelte';
	//import './styles.css';
</script>

<div class="app">
	<Header />

	
	<main>
		<slot />
	</main>

	<footer class="card-footer">
		<p>
			Desenvolvido por JP Softwares
		</p>
	</footer>
</div>

	<style>
		@import '../global.css';

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	footer p {
		font-size: 1rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 1rem 0;
		}
	}
</style>
