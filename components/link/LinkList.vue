<script lang="ts" setup>
import LinkCard from "./LinkCard.vue";

const { data: links } = useFetch("/api/links");
</script>
<template>
  <div :class="['w-11/12', 'xl:w-6/12', 'text-lg', 'rounded-lg', 'gap-3', 'grid', 'grid-cols-1', 'xl:grid-cols-2']">
    <LinkCard v-for="link in links" :key="link.id" :link="link" />
  </div>
</template>
