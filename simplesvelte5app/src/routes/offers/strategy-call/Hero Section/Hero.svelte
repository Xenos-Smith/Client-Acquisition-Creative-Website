<script lang="ts">
  import { Heading, P, Mark } from "flowbite-svelte";
  import CustomVideo from './CustomVideo.svelte'; // Adjust path as needed

  import logo from '$lib/assets/logo.svg';
  import logotype from '$lib/assets/logotype.svg';
  import logotypepng from '$lib/assets/logotypeimg.png';
</script>

<div class="relative flex justify-center items-center w-full">
  <img src={logo} alt="Logo" class="h-20 w-20 absolute translate-y-[50%]" />
</div>
<div class="w-full flex flex-col justify-center items-center">
  <div class="max-w-screen-xl flex flex-col justify-center items-center gap-5 my-30">
    <P class="text-center text-text-dark text-xl">By an agency that just opened...</P>
    <Heading tag="h1" class="items-center text-center text-5xl font-black">
      <Mark class="bg-medium text-accent p-3">“Book-&-Grow”</Mark> 30-min “filled-to-the-brim” marketing advice: <Mark class="bg-transparent italic text-accent p-3 z-[-10]">A personal trainer’s guide to <span class="underline uppercase">stability</span> and <span class="underline uppercase">growth.</span></Mark>
    </Heading>        
    <P class="text-center text-text-dark text-xl">Pure marketing tactics personally for you - all the way through.</P>
    <div class="w-full flex justify-center">  
      <a
        href="#"
        class="bottom-4 inline-flex items-center justify-center p-5 text-3xl font-black text-text-white rounded-none bg-accent hover:text-text-dark hover:bg-medium z-20"
      >
        <span class="italic w-full my-5 mx-30">
          BOOK FREE STRATEGY CALL
        </span>
      </a>
    </div>
    <!--<CustomVideo />-->
    <div class="flex h-3xl gap-3">
      <svg viewBox="0 0 284 211" width="47.3333333333" height="52.7535.1666666667" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.5371 0L0 211H227.463L284 0H56.5371Z" fill="#0D3B66"/>
        <path d="M56.5371 0L0 211H227.463L284 0H56.5371Z" fill="#0D3B66"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M159.596 40L165.491 18H181.596L159.596 40Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M165.491 18L159.596 40V18H165.491Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M118 193L123.761 171.5V193H118Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M123.761 171.5L118 193H108L123.761 171.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4908 105.5L51.1141 92.0035L74.4908 105.5L45.398 113.295L47.4908 105.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M210.5 105.5H236.509L233.019 118.501L210.5 105.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M236.509 105.5H210.5L238.525 97.9907L236.509 105.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M132 105.502H152L162.5 193H142.5L132 105.502Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M152 105.501H132L103.5 18L152 105.501Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M103.5 18L132 105.502L83.0098 18H103.5Z" fill="white"/>
      </svg> 
      <P class="text-center text-text-dark text-3xl">We only have one spot. We plan to close this on July 27th.</P> 
    </div>
  </div>
</div>