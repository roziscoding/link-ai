<script lang="ts" setup>
import { AsyncDataRequestStatus } from "nuxt/dist/app/composables/asyncData";
import AutoComplete from "./AutoComplete.vue";
import TextInput from "./TextInput.vue";
import { Link, iconSlugs } from "./link/types";

const props = defineProps<{
  link?: Link;
}>();

function extractIconSlug(icon?: string) {
  if (!icon) return "";
  return new URL(icon).pathname.split("/").pop()?.split(".")[0];
}

const name = ref(props.link?.name ?? "");
const url = ref(props.link?.url ?? "");
const id = ref(props.link?.id ?? "");
const icon = ref(extractIconSlug(props.link?.icon));
const listed = ref(props.link?.listed ?? false);
const rel = ref(props.link?.rel ?? "");

const emit = defineEmits(["cancel", "success"]);

const {
  status,
  execute: create,
  error,
} = useFetch("/api/links", {
  immediate: false,
  watch: false,
  method: "POST",
  body: {
    id,
    name,
    url,
    listed,
    icon,
    rel,
  },
});

const statusIs = (...s: Array<AsyncDataRequestStatus>) => s.includes(status.value);
const missingFields = computed(() => [name, url, id, icon].some((field) => !field.value));
const form = ref<HTMLFormElement>();
watch(
  () => status.value,
  (newStatus) => {
    if (newStatus === "success") {
      form.value?.reset();
      emit("success");
    }
    if (newStatus === "error") {
      alert(error.value);
    }
  }
);
</script>

<template>
  <div class="fixed left-0 top-0 h-full w-full bg-neutral-800 flex justify-center items-center bg-opacity-50">
    <div class="w-1/5 bg-neutral-100 rounded shadow-black drop-shadow-xl p-5">
      <form ref="form">
        <TextInput
          class="mb-3"
          type="text"
          label="link title"
          hint="displayed on the linktree page"
          placeholder="Birdsite"
          required
          name="link_title"
          id="link_title"
          clearable
          data-1p-ignore
          v-model="name"
          @clear="name = ''"
          :readonly="statusIs('pending')"
        />
        <TextInput
          class="mb-3"
          type="url"
          label="link url"
          hint="full url to be shortened"
          placeholder="https://birdsite.com/myusername"
          required
          name="link_url"
          id="link_url"
          clearable
          data-1p-ignore
          v-model="url"
          @clear="url = ''"
          :readonly="statusIs('pending')"
        />
        <TextInput
          class="mb-3"
          type="text"
          label="link id"
          hint="short version of the link"
          placeholder="birdsite"
          data-1p-ignore
          required
          name="link_id"
          id="link_id"
          clearable
          v-model="id"
          @clear="id = ''"
          :readonly="statusIs('pending')"
        />
        <TextInput
          class="mb-3"
          type="text"
          label="link rel"
          hint="optional rel attribute for the link"
          placeholder="me"
          data-1p-ignore
          name="link_rel"
          id="link_rel"
          clearable
          v-model="rel"
          @clear="rel = ''"
          :readonly="statusIs('pending')"
        />
        <AutoComplete
          class="mb-3"
          type="text"
          label="icon"
          hint="icon from simple-icons"
          placeholder="mastodon"
          required
          name="link_icon"
          id="link_icon"
          clearable
          v-model="icon"
          @clear="icon = ''"
          :readonly="statusIs('pending')"
          :list="iconSlugs"
        />
        <div class="flex justify-center items-center">
          <input type="checkbox" name="listed" id="listed" v-model="listed" class="accent-green-600" />
          <label for="listed" class="ml-1">listed</label>
        </div>
        <div class="flex justify-between">
          <button class="underline" type="reset" @click="$emit('cancel')" :disabled="statusIs('pending')">
            cancel
          </button>
          <button
            class="underline disabled:cursor-not-allowed disabled:opacity-50"
            type="submit"
            @click.prevent="create()"
            :disabled="statusIs('pending') || missingFields"
          >
            {{ link ? "save" : "create" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
