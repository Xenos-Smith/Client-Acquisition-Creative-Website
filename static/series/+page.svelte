<script lang="ts">
	import '../../app.css';
	import alienInvasion from '$lib/assets/series/alien_invasion.jpg';

    let form_id = $state("myzdpobr")

</script>


<!--Add icon here-->
<div class="flex flex-col">
    <form action="https://formspree.io/f/{form_id}" method="POST" class="flex flex-col text-sm justify-center items-left p-4 gap-4">
        <img src={alienInvasion} alt="alien invasion" class="w-full"/>
        <input type="text" name="name" placeholder="What's your name? e.g: Jonh Smith" class="h-20 border-0 bg-white" required>
        <input type="email" name="email" placeholder="Which email do I send it to?" class="h-20 border-0 bg-white" required>
        <!--<input type="tel" name="phone" placeholder="Phone" required>-->
        <button type="submit" class="cursor-pointer px-6 h-20 text-2xl font-black text-center inline-flex items-center text-white bg-accent rounded-lg hover:bg-medium hover:text-text-dark focus:ring-4 focus:outline-none focus:ring-medium">
            <p>EMAIL THE VIDEO SERIES</p>
        </button>
    </form>
</div>
<!--Use parameters and create styling-->