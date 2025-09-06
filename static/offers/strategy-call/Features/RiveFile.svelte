<!--<script>
  import * as rive from '@rive-app/canvas';
  import { onMount } from 'svelte';

  // Define props with runes
  let { src = '/strategy-call/roadmap.riv', autoplay = true, stateMachines = 'State Machine 1', canvasId = 'rive-canvas' } = $props();

  // Reactive state for the canvas
  let canvasElement = $state();

  onMount(() => {
    // Ensure canvasElement exists before initializing
    if (!canvasElement) {
      console.error('Canvas element not found');
      return;
    }

    // Initialize Rive
    const r = new rive.Rive({
      src, // Path to .riv file
      canvas: canvasElement,
      autoplay,
      stateMachines,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    // Cleanup on component destruction
    return () => r.cleanup();
  });
</script>

<canvas id={canvasId} bind:this={canvasElement} class="w-[640px] h-[360px] z-[-1]"></canvas>