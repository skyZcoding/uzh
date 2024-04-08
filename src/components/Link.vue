<template>
    <router-link :to="link" :class="level == 'primary' ? 'bg-secondary text-white' : 'bg-white text-primary border-slate-400 border-[1px]'" 
        class="shadow-sm rounded-full font-medium px-4 py-3 text-center">
        {{ title }}
    </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    link: { type: String, required: true },
    level: String,
});

const { title, link, level } = props;
</script>