<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import logotype from '$lib/assets/logotype.svg';
	import logotypepng from '$lib/assets/logotypeimg.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
<footer class="relative flex items-center justify-center overflow-hidden bg-medium">
	<div
		class="z-10 m-[50px] flex max-w-[900px] flex-col items-center justify-center gap-4 bg-white/30 p-[50px] backdrop-blur-lg"
	>
		<p class="text-base">
			Disclaimer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae pariatur
			quis voluptatem, dignissimos laborum necessitatibus assumenda. Eligendi, rerum a velit officia
			sunt, mollitia adipisci numquam culpa, voluptatum ratione in.
		</p>
		<p class="color-legal-white text-xs">© 2025 by Client Acquisition Creative LLC</p>
	</div>
	<div class="absolute mb-4 text-white">
		<img src={logo} alt="Logo" class="h-8xl w-8xl" />
	</div>
</footer>

<!--create general styling & others-->
