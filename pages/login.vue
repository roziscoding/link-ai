<script lang="ts" setup>
const { signIn } = useAuth();

signIn("github", { callbackUrl: "/admin" });
</script>
<template></template>
