<script>
    // Import video data (simulating a database)
    export let data; // Provided by SvelteKit's load function

    // Sample video data array (replace with your actual database or API call)
    const videos = [
        {
        id: "business-model-problems",
        title: "Got Biz Model Problems?",
        videoUrl: "https://youtube.com/embed/vxpeKhbeLm0",
        resources: [
            { name: "Alex's Stuff", url: "https://www.acquisition.com/training/money/context" },
            { name: "Funnel Example", url: "https://www.figma.com/board/lY9SsSUuycjujEbiVKhks4/Example-Funnel?node-id=0-1&t=ft8EyS6fRXfKNNZg-1" },
            { name: "Video Script", url: "/pdfs/scripts/biz-model-problems.pdf" },
        ],
        },
        {
        id: "getting-more-affiliates",
        title: "Getting Affiliates...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Script + Sequences", url: "/pdfs/scripts/getting-affiliates.pdf" },
        ],
        },
        {
        id: "getting-more-leads-per-month",
        title: "Getting More Leads Per Month",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Got Biz Vid", url: "/Trainings/tool-videos/business-model-problems" },
            { name: "Video Script", url: "/pdfs/scripts/monthly-leads.pdf" },
        ],
        },
        {
        id: "increase-lead-magnet-conversions",
        title: "Increasing Lead Magnet Conversions...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Video Script", url: "/pdfs/scripts/lead-magnet-cvr.pdf" },
        ],
        },
        {
        id: "why-you-should-have-a-post-opt-in-sale",
        title: "Why You Should Have a Post Opt-In Sale...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Got Biz Vid", url: "/Trainings/tool-videos/business-model-problems" },
            { name: "Video Script", url: "/pdfs/scripts/sale-after-optin.pdf" },
        ],
        },
        {
        id: "email-marketing-problems",
        title: "Email Marketing Problems...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Pieces Vid", url: "/Trainings/funnel-pieces-video" },
            { name: "Video Script", url: "/pdfs/scripts/email-problems.pdf" },
        ],
        },
        {
        id: "sales-page-problems",
        title: "Sales Page Problems?",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Sales Page Guide", url: "/pdfs/scripts/sales-page-checklist.pdf" },
            { name: "Video Script", url: "/pdfs/scripts/sales-page.pdf" },
        ],
        },
        {
        id: "decreasing-email-warmup-unsubscribe-percentage",
        title: "Decreasing Email Warmup Unsubscribe Percentage...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "+Sequences", url: "/Trainings/funnel-pieces-video" },
            { name: "Video Script", url: "/pdfs/scripts/email-unsub.pdf" },
        ],
        },
        {
        id: "sms-marketing-problems",
        title: "SMS Marketing Problems...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "+Sequences", url: "/Trainings/funnel-pieces-video" },
            { name: "Video Script", url: "/pdfs/scripts/sms-marketing.pdf" },
        ],
        },
        {
        id: "increasing-call-show-up-rate",
        title: "Increasing Call Show Up Rate...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "+Sequences", url: "/Trainings/funnel-pieces-video" },
            { name: "Video Script", url: "/pdfs/scripts/show-ups.pdf" },
        ],
        },
        {
        id: "increasing-close-rate",
        title: "Increasing Close Rate...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Video Script", url: "/pdfs/scripts/close-rates.pdf" },
        ],
        },
        {
        id: "increasing-prospect-retention",
        title: "Increasing Prospect Retention...",
        videoUrl: "https://youtube.com/embed/anotherVideoId",
        resources: [
            { name: "Got Biz Vid", url: "/Trainings/tool-videos/business-model-problems" },
            { name: "Video Script", url: "/pdfs/scripts/prospect-retention.pdf" },
        ],
        },
    ];

    // Find the video based on videoId from the route
    const video = videos.find((v) => v.id === data.videoId) || videos[0]; // Fallback to first video if not found
</script>

<!-- Entire page content -->
<h1 class="text-5xl font-bold text-text-dark">{video.title}</h1>
<div class="video-container relative w-full max-w-4xl mx-auto mb-6 rounded-3xl overflow-hidden">
  <iframe
    title={video.title}
    class="absolute top-0 left-0 w-full h-full"
    src={video.videoUrl}
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
<div class="w-full container grid justify-items-stretch grid-flow-col grid-rows-2 gap-4">
  {#each video.resources as resource}
    <a
      href={resource.url}
      class="flex justify-center bg-medium p-3 text-xl font-bold"
    >
      {resource.name}
    </a>
  {/each}
</div>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>