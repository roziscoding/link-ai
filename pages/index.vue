<script setup lang="ts">
import Header from "~/components/Header.vue";
import LinkList from "~/components/link/LinkList.vue";

const config = useRuntimeConfig();

useSeoMeta({
  title: config.linkTreePageTitle,
  description: config.subtitle,
  ogTitle: config.linkTreePageTitle,
  ogDescription: config.subtitle,
  ogImage: config.avatarUrl,
});

useHead({
  htmlAttrs: {
    lang: config.htmlLang ?? "pt",
  },
});
</script>

<template>
  <Header class="mt-5 xl:mt-10 2xl:mt-20" />
  <LinkList :class="['mt-5', 'mb-5', 'xl:mt-10', '2xl:p-5']" />
</template>
