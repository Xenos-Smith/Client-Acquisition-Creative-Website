<!--<script>
    import { marked } from 'marked';
    import sanitizeHtml from 'sanitize-html';

    // Declare props with $props rune
    let { markdownContent = $state('') } = $props();

    // Convert Markdown to HTML and sanitize
    let sanitizedContent = $derived(
        sanitizeHtml(marked.parse(markdownContent), {
        allowedTags: ['h1', 'h2', 'h3', 'p', 'b', 'i', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'img', 'code', 'pre'],
        allowedAttributes: {
            a: ['href', 'target', 'rel'],
            img: ['src', 'alt'],
            '*': ['class']
        },
        allowedClasses: {
            '*': ['prose', 'prose-lg', 'text-3xl', 'text-2xl', 'font-bold', 'font-semibold', 'my-2', 'list-disc', 'list-decimal', 'list-inside', 'text-blue-600', 'hover:underline', 'max-w-full', 'h-auto', 'rounded-lg']
        }
        })
    );
</script>

<div class="w-full max-w-3xl mx-auto p-4">
    {#if sanitizedContent}
        <div class="prose prose-lg max-w-none">{@html sanitizedContent}</div>
    {/if}
</div>