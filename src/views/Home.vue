<script setup lang="ts">
import Link from "../components/Link.vue";
import JobCard from "../components/JobCard.vue";
import Carousel from "../components/Carousel.vue";

const jobs = [1, 1, 1, 1, 1, 1];
const facts = [
  {
    title: "Teamwork",
    description: "Wir arbeiten in einem jungen und dynamischen Team",
    icon: "/icons/teamwork.svg",
  },
  {
    title: "Flexibilität",
    description: "Wir bieten flexible Arbeitszeiten",
    icon: "/icons/flexibility.svg",
  },
  {
    title: "Wissbegierig",
    description: "Wir sind immer auf der Suche nach neuen Talenten",
    icon: "/icons/curious.svg",
  },
  {
    title: "Innovation",
    description: "Wir sind innovativ und immer auf der Suche nach neuen Ideen",
    icon: "/icons/innovation.svg",
  },
];
</script>

<template>
  <div class="pt-16 normal-spacing flex flex-col justify-center items-center">
    <h1 class="mb-2 text-center">Dein nächster Job</h1>
    <p class="text-center text-gray-600 w-1/2">
      An der Universität Zürich gibt es immer wieder temporäre Arbeiten, welche
      nicht durch das bestehende Personal abgedeckt werden können. Insbesondere
      bei Events wird Unterstützung benötigt, beispielsweise beim Empfang, bei
      der Einlasskontrolle, Wegweisung oder Hörsaalbetreuung, bei Auf- und
      Abbauarbeiten oder der Betreuung von Personen mit Beeinträchtigungen.n
    </p>
    <div class="flex flex-row mt-2 gap-6">
      <Link
        title="Wer sind wir"
        link="/about"
        level="primary"
        class="w-[8rem]"
      />
      <Link
        title="Kontakt"
        link="/contact"
        level="secondary"
        class="w-[8rem]"
      />
    </div>
  </div>

  <div class="pt-16 flex flex-col-reverse md:flex-row-reverse normal-spacing">
    <div class="md:w-1/2 w-full flex flex-col justify-center md:ml-6">
      <h2>Wie funktioniert es?</h2>
      <p class="text-gray-600">
        Auf unserer Online-Plattform bieten wir mit Campus Jobs eine zentrale
        Dienstleistung an, bei welcher Organisationseinheiten der UZH
        selbstständig kleine, einmalige und stundenbasierte
        Unterstützungsarbeiten ausschreiben können. Studierende erstellen auf
        dem Eventportal ein Profil und können sich auf diese Jobs bewerben (für
        bestimmte Jobtypen ist eine Schulung notwendig). Nach dem Arbeitseinsatz
        werden die Studierenden bezahlt und können sich je nach Interesse und
        Verfügbarkeit für einen nächsten Campus Job bewerben.
      </p>
    </div>
    <div class="md:w-1/2 w-full flex flex-col justify-center">
      <img src="/images/uzh-1.png" class="rounded-md" />
    </div>
  </div>

  <div class="mt-8 bg-slate-100">
    <div class="pt-8 flex flex-col md:flex-row normal-spacing gap-6">
      <div class="md:w-1/2 w-full">
        <h2>Unsere Mission</h2>
        <p class="text-gray-600">
          Wir helfen dir, den idealen Job während deinem Studium an der
          Universität Zürich zu finden.
        </p>
      </div>
      <div class="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(fact, index) in facts" :key="index">
          <div class="flex flex-col items-center">
            <img :src="fact.icon" class="h-16 mb-6" />
            <h3 class="mb-4">{{ fact.title }}</h3>
            <p class="text-center">{{ fact.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-16 pb-16 normal-spacing">
      <div class="flex flex-col">
        <div class="mb-4 flex flex-row justify-between min-w-[24rem]">
          <h2>Studenten Jobs</h2>

          <router-link to="/jobs" class="text-primary font-semibold">
            <div class="flex flex-row items-center">
              <p>Alle Jobs</p>
              <img src="/icons/arrow-right.svg" class="h-4 ml-2" />
            </div>
          </router-link>
        </div>
        <Carousel :list="jobs">
          <JobCard class="flex-shrink-0 snap-start mx-5" />
          <JobCard class="flex-shrink-0 snap-start mx-5" />
          <JobCard class="flex-shrink-0 snap-start mx-5" />
          <JobCard class="flex-shrink-0 snap-start mx-5" />
          <JobCard class="flex-shrink-0 snap-start mx-5" />
          <JobCard class="flex-shrink-0 snap-start mx-5" />
        </Carousel>
      </div>
    </div>
  </div>
</template>


