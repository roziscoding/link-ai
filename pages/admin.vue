<script lang="ts" setup>
import { Link } from "components/link/types";
import LinkRow from "~/components/link/LinkRow.vue";
import NewLinkModal from "~/components/NewLinkModal.vue";

const { signOut, data } = useAuth();

function handleSignout() {
  signOut({ callbackUrl: "/" });
}

const { data: links, refresh } = useFetch("/api/links");
const showNew = ref(false);
const editing = ref<Link>();

async function handleSuccess() {
  showNew.value = false;
  editing.value = undefined;
  await refresh();
}

function edit(link: Link) {
  editing.value = link;
  showNew.value = true;
}
</script>

<template>
  <div class="w-10/12 h-5/6 bg-neutral-800 rounded m-10 p-3">
    <NewLinkModal :link="editing" v-if="showNew" @success="handleSuccess" @cancel="showNew = false" />
    <div class="flex align-middle items-center text-white">
      <div class="text-xl mb-2 flex-1">links dashboard</div>
      <button class="underline mr-2" @click="showNew = true">+ new link</button>
      <span>|</span>
      <button class="underline ml-2" @click="handleSignout">signout</button>
    </div>
    <hr class="mb-2" />
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
      <LinkRow @refresh="refresh" @edit="edit" v-for="link of links" :key="link.id" :link="link" />
    </div>
  </div>
</template>
