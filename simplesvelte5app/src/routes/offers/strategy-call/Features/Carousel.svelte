<script lang="ts">
  import RiveFile from './RiveFile.svelte';
  import { onMount } from 'svelte';

  // Track the active item index
  let activeIndex = $state(0);

  // List of carousel item IDs for visibility toggling
  const carouselItemIds = [
    'carousel-item-1',
    'carousel-item-2',
    'carousel-item-3',
    'carousel-item-4',
    'carousel-item-5',
    'carousel-item-6',
    'carousel-item-7',
    'carousel-item-8',
    'carousel-item-9',
    'carousel-item-10',
    'carousel-item-11',
    'carousel-item-12',
    'carousel-item-13',
    'carousel-item-14',
    'carousel-item-15',
    'carousel-item-16',
    'carousel-item-17',
    'carousel-item-18',
    'carousel-item-19',
  ];

  let carousel_index: number;
  function animateCarousel() {
    
  }

  onMount(() => {
    const carousel = document.getElementById('scroll-carousel');

    // Handle scroll events to update active item
    carousel.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        const scrollTop = carousel.scrollTop;
        const itemHeight = carousel.offsetHeight; // Each item is 100vh
        const newIndex = Math.round(scrollTop / itemHeight);
        activeIndex = Math.max(0, Math.min(newIndex, carouselItemIds.length - 1));
      }, 100); // Debounce scroll events
    });

    // Toggle visibility based on activeIndex
    $effect(() => {
      carouselItemIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.toggle('hidden', index !== activeIndex);
          element.classList.toggle('block', index === activeIndex);
        }
      });
    });

    return () => {
      clearTimeout(isScrolling);
    };
  });
</script>

<div id="scroll-carousel" class="absolute inset-0 w-[50vw] h-[100vh] z-[-1] overflow-y-auto snap-y snap-mandatory" data-carousel="static">
  <div class="relative h-full">
    <div id="carousel-item-1" class="hidden duration-700 ease-in-out snap-start" data-carousel-item="active" style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/roadmap.riv" canvasId="rive-canvas-1" />
      </div>
    </div>
    <div id="carousel-item-2" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <!-- Placeholder path; update with actual .riv file -->
        <RiveFile src="/strategy-call/placeholder.riv" canvasId="rive-canvas-2" />
      </div>
    </div>
    <div id="carousel-item-3" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/research_&_pools.riv" canvasId="rive-canvas-3" />
      </div>
    </div>
    <div id="carousel-item-4" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/upsells,_downsells,_cross-sells.riv" canvasId="rive-canvas-4" />
      </div>
    </div>
    <div id="carousel-item-5" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/organic_content.riv" canvasId="rive-canvas-5" />
      </div>
    </div>
    <div id="carousel-item-6" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/opt-in.riv" canvasId="rive-canvas-6" />
      </div>
    </div>
    <div id="carousel-item-7" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/email_1.riv" canvasId="rive-canvas-7" />
      </div>
    </div>
    <div id="carousel-item-8" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/sms.riv" canvasId="rive-canvas-8" />
      </div>
    </div>
    <div id="carousel-item-9" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/sales_page.riv" canvasId="rive-canvas-9" />
      </div>
    </div>
    <div id="carousel-item-10" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/lead_nurture.riv" canvasId="rive-canvas-10" />
      </div>
    </div>
    <div id="carousel-item-11" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <div style="width: 100%; height: 100%;">
        <RiveFile src="/strategy-call/retention.riv" canvasId="rive-canvas-11" />
      </div>
    </div>
    <div id="carousel-item-12" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-13" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-14" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-15" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-16" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-17" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-18" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
    <div id="carousel-item-19" class="hidden duration-700 ease-in-out snap-start" data-carousel-item style="height: 100vh;">
      <!-- Empty placeholder -->
    </div>
  </div>
</div>

<style>
  #scroll-carousel {
    scroll-behavior: smooth;
  }
  .snap-y {
    scroll-snap-type: y mandatory;
  }
  .snap-start {
    scroll-snap-align: start;
  }
</style>