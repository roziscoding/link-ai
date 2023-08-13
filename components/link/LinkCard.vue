<script lang="ts" setup>
import { Link } from "./types";

defineProps<{ link: Link }>();
</script>

<template>
  <a :href="`/${link.id}`" target="_blank" class="bg-neutral-950 p-3 rounded w-full">
    <img class="svg-img inline h-14 w-14" :src="`${link.icon}/d4d4d4`" alt="link icon" />
    <span class="inline text-white h-16 align-middle ml-4">{{ link.name }}</span>
  </a>
</template>
