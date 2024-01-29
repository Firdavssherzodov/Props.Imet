<template>
  <div
    class="w-[500px] border h-[400px] mx-auto bg-slate-300 rounded-2xl mt-20"
  >
    <input type="text" v-model="firdavs" />
    <h1 class="font-semibold text-center py-32 via-neutral-400">
      <slot name="title" :pTitle="firdavs"></slot>
    </h1>

    <h1 class="font-semibold text-center">
      <slot> shomirza</slot>
    </h1>
  </div>

  <div
    class="card flex justify-content-center w-[20%] m-auto my-32 border rounded-[0.4rem]"
  >
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      class="w-full md:w-14rem"
      :loading="false"
    >
      <template #dropdownicon>
        <i :class="[props.icon]"> </i>
      </template>
    </Dropdown>

    <!-- <h1>{{ props.ism }}</h1> -->
  </div>
  <div class="m-auto  w-[200px] flex justify-around">
    <span :class="checked !== true ? 'text-black ' : 'text-gray-400'"
      >option</span
    >
    <InputSwitch class="text-gray-300" v-model="checked" />
    <span :class="checked == true ? 'text-black ' : 'text-gray-400'"
      >compotion</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Dropdown from "primevue/dropdown";
import { ref } from "vue";

let checked = ref(false);
import InputSwitch from "primevue/inputswitch";

const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

let firdavs = ref();
let selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<style scoped>
:deep .p-dropdown-panel::-webkit-scrollbar {
  width: 5px;
}

:deep InputSwitch {
  color: aliceblue;
}
</style>
