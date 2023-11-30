<script lang="ts" setup>
import { Link } from './link/types'

const props = defineProps<{ link: Link, copyText?: string, copiedText?: string }>()
const justCopied = ref(false)
const url = useRequestURL()

function copyUrl () {
  navigator.clipboard.writeText(`${url.origin}/${props.link.id}`)
    .then(() => {
      justCopied.value = true
      setTimeout(() => { justCopied.value = false }, 1000)
    })
}
</script>
<template>
  <button @click="copyUrl" :class="{ [ 'text-green-600' ]: justCopied }">
    {{ justCopied ? copiedText ?? 'copied' : copyText ?? 'copy' }}
  </button>
</template>