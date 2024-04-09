<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import Link from './Link.vue';

const props = defineProps({
    title: String,
    description: String,
    image: String,
    link: Object,
    reverse: Boolean,
})

const { title, description, image, link, reverse } = toRefs(props);
</script>

<template>
    <div class="w-full flex flex-col-reverse" :class="[reverse ? 'md:flex-row-reverse' : 'md:flex-row ']" v-bind="attributes">
        <div class="flex flex-col justify-center items-start" :class="[reverse ? 'md:ml-10' : 'md:mr-10']">
            <h2 class="mb-4">{{ title }}</h2>
            <p class="whitespace-pre-wrap">{{ description }}</p>
            <Link level="primary" :link="link.link" :title="link.title" class="mt-4" v-if="link != null" />
        </div>
        <div class="md:flex items-center">
            <img 
            :src="image" class="rounded-md" />
        </div>
    </div>
</template>