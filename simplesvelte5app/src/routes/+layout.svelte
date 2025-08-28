<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<footer class="flex items-center justify-center bg-blue-900">
	<div class="flex flex-col m-[50px] p-[50px] items-center justify-center bg-white/30 backdrop-blur-lg max-w-[900px] gap-4">
		<p class="text-base">Disclaimer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae pariatur quis voluptatem, dignissimos laborum necessitatibus assumenda. Eligendi, rerum a velit officia sunt, mollitia adipisci numquam culpa, voluptatum ratione in.</p>
		<p class="text-xs">© 2025 by Client Acquisition Creative LLC</p>
	</div>
	<div class="absolute bottom-0 mb-4 text-white">
		<!--<img src={big_logo} alt="Logo" class="h-8 w-8" />-->
	</div>
</footer>

<!--create general styling & others-->