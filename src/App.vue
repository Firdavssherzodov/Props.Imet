<template>
  <div>
    <Imit
      title="Introduction to CSS"
      content="This is first content"
      @bostir="fetchData($event)"
    />
    <Imit
      title="What is 4 $Emit in Vue Js"
      content="This is second content"
      @bostir="fetchData($event)"
    />
    <Imit
      title="Understanding Currying"
      content="This is third content"
      @bostir="fetchData($event)"
    />
  </div>

  <div class="border mt-10">
    <h1 class="text-center py-3 font-bold text-3xl">Result : {{ result }}</h1>
  </div>
</template>

<script setup>
import Imit from "firdavs/Imit.vue";
import { ref } from "vue";

let result = ref("this is my default");

function fetchData(event) {
  result.value = event;
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
</style>
