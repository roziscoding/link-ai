<script lang="ts" setup>
const { signIn } = useAuth();

signIn("github", { callbackUrl: "/admin" });

definePageMeta({
  auth: false,
});
</script>
<template></template>
