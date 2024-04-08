<template>
    <div class="pt-16 normal-spacing flex flex-col justify-center items-center">
        <h1 class="mb-2 text-center">Dein nächster Job</h1>
        <p class="text-center">Finde dein ideal Job während deinem Studium an der Universität Zürich</p>
        <div class="flex flex-row mt-2 gap-6">
            <Link title="Wer sind wir" link="/about" level="primary" class="w-[8rem]" />
            <Link title="Kontakt" link="/contact" level="secondary" class="w-[8rem]" />
        </div>
    </div>

    <div class="pt-16 flex flex-col md:flex-row normal-spacing gap-6">
        <div class="md:w-1/2 w-full">
            <h2>Unsere Mission</h2>
            <p>Wir helfen dir, den idealen Job während deinem Studium an der Universität Zürich zu finden.</p>
        </div>
        <div class="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(fact, index) in facts" :key="index">
                <div class="flex flex-col items-start">
                    <img :src="fact.icon" class="h-16" />
                    <h3>{{ fact.title }}</h3>
                    <p>{{ fact.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-8 bg-slate-100">
        <div class="pt-8 pb-8 normal-spacing">

        </div>
    </div>
</template>

<script setup lang="ts">
import Link from "../components/Link.vue";

const facts = [
    {
        title: "Teamwork",
        description: "Wir arbeiten in einem jungen und dynamischen Team",
        icon: "/icons/teamwork.svg"
    },
    {
        title: "Flexibilität",
        description: "Wir bieten flexible Arbeitszeiten",
        icon: "/icons/flexibility.svg"
    },
    {
        title: "Wissbegierig",
        description: "Wir sind immer auf der Suche nach neuen Talenten",
        icon: "/icons/teamwork.svg"
    },
    {
        title: "Innovation",
        description: "Wir sind innovativ und immer auf der Suche nach neuen Ideen",
        icon: "/icons/flexibility.svg"
    }
]

</script>