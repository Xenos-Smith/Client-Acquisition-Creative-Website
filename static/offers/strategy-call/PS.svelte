<script lang="ts">
    import '$lib/../app.css';
    import { Heading, P, Mark } from "flowbite-svelte";
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

<div class="w-full h-fit flex justify-center gap-4 items-center flex-col pt-10 ">
    <Heading tag="h1" class="text-text-dark text-[200px] font-black max-w-screen-xl text-center w-full">
        P.S
    </Heading>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">Ahhhh! Welcome.. bet u're one of those who skip to the end...</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">Listen chocolate cookie: this is free and we wont sell you</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">We have one spot.. and because it's performance based... we don't know when we'll be available again</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">There high demand so we don't do that, now, what's THIS call about? Welp... it's everything you need:</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">We'll give out a tool after the call that will find where you could increase CVR along with how to increase it in videos we record.</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">When we get to the call, we WILL ask some questions BUT they will allow us to know what to do, we need to diagnoze your funnel for the right medicine after all...</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">Lastly, we'll give you a step-by-step roadmap from where you are from where you wanna go... with how to get there</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">We'll give you resources... and only then we'll ask "would you like to have a look at our offer?"</P>
    <P class="text-text-dark text-md max-w-screen-md w-full text-left">If the answer is yes, we'll probably book another call, if no, we'll tell you to enjoy our email list.</P>
    <a
        href="https://calendly.com/goncalogoncalves/strategy-call"
        class="sticky bottom-[0px] custom left-1/2 -translate-x-1/2 inline-flex items-center justify-center p-1 text-3xl font-black text-text-white bg-accent hover:text-text-dark hover:bg-medium z-20 rounded-t-[10px]  w-full max-w-screen-md"
        target="_blank" rel="noopener noreferrer"
    >
        <span class="italic w-full py-5 text-center">
            BOOK FREE STRATEGY CALL
        </span>
    </a>
</div>