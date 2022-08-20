<script>
	import { page } from '$app/stores';
	import '../global.css';
	import 'ress/dist/ress.min.css';
</script>

<svelte:head>
	<title>Shipwreck - Error</title>
	<meta name="og:title" content="Shipwreck - Error" />
</svelte:head>

<main>
	<div class="overlay">
		<h1>{$page.status}</h1>
		<h2>{$page.error.message}</h2>
	</div>
</main>

<style>
	.overlay {
		border-radius: 10px 0%;
		background-color: rgba(0, 0, 0, 0.3);
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	main h2 {
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-all;
	}
</style>
