<script lang="ts" setup>
onMounted(() => {
  const { signOut } = useAuth();
  return signOut({ callbackUrl: "/" });
});
</script>
<template>
  <div class="flex flex-1 justify-center items-center h-full w-full">
    <h1 class="text-4xl text-white">You have been signed out</h1>
  </div>
</template>
