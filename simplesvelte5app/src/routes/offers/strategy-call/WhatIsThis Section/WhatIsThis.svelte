<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  //import RiveCanvas from "@rive-app/svelte";

  // Define the source of your Rive animation
  //const riveSrc = "$lib/assets/your-animation.riv"; // Adjust to your file path or URL
</script>

<div class="w-full h-fit flex justify-center gap-4 items-center mb-20 flex-col">
  <P class="text-center text-text-dark text-text-dark text-xl max-w-screen-md">Basically...</P>
  <Heading tag="h1" class="items-center text-center text-5xl font-black max-w-screen-xl">
    Your marketing success blueprint.
  </Heading>
  <P class="text-center text-text-dark text-xl max-w-screen-md">
    Pure marketing tactics personally for you - all the way through.
  </P>
  <!-- Add Rive animation -->
  <!--<div class="w-full max-w-screen-md h-64"> Adjust height/width as needed
    <RiveCanvas src={riveSrc} /> -->
</div>