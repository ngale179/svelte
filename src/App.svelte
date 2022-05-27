<script>
	import Router from "./components/index.svelte";
	let title = "SVELTE" ;
</script>

<main>
	<h1>{title}</h1>
	<Router/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
