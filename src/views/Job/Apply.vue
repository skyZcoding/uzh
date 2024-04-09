<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({
  id: Number,
});

const { id } = toRefs(props);

console.log(id);
</script>

<template>
  <div class="flex normal-spacing justify-center items-center pt-16">
    <div class="w-full sm:w-1/2">
      <h1 class="text-4xl font-bold text-start">Bewerben</h1>
      <form class="mt-8">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="resume" class="block text-sm font-medium text-gray-700"
            >Resume</label
          >
          <input
            type="file"
            id="resume"
            name="resume"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label
            for="notes"
            class="block text-sm font-medium text-gray-700"
            >Bemerkungen</label
          >
          <textarea
            id="notes"
            name="notes"
            rows="4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          ></textarea>
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-secondary text-white duration-200 hover:bg-[#011e78] shadow-sm rounded-full font-medium px-4 py-3 text-center"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
