<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps, toRefs } from "vue";

const props = defineProps({
  title: String,
  description: String,
  place: String,
  salary: String,
  type: String,
  tags: Array<string>,
});

const { title, description, place, salary, type, tags } = toRefs(props);

const router = useRouter();

function goToJobDetail() {
  router.push("/job/1");
}
</script>

<template>
  <div
    @click="goToJobDetail()"
    class="rounded-lg bg-white px-4 py-2 flex flex-col justify-between w-[20rem] shadow-lg cursor-pointer group duration-200 hover:border-secondary border-white border-2"
  >
    <div class="flex flex-col">
      <p class="mb-4 text-gray-500">{{ place }}</p>
      <h2 class="mb-2 group-hover:text-secondary duration-200">{{ title }}</h2>
      <p class="text-gray-600">{{ description }}</p>

      <div class="flex flex-row flex-wrap gap-4 mt-2">
        <div
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-[0.5px] bg-slate-400 bg-opacity-20 rounded-full flex flex-row items-center"
        >
          <p>{{ tag }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-row gap-4 mt-2">
      <div class="flex flex-row items-center">
        <img src="/icons/work.svg" class="h-4 w-4 mr-2" />
        <p class="text-sm">{{ type }}</p>
      </div>
      <div class="flex flex-row items-center">
        <img src="/icons/dollar.svg" class="h-4 w-4 mr-2" />
        <p class="text-sm">{{ salary }}</p>
      </div>
    </div>
  </div>
</template>
