<script lang="ts">
	import '../../../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-full flex flex-col justify-center items-center">
	<div class="max-w-screen-xl w-full flex flex-col justify-center items-center gap-10 mt-20 mb-20">
	{@render children?.()}
	</div>
</div>

<!--create video series styling & others-->