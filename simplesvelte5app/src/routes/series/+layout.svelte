<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	import logo from "$lib/assets/logo.svg";
	import logotype from "$lib/assets/logotype.svg";
	import logotypepng from "$lib/assets/logotypeimg.png";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<img src={logo} alt="Logo" class="absolute h-24 w-24 left-[50%] translate-x-[-50%]"/>
<div class="min-h-screen min-w-full flex flex-col justify-center items-center bg-soft">
	<div class="min-h-screen max-w-sm flex flex-col justify-center items-center">
		{@render children?.()}
	</div>
</div>

<!--create video series styling & others-->