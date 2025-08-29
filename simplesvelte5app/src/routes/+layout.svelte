<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import logo from "$lib/assets/logo.svg";
	import logotype from "$lib/assets/logotype.svg";
	import logotypepng from "$lib/assets/logotypeimg.png";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
<footer class="relative flex items-center justify-center bg-medium overflow-hidden">
	<div class="flex flex-col m-[50px] p-[50px] items-center justify-center bg-white/30 backdrop-blur-lg max-w-[900px] gap-4 z-10">
		<p class="text-base">Disclaimer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae pariatur quis voluptatem, dignissimos laborum necessitatibus assumenda. Eligendi, rerum a velit officia sunt, mollitia adipisci numquam culpa, voluptatum ratione in.</p>
		<p class="text-xs color-legal-white">© 2025 by Client Acquisition Creative LLC</p>
	</div>
	<div class="absolute text-white mb-4">
		<img src={logo} alt="Logo" class="h-8xl w-8xl" />
	</div>
</footer>

<!--create general styling & others-->