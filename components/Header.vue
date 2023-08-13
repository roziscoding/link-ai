<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
  <div class="flex flex-col items-center">
    <img class="aspect-square rounded-full h-28 xl:h-48" :src="config.avatarUrl" alt="Profile picture" />
    <h1 class="xl:text-3xl text-xl w-11/12 text-white text-center xl:mt-5">{{ config.title }}</h1>
    <p class="xl:text-2xl text-l w-11/12 text-gray-500 text-center">{{ config.subtitle }}</p>
  </div>
</template>
