<script>
	import Router from "./components/index.svelte";
	let title = "SVELTE" ;
</script>

<main class="w-full flex justify-center flex-col text-center">
	<h1>{title}</h1>
	<Router/>
</main>
<style type="text/scss" global>
	@import 'css/index';
</style>
