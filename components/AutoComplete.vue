<script lang="ts" setup>
import TextInput from "./TextInput.vue";

withDefaults(
  defineProps<{
    id: string;
    list: string[];
    label?: string;
    hint?: string;
    placeholder?: string;
    modelValue?: string;
    class?: string;
    clearable?: boolean;
  }>(),
  { modelValue: "" }
);

defineEmits(["update:modelValue", "clear"]);
</script>

<template>
  <div :class="class">
    <TextInput
      type="text"
      v-bind="$attrs"
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :modelValue="modelValue"
      :clearable="clearable"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      @clear="$emit('clear')"
      :list="`${id}-list`"
    />
    <datalist :id="`${id}-list`">
      <option v-for="item in list" :value="item" />
    </datalist>
  </div>
</template>
