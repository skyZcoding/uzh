<script setup lang="ts">
import JobCard from "../../components/JobCard.vue";
import { reactive } from "vue";

const jobs = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];
const state = reactive({
  tags: [
    { name: "Vue.js", selected: true },
    { name: "Fulltime", selected: true },
    { name: "Remote", selected: true },
  ],
});

function filterJobs(tag: any) {
  tag.selected = !tag.selected;
}
</script>

<template>
  <div class="pt-16 normal-spacing flex flex-col sm:flex-row">
    <div class="w-fit">
      <div class="w-[24rem]">
        <h3 class="font-semibold mb-2">Filter</h3>
        <div class="flex flex-row flex-wrap">
          <div
            v-for="tag in state.tags"
            :key="tag"
            class="px-2 py-[0.5px] bg-blue-500 bg-opacity-20 rounded-full flex flex-row items-center mr-2 mb-2 cursor-pointer"
            @click="filterJobs(tag)"
          >
            <div
              :class="tag.selected ? 'bg-blue-500' : 'bg-white'"
              class="rounded-full h-2 w-2 mr-2"
            ></div>
            <p>{{ tag.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-auto flex flex-col">
      <div class="flex flex-row justify-between mb-2">
        <h3 class="font-semibold">{{ jobs.length + " Jobs" }}</h3>
      </div>
      <div class="grid grid-col-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        <JobCard v-for="job in jobs" :key="job" />
      </div>
    </div>
  </div>
</template>
