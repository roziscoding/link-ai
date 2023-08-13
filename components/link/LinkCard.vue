<script lang="ts" setup>
import { Link } from "./types";

const props = defineProps<{ link: Link }>();

const url = computed(() => (props.link.rel ? props.link.url : `/${props.link.id}`));
</script>

<template>
  <a :href="url" target="_blank" class="bg-neutral-950 p-3 rounded w-full" :rel="link.rel">
    <img class="svg-img inline h-14 w-14" :src="`${link.icon}/d4d4d4`" alt="link icon" />
    <span class="inline text-white h-16 align-middle ml-4">{{ link.name }}</span>
  </a>
</template>
