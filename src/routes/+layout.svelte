<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import logotype from '$lib/assets/logotype.svg';
	import logotypepng from '$lib/assets/logotypeimg.png';
	import CustomCursor from './CustomCursor.svelte';

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-fit w-fit overscroll-none"></div>

<CustomCursor />
{@render children?.()}
<footer class="relative flex items-center justify-center overflow-hidden bg-medium">
	<div
		class="z-10 m-[50px] flex max-w-[900px] flex-col items-center justify-center gap-4 bg-white/30 p-[50px] backdrop-blur-lg"
	>
		<p class="text-base">
			The business advice on this website is for general informational purposes only and is not a substitute for professional consultation. We strive for accuracy but make no guarantees regarding the completeness, reliability, or suitability of the information for your specific circumstances. Any actions or inaction based on this advice are at your own risk, and we are not liable for any resulting loss or damage. This site may link to external websites we do not control, and we are not responsible for their content or availability. For more details, please review our Terms and Conditions, Privacy Policy, Cookie Policy, Accessibility Statement, and <a href="https://www.termsfeed.com/live/f85975b3-6778-4e23-9017-0d5bdc023ce3">Disclaimer Policy</a>.
		</p>
		<p class="color-legal-white text-xs">© 2025 by Client Acquisition Creative LLC</p>
	</div>
	<div class="absolute mb-4 text-white">
		<img src={logo} alt="Logo" class="h-8xl w-8xl" />
	</div>
</footer>

<!--create general styling & others-->
