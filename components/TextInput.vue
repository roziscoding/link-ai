<script lang="ts" setup>
withDefaults(
  defineProps<{
    type: string;
    label?: string;
    hint?: string;
    placeholder?: string;
    modelValue?: string;
    class?: string;
    clearable?: boolean;
    required?: boolean;
  }>(),
  { modelValue: "" }
);

const emit = defineEmits(["update:modelValue", "clear"]);
const input = ref<HTMLFormElement>();

const dirty = ref(false);

const clear = () => {
  emit("clear");
  dirty.value = false;
  const reset = input.value?.reset;
  if (reset) reset();
};
</script>
<template>
  <div :class="class">
    <div class="flex items-center">
      <label class="text-sm mr-1" for="link_title" v-if="label">{{ label }}</label>
      <span v-if="label && hint">•</span>
      <span class="text-xs text-gray-500 ml-1" v-if="hint">{{ hint }}</span>
      <span class="flex-1 text-xs text-neutral-500 mt-1 text-right w-full" v-if="clearable" @click="clear">
        clear
      </span>
    </div>
    <input
      ref="input"
      class="placeholder:text-xs invalid:border-red-500 border rounded w-full p-0.5"
      v-bind="$attrs"
      :required="required && dirty"
      :placeholder="placeholder"
      :value="modelValue"
      :type="type"
      @focus="dirty = true"
      @input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>
