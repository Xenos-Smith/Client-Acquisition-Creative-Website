<script lang="ts">
	import '../../../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	// Removed unused imports (logotype, logotypepng)
	
	let { children } = $props();
	
	// Reactive state for menu visibility
	let isMenuOpen = $state(false);
	
	// Toggle function with logging
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		console.log('element has been toggled');
		if (isMenuOpen) {
			console.log('element has been expanded');
		} else {
			console.log('element has been collapsed');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="bg-soft border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src={logo} class="h-8" alt="Flowbite Logo" />
		</a>
		<button
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded={isMenuOpen}
			onclick={toggleMenu}
		>
			<span class="sr-only">Open main menu</span>
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
			</svg>
		</button>
		<div class="{isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-soft dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li>
					<a
						href="../series/0-start-here"
						class="block py-2 px-3 text-text-dark rounded-sm md:bg-transparent md:text-text-dark dark:text-text-dark md:dark:text-text-dark hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-500"
						aria-current="page">Start Here</a
					>
				</li>
				<li>
					<a
						href="../series/1-business-model"
						class="block py-2 px-3 text-text-dark rounded-sm md:bg-transparent md:text-text-dark dark:text-text-dark md:dark:text-text-dark hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-500"
						aria-current="page">Business Models</a
					>
				</li>
				<li>
					<a
						href="../series/2-getting-leads"
						class="block py-2 px-3 text-text-dark rounded-sm md:bg-transparent md:text-text-dark dark:text-text-dark md:dark:text-text-dark hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-500"
						aria-current="page">Getting Leads</a
					>
				</li>
				<li>
					<a
						href="../series/3-converting-leads"
						class="block py-2 px-3 text-text-dark rounded-sm md:bg-medium md:text-text-dark dark:text-text-dark md:dark:text-text-dark"
						aria-current="page">Converting Leads</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="w-full flex flex-col justify-center items-center">
	<div class="max-w-screen-xl w-full flex flex-col justify-center items-center gap-10 mt-20 mb-20">
	{@render children?.()}
	</div>
</div>


<!--create video series styling & others-->