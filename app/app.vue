<!-- <script setup lang="ts">
useHead({
  title: 'Studio V1 - Shopify Partners',
  meta: [{ name: 'description', content: 'Add description here' }],
});

if (import.meta.server) {
  // These meta tags will only be added during server-side rendering
  useSeoMeta({
    title: 'Studio V1 - Shopify Partners',
    ogTitle: 'Studio V1 - Shopify Partners',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
}

const dynamicTitle = ref('Studio V1 - Shopify Partners');
// Only use reactive meta tags outside the condition when necessary
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
});
</script> -->

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
