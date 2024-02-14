<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
<div class="flex flex-col items-center p-5">
    <img class="aspect-square rounded-full h-28 xl:h-48" :src="config.avatarUrl" alt="Profile picture" />
    <h1 class="xl:text-3xl text-xl w-11/12 text-white font-bold text-center xl:mt-5">{{ config.title }}</h1>
    <p class="xl:text-lg text-sm w-11/12 font-bold text-white text-center">{{ config.subtitle }}</p>
  </div>
</template>
