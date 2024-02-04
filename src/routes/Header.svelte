<script>
	import { page } from '$app/stores';
	//import logo from '$lib/images/jp_softwares_logo.png';
	import github from '$lib/images/github.svg';
</script>

<header class="card-header">


	<div class="page-name div-align-center"> <!-- class="corner" -->
		<h1 class="page-name">
			HUMANS
		</h1>
		
		<!--
			<figure class="image is-32x32">
				<img src={logo} alt="JP Softwares" />
			</figure>
		-->
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/JP-Softwares/humans-svelte">
				<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	* {
		--nav-height: 4em;
		--page-name-size: clamp(1.5rem, 2.5vw, 10rem);
	}

	header {
		display: flex;
		justify-content: space-between;
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

	.corner/*, figure*/ {
		width: 3em;
		height: 100%;
	}

	.corner a/*, figure*/ {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		height: 100%;
		margin-left: - var(--page-name-size);;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		/*background: var(--background);*/
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/*
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: var(--size);
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}*/

	li[aria-current='page']::after {
		--size: 1px;
		content: '';
		width: 100%;
		height: 0;
		position: absolute;
		bottom: 0;
		border: var(--size) solid #242222;
	}

	li a {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		margin: 0 clamp(0rem, 0.5vw, 10rem);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5em;
		color: var(--color-text);
		font-size: clamp(1rem, 1.5vw, 5rem);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
