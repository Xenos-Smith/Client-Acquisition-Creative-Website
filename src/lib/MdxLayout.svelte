<script>
  // Props for frontmatter (e.g., title, date)
  let { metadata = $state({}) } = $props();
</script>

<div class="w-full max-w-3xl mx-auto p-4">
  {#if metadata.title}
    <h1 class="text-4xl font-bold mb-6">{metadata.title}</h1>
  {/if}
  <div class="prose prose-lg max-w-none">
    <slot /> <!-- Render MDX content here -->
  </div>
</div>

<style lang="postcss">
  :global(.prose h1) {
    @apply text-3xl font-bold mb-4;
  }
  :global(.prose h2) {
    @apply text-2xl font-semibold mb-3;
  }
  :global(.prose p) {
    @apply my-2 text-gray-700;
  }
  :global(.prose ul) {
    @apply list-disc list-inside my-2;
  }
  :global(.prose ol) {
    @apply list-decimal list-inside my-2;
  }
  :global(.prose a) {
    @apply text-blue-600 hover:underline;
  }
  :global(.prose code) {
    @apply bg-gray-100 dark:bg-gray-800 rounded-md p-1 text-sm;
  }
  :global(.prose img) {
    @apply max-w-full h-auto rounded-lg my-2;
  }
</style>