<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Prop for dynamic aspect ratio (default 16:9)
  export let aspectRatio: number = 21 / 9; // Change to 21/9 for ultra-wide

  let videoSection: HTMLDivElement | null = null;
  let videoWrapper: HTMLDivElement | null = null;
  let video: HTMLIFrameElement | null = null;

  let isScrolling = false;
  
  export let scaleDuration: number = 2; // Scroll distance for scaling (0.5 = half viewport height)

  function animateVideo() {
    if (!videoSection || !video || !videoWrapper) {
      console.log('Missing elements:', { videoSection, videoWrapper, video });
      return;
    }

    const wrapperTop: number = videoWrapper.getBoundingClientRect().top;
    const innerHeight: number = window.innerHeight;
    const sectionTop: number = videoSection.getBoundingClientRect().top;
    let scale: number;

    // Start scaling when videowrapper is sticky (top ≤ 0)
    if (wrapperTop <= 0) {
      // Calculate scroll distance since wrapper became sticky
      const scrollSinceSticky: number = Math.max(0, innerHeight - sectionTop);
      const scalePixels = scaleDuration * innerHeight; // e.g., 0.5 * innerHeight
      scale = Math.min(1, 0.5 + (scrollSinceSticky / scalePixels) * (1 - 0.5)); // Scale from 0.5 to 1
    } else {
      scale = 0.5; // Before sticky, stay at 0.5
    }

    console.log({ wrapperTop, sectionTop, innerHeight, scale }); // Debug values

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

    console.log('Mounted:', { videoSection, videoWrapper, video });
    animateVideo(); // Initial scale
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      isScrolling = false; // Stop RAF loop
    };
  });
</script>

<div class="mt-[-15%] mb-[15%] videosection flex justify-center min-h-[200vh]" bind:this={videoSection}>
  <div class="videowrapper sticky top-[0px] w-full h-[100vh]" bind:this={videoWrapper}>
    <iframe
      class="absolute w-[calc(100vh*var(--aspect-ratio,1.777))] h-full object-cover will-change-transform"
      bind:this={video}
      src="https://player.vimeo.com/video/VIDEO_ID"
      title="Video title"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="absolute mt-[15%] mb-[-40%] translate-y-[-50%]">
      <a href="../../../offers/strategy-call" class="mt-5 inline-flex items-center justify-center p-5 text-5xl font-black text-text-white rounded-0 bg-accent hover:text-text-dark hover:bg-medium">                  
        <span class="italic w-full my-10 mx-70 z-10">
          BOOK FREE STRATEGY CALL
        </span>
      </a>
      <div class="absolute rounded-full border-2 border-medium inset-0 m-auto w-42 h-42 animate-ping z-[-1]"></div>
      <div class="absolute rounded-full border-2 border-medium inset-0 m-auto w-84 h-84 animate-ping z-[-1]"></div>
      <div class="absolute rounded-full border-2 border-medium inset-0 m-auto w-168 h-168 animate-ping z-[-1]"></div>
      <div class="absolute rounded-full border-2 border-medium inset-0 m-auto w-168 h-168 animate-ping z-[-1]"></div>      
    </div>    
  </div>
</div>

<style>
  .videosection {
    min-height: 200vh; /* Scrollable content */
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
</style>