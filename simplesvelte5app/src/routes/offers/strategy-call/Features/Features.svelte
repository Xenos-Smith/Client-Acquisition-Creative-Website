<script lang="ts">
    import '$lib/../app.css';
    import { Heading, P, Mark } from "flowbite-svelte";
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Carousel from './Carousel.svelte';

    // Define runes
    let scrollY = $state(0); //the current y axis scroll
    let offsetTop = $state(0); //the ofset from the top of the mother container
    let innerHeight = $state(0); // The height of the container for the content
    let sectionRef: HTMLElement | null = null; // Changed from HTMLSectionElement to HTMLElement

    // Derived progress (in vh units scrolled into the section)
    let progress = $derived(Math.max(0, (scrollY - offsetTop) / innerHeight)); //the progress towards the end of the mother container

    // Update on mount and scroll
    onMount(() => {
        if (sectionRef) {
            offsetTop = sectionRef.offsetTop;
        }
        innerHeight = window.innerHeight;

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const handleResize = () => {
            innerHeight = window.innerHeight;
            if (sectionRef) {
                offsetTop = sectionRef.offsetTop;
            }
        };

        // Set initial values
        scrollY = window.scrollY;

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<style>

    /* Pseudo-elements for round-out (concave) effect at bottom corners */
    .custom:before,
    .custom:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 10px;
        height: 10px;
        background: var(--color-accent); /* Match bg-accent */
        z-index: 1; /* Below circles */
    }

    .custom:before {
        left: -10px;
    }

    .custom:after {
        right: -10px;
    }

    .custom span:before,
    .custom span:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background: var(--background, #fff); /* Match page background */
        border-radius: 10px; /* Circular */
        z-index: 2; /* Above squares */
    }

    .custom span:before {
        left: -20px;
    }

    .custom span:after {
        right: -20px;
    }

    /* Update pseudo-element colors on hover to match hover:bg-medium */
    .custom:hover:before,
    .custom:hover:after {
        background: var(--color-medium, #cbd5e0); /* Match hover:bg-medium */
    }

    /* Circles remain the same to match background */
    .custom:hover span:before,
    .custom:hover span:after {
        background: var(--background, #fff); /* Keep matching page background */
    }
</style>

<section bind:this={sectionRef} class="w-[96vw] h-[1600vh] m-10">
    <div class="sticky h-[100vh] top-0 z-10">
        <div class="relative flex justify-right">  
            <Carousel />
        </div>
        <div class="p-8 pt-18 text-left justify-left items-top flex flex-col">
            {#if progress < 1}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if} 
            <a
                href="../../../offers/strategy-call"
                class="rounded-t-[10px] custom absolute bottom-[-43px] left-1/2 transform -translate-x-1/2 translate-[-50%] inline-flex items-center justify-center p-1 text-3xl font-black text-text-white rounded-none bg-accent hover:text-text-dark hover:bg-medium z-20"
            >
                <span class="italic w-full py-5 px-30 p-4">
                BOOK FREE STRATEGY CALL
                </span>
            </a>
            {#if progress >= 1 && progress < 2}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Temporary text.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 2 && progress < 3}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 3 && progress < 4}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 4 && progress < 5}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 5 && progress < 6}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 6 && progress < 7}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 7 && progress < 8}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 8 && progress < 9}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 9 && progress < 10}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 10 && progress < 11}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 11 && progress < 12}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 12 && progress < 13}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 13 && progress < 14}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 14 && progress < 15}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
            {#if progress >= 15}
            <div
                class="absolute max-w-screen-xl z-10 flex flex-col gap-15"
                transition:fly={{ y: 50, duration: 300, opacity: 0, easing: cubicOut }}
            >
                <div>
                    <P class="text-text-dark text-xl max-w-screen-md">We'll cover...</P>
                    <Heading tag="h1" class="text-5xl font-black max-w-screen-xl">
                        Everything for you to grow.
                    </Heading>
                    <P class="text-text-dark text-xl max-w-screen-md">
                        (Personally for you)
                    </P>
                </div>
                <P class="text-md max-w-screen-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, earum molestias quasi nulla accusantium, illum tenetur quas, pariatur aperiam sapiente beatae unde sed. Distinctio rerum, ab alias nam magnam cupiditate.</P>
            </div>
            {/if}
        </div>
    </div>
</section>-->