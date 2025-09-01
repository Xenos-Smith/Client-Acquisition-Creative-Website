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

    const riveInstance = new rive.Rive({
        src: "$lib/assets/strategy-call/roadmap.riv",
        // OR the path to a discoverable and public Rive asset
        // src: '/public/example.riv',
        canvas: document.getElementById("canvas"),
        autoplay,
        // artboard: "Artboard", // Optional. If not supplied the default is selected
        stateMachines,
        canvasId,
        onLoad: () => {
          riveInstance.resizeDrawingSurfaceToCanvas();
        },
      });

    // Cleanup on component destruction
    return () => r.cleanup();
  });
</script>

<canvas id={canvasId} bind:this={canvasElement} style="width: 100%; height: 100%;" ></canvas>