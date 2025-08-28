<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen min-w-full flex justify-center items-center">
	<div class="min-h-screen max-w-2xs flex flex-col justify-center items-center">
		{@render children?.()}
	</div>
</div>

<!--create video series styling & others-->