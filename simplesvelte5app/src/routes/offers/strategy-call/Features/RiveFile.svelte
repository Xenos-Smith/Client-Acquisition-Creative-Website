<script>
  import * as rive from '@rive-app/canvas';
  import { onMount } from 'svelte';

  // Define props with runes
  let { src = '$lib/assets/strategy-call/roadmap.riv', autoplay = true, stateMachines = '', canvasId = 'rive-canvas' } = $props();

  // Reactive state for the canvas
  let canvasElement = $state();

  onMount(() => {
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

<canvas id={canvasId} bind:this={canvasElement} style="width: 100%; height: 100%;" ></canvas>