<template>
  <div class="w-1/4 m-auto">
    <h1 class="font-semibold text-2xl text-center">{{ props.title }}</h1>
    <p class="text-center py-2">{{ props.content }}</p>

    <Button label="Submit" class="border m-auto block my-2" @click="loadData()" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { defineProps, defineEmits } from "vue";
const emit = defineEmits('bostir');

function loadData() {
  emit('bostir',( props.content));
}

let props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>


<style lang="scss" scoped></style>
