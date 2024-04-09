<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    id: Number,
})

const { id } = toRefs(props);

console.log(id.value);
</script>

<template>
    
</template>