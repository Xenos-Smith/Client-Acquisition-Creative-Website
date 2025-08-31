<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Prop for dynamic aspect ratio (default 16:9)
  export let aspectRatio: number = 21 / 9; // Change to 21/9 for ultra-wide

  let videoSection: HTMLDivElement | null = null;
  let videoWrapper: HTMLDivElement | null = null;
  let video: HTMLIFrameElement | null = null;
  let button: HTMLAnchorElement | null = null;

  let isScrolling = false;
  let isButtonVisible = true; // Reactive variable to control button visibility
  
  export let scaleDuration: number = 1.5; // Scroll distance for scaling (0.5 = half viewport height)

  function animateVideo() {
    if (!videoSection || !video || !videoWrapper) {
      console.log('Missing elements:', { videoSection, videoWrapper, video });
      return;
    }

    const wrapperTop: number = videoWrapper.getBoundingClientRect().top;
    const innerHeight: number = window.innerHeight;
    const sectionTop: number = videoSection.getBoundingClientRect().top;
    const sectionBottom: number = videoSection.getBoundingClientRect().bottom;
    let scale: number;

    // Start scaling when videowrapper is sticky (top ≤ 0)
    if (wrapperTop <= 0) {
      const scrollSinceSticky: number = Math.max(0, innerHeight - sectionTop);
      const scalePixels = scaleDuration * innerHeight;
      scale = Math.min(1, 0.5 + (scrollSinceSticky / scalePixels) * (1 - 0.5));
    } else {
      scale = 0.5;
    }

    // Update button visibility based on videosection's position
    isButtonVisible = sectionTop < innerHeight && sectionBottom > 0;

    console.log({ wrapperTop, sectionTop, sectionBottom, innerHeight, scale, isButtonVisible });

    video.style.transform = `scale(${scale})`;

    // Continue animation if scrolling
    if (isScrolling) {
      requestAnimationFrame(animateVideo);
    }
  }

  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(animateVideo);
    }
  }

  onMount(() => {
    // Set CSS custom property for aspect ratio
    document.documentElement.style.setProperty('--aspect-ratio', aspectRatio.toString());

    console.log('Mounted:', { videoSection, videoWrapper, video, button });
    animateVideo(); // Initial scale and visibility check
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      isScrolling = false; // Stop RAF loop
    };
  });
</script>

<div class="relative min-h-[200vh] videosection flex justify-center z-[10] w-[99vw]" bind:this={videoSection}>
  <div class="videowrapper sticky top-0 w-full h-[100vh]" bind:this={videoWrapper}>
    <iframe
      class="absolute w-[calc(100vh*var(--aspect-ratio,1.777))] h-full object-cover will-change-transform z-0"
      bind:this={video}
      src="https://player.vimeo.com/video/VIDEO_ID"
      title="Video title"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!-- Animated ping elements -->
    <div class="absolute inset-0 mb-0">
    </div>
  </div>
  <!-- Button positioned at bottom center of videosection -->
  <a
    href="../../../offers/strategy-call"
    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-5 text-3xl font-black text-text-white rounded-none bg-accent hover:text-text-dark hover:bg-medium z-20"
    class:hidden={!isButtonVisible}
    bind:this={button}
  >
    <span class="italic w-full my-5 mx-30">
      BOOK FREE STRATEGY CALL
    </span>
  </a>
</div>

<style>
  .videosection {
    min-height: 200vh; /* Scrollable content */
    position: relative; /* Ensure absolute positioning is relative to this */
  }

  .videowrapper {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    position: sticky;
    top: 0;
    overflow: hidden; /* Crop overflowing width */
    display: flex;
    justify-content: center; /* Center iframe horizontally */
    align-items: center; /* Center vertically */
  }

  iframe {
    transform-origin: center center;
    transition: transform 0.2s ease; /* Smooth scaling */
  }

  /* Hide scrollbar */
  .videosection {
    scrollbar-width: none; /* Firefox */
  }

  .videosection::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
</style>