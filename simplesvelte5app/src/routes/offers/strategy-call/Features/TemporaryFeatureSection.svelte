<script lang="ts">
    import '/src/app.css';
    import { Heading, P, Mark } from 'flowbite-svelte';
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

<div>
    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <P class="text-text-dark text-xl max-w-screen-md text-center w-full">We'll cover...</P>
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full">
            Everything for you to grow.
        </Heading>
        <P class="text-text-dark text-xl max-w-screen-md text-center w-full mb-5">
            (Personalized for you)
        </P>
    </div>
    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <P class="text-md max-w-screen-md w-full">Yup, so don't get me wrong...</P>
        <P class="text-md max-w-screen-md w-full">We won't create an entire sales page during the call, for example. But we'll provide a roadmap and all the resources you need to execute it yourself.</P>
        <P class="text-md max-w-screen-md w-full">(Or you can opt for our performance offer—more on that later.)</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <P class="text-text-dark text-xl max-w-screen-md text-center w-full">And one of our headliners...</P>
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full">
            Instant Advice to Increase Conversions
        </Heading>
        <P class="text-text-dark text-xl max-w-screen-md text-center w-full mb-5">
            (Right after booking)
        </P>
        <P class="text-md max-w-screen-md w-full text-left">Well, not "instant" per se—you'll need to fill out a form sent after booking.</P>
        <P class="text-md max-w-screen-md w-full text-left">The form is comprehensive, but the questions help us prioritize your needs.</P>
        <P class="text-md max-w-screen-md w-full text-left">We created it to save time on the call and realized it could be a selling point.</P>
        <P class="text-md max-w-screen-md w-full text-left">We also provide actionable advice through short videos tailored to your problems.</P>
        <P class="text-md max-w-screen-md w-full text-left">Some issues can only be identified or resolved during the call—we're not magicians, we're client acquisition experts.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Content & Full Funnel Analysis
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">In the form, you'll provide links to your sales pages, opt-ins, and channels.</P>
        <P class="text-md max-w-screen-md w-full text-left">We'll rank them and offer personalized advice on improvements.</P>
        <P class="text-md max-w-screen-md w-full text-left">Some issues are only identified or resolved during the call—we're client acquisition experts, not magicians.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            We WILL Ask Questions (Duh)
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">We're not magicians. Like a doctor needs to ask questions to prescribe the right medication, we're the doctors of client acquisition.</P>
        <P class="text-md max-w-screen-md w-full text-left">Be ready for some questions!</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            We'll Recommend a Path to Your Goals
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">We'll create a roadmap with steps to get you from where you are to where you want to go.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <P class="text-text-dark text-xl max-w-screen-md text-center w-full">Here are some examples...</P>
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Auto-Research Setup
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Research is critical. We'll recommend forms and platforms to streamline your research process.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Content Optimization
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Content can be tough.</P>
        <P class="text-md max-w-screen-md w-full text-left">We'll rank your content from 1–5 and provide steps to improve it over time.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Make a Better Opt-In
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Failed opt-ins often aren't good enough. Our research helps us recommend opt-ins your audience will love—some ideas you might not expect!</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            High-Converting Email Marketing
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Email marketing works, but it can work better with the right approach.</P>
        <P class="text-md max-w-screen-md w-full text-left">It's not complicated—just a matter of knowing how to craft emails people love.</P>
        <P class="text-md max-w-screen-md w-full text-left">We'll teach you how.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            SMS Marketing? What's That?
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">It might sound spammy, but it's effective when done right.</P>
        <P class="text-md max-w-screen-md w-full text-left">This is our trump card—we'll show you what it is and how to do it well.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            A Sales Pages Checklist
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Our comprehensive checklist outlines the steps to create a high-performing sales page, saving you time and effort (based on personal experience).</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Loyalty Programs That Delight
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Loyalty programs might seem risky, but they can make you and your prospects happy. More details on the call—it's an easy win!</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Lead Nurturing
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">Tired of no-shows on calls? We have four methods to fix this—more details on the call.</P>
    </div>

    <div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
        <Heading tag="h1" class="text-5xl font-black max-w-screen-xl text-center w-full mb-5">
            Much, Much More...
        </Heading>
        <P class="text-md max-w-screen-md w-full text-left">A strategy call is dynamic—there are countless insights we can provide based on your input.</P>
        <P class="text-md max-w-screen-md w-full text-left">Like a medical diagnosis, we can't list everything in advance—it's tailored to you.</P>
        <P class="text-md max-w-screen-md w-full text-left">Expect plenty more surprises!</P>
    </div>

    <a
        href="/offers/strategy-call"
        class="sticky bottom-[0px] custom left-1/2 -translate-x-1/2 inline-flex items-center justify-center p-1 text-3xl font-black text-text-white bg-accent hover:text-text-dark hover:bg-medium z-20 rounded-t-[10px]"
    >
        <span class="italic w-full py-5 px-8">
            BOOK FREE STRATEGY CALL
        </span>
    </a>
</div>