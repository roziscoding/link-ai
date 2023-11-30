<script lang="ts" setup>
import { Link } from "./types"

const props = defineProps<{ link: Link }>()
const emit = defineEmits<{
  (event: "refresh"): void;
  (event: "edit", link: Link): void
}>()

const confirmingDelete = ref(false)

const { status, execute: deleteLink, error } = useFetch(`/api/links/${props.link.id}`, {
  method: "DELETE",
  immediate: false,
  watch: false,
})

function deleteItem () {
  if (!confirmingDelete.value) {
    confirmingDelete.value = true
    return
  }

  confirmingDelete.value = false
  deleteLink().then(() => {
    emit("refresh")
  })
}

watch(
  () => status.value,
  (status) => {
    if (status === "error") {
      alert(error.value ?? "Something went wrong")
    }
  }
)
</script>

<template>
  <div class="bg-neutral-200 rounded p-3 text-black flex flex-row items-center">
    <div class="flex-none mr-3">
      <img class="w-12 h-12" :src="link.icon" :alt="link.name" />
    </div>
    <div class="flex-grow">
      <div>
        <h3 class="text-lg inline font-bold mr-1">{{ link.name }} <span class="text-sm">({{ link.id }})</span></h3>
        •
        <span :class="[
          'text-xs',
          'ml-1',
          'font-bold',
          'text-white',
          'rounded',
          'py-0.5',
          'px-1',
          'data-[listed=true]:bg-green-500',
          'data-[listed=false]:bg-red-500',
          'align-middle',
        ].join(' ')
          " :data-listed="link.listed">
          {{ link.listed ? "shown" : "hidden" }}
        </span>
      </div>
      <p class="text-sm text-neutral-600">{{ link.url }}</p>
    </div>
    <div class="flex-none">
      <copy-button class="text-sm mr-1" :link="link"></copy-button>
      <span>•</span>
      <button class="text-sm mr-1 ml-1" @click="$emit('edit', link)">edit</button>
      <span>•</span>
      <button :disabled="status === 'pending'"
        :class="[ 'text-sm', 'ml-1', 'data-[confirm=true]:text-red-500', 'disabled:text-zinc-500' ].join(' ')"
        :data-confirm="confirmingDelete" @click.prevent="deleteItem">
        {{ confirmingDelete ? "confirm delete" : "delete" }}
      </button>
    </div>
  </div>
</template>
