<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Reactive state for cursor positions and states
	const state = $state({
        smallX: 0,
        smallY: 0,
        largeX: 0,
        largeY: 0,
        isHovering: false,
        isClicked: false,
        isTextCursor: false,
        isInputHovering: false, // New state variable
    });

	// Smoothing variables for large cursor
	let velocityX = 0;
	let velocityY = 0;
	const smoothingFactor = 0.15; // Adjust for smoother or faster follow (0.1 = smoother, 0.3 = faster)

	// Handle mouse movement
	function handleMouseMove(event: MouseEvent) {
        state.smallX = event.clientX;
        state.smallY = event.clientY;

        const target = event.target as HTMLElement;

        const isTextElement = 
            target.tagName === 'INPUT' || 
            target.tagName === 'TEXTAREA' || 
            target.hasAttribute('contenteditable');

        // This is the key change. We check on every move if the target is an input.
        const isHoveringInput = target.tagName === 'INPUT'; 

        state.isTextCursor = isTextElement;
        state.isInputHovering = isHoveringInput; // Now, this correctly updates to true or false on every mouse move.
}
	// Smoothly update large cursor position
	function updateLargeCursor() {
		// Calculate difference between current large cursor and mouse position
		const dx = state.smallX - state.largeX;
		const dy = state.smallY - state.largeY;

		// Apply smoothing using lerp (linear interpolation)
		velocityX += dx * smoothingFactor;
		velocityY += dy * smoothingFactor;

		// Update large cursor position
		state.largeX += velocityX;
		state.largeY += velocityY;

		// Dampen velocity to prevent infinite drifting
		velocityX *= 0.35;
		velocityY *= 0.35;

		// Continue animation
		if (browser) {
			requestAnimationFrame(updateLargeCursor);
		}
	}

	// Handle hover states for .hoverable elements
	function handleMouseEnter(event: MouseEvent) {
		state.isHovering = true;
	}

	function handleMouseLeave(event: MouseEvent) {
		state.isHovering = false;
	}

	// Handle click animation
	function handleClick(event: MouseEvent) {
		state.isClicked = true;
		setTimeout(() => {
			state.isClicked = false;
		}, 200);
	}

	// Set up event listeners and animation loop
	onMount(() => {
		if (browser) {
			// Initialize large cursor position to match small cursor
			state.largeX = state.smallX;
			state.largeY = state.smallY;

			// Start animation loop for smooth large cursor
			requestAnimationFrame(updateLargeCursor);

			// Event listeners
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('click', handleClick);

			const hoverables = document.querySelectorAll('.hoverable') as NodeListOf<HTMLElement>;
			hoverables.forEach((el) => {
				el.addEventListener('mouseenter', handleMouseEnter as EventListener);
				el.addEventListener('mouseleave', handleMouseLeave as EventListener);
			});

			// Handle dynamically added hoverable elements
			const observer = new MutationObserver(() => {
				const hoverables = document.querySelectorAll('.hoverable') as NodeListOf<HTMLElement>;
				hoverables.forEach((el) => {
					el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
					el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
					el.addEventListener('mouseenter', handleMouseEnter as EventListener);
					el.addEventListener('mouseleave', handleMouseLeave as EventListener);
				});
			});
			observer.observe(document.body, { childList: true, subtree: true });

			// Cleanup
			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
				window.removeEventListener('click', handleClick);
				hoverables.forEach((el) => {
					el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
					el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
				});
				observer.disconnect();
			};
		}
	});
</script>

<!-- Small cursor (dot, follows mouse directly) -->
<div
	class="cursor fixed w-2 h-2 rounded-full bg-black z-[10000] translate-x-[-50%] translate-y-[-50%] pointer-events-none"
	class:cursor-hover={state.isHovering}
	class:cursor-clicked={state.isClicked}
	class:cursor-text={state.isTextCursor}
	style="transform: translate({state.smallX}px, {state.smallY}px);"
></div>

<!-- Large cursor (smoothed, 10x larger) -->
<div
    class="cursor fixed w-10 h-10 rounded-full border-2 border-black bg-transparent z-[9999] translate-x-[-50%] translate-y-[-50%] pointer-events-none"
    class:cursor-hover={state.isHovering}
    class:cursor-clicked={state.isClicked}
    class:cursor-text={state.isTextCursor}
    class:cursor-input-hover={state.isInputHovering} style="transform: translate({state.largeX}px, {state.largeY}px);"
></div>