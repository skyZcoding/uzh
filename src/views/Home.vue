<script setup lang="ts">
import Link from "../components/Link.vue";
import JobCard from "../components/JobCard.vue";
import Carousel from "../components/Carousel.vue";
import TextImage from "../components/TextImage.vue";

const jobs = [
  {
    title: "Dozent für Geschichte",
    description:
      "Das Fachbereich Geschichte sucht einen Dozenten, der Vorlesungen und Seminare zu verschiedenen Themen der Geschichte halten kann.",
    place: "Hauptgebäude",
    type: "Dozent",
    tags: ["Geschichte", "Dozent", "Lehre", "Vollzeit"],
    salary: "50CHF/h",
  },
  {
    title: "Laborant - Chemie",
    description:
      "Das Institut für Chemie benötigt einen Laboranten, der bei Experimenten und Laborarbeiten in verschiedenen chemischen Projekten unterstützt.",
    place: "Laboratorium",
    type: "Laborant",
    tags: ["Chemie", "Labor", "Befristet"],
    salary: "40CHF/h",
  },
  {
    title: "Studentischer Hilfskraft - Bibliothek",
    description:
      "Die Universitätsbibliothek sucht studentische Hilfskräfte, die bei der Ausleihe, Rückgabe und Organisation von Büchern und Materialien helfen.",
    place: "Bibliothek",
    type: "Werkstudent",
    tags: ["Bibliothek", "Studentische Hilfskraft", "Teilzeit"],
    salary: "25CHF/h",
  },
  {
    title: "Forschungsassistent - Physik",
    description:
      "Das Physik-Institut sucht einen Forschungsassistenten, der bei experimentellen Physikprojekten mitwirkt und bei der Datenanalyse unterstützt.",
    place: "Physik-Institut",
    type: "Assistent",
    tags: ["Physik", "Forschung", "Vollzeit"],
    salary: "45CHF/h",
  },
  {
    title: "Studentischer Hilfskraft - IT",
    description:
      "Das IT-Team sucht studentische Hilfskräfte, die bei der Wartung und Pflege von IT-Systemen und Anwendungen helfen.",
    place: "IT-Abteilung",
    type: "Werkstudent",
    tags: ["IT", "Studentische Hilfskraft", "Teilzeit"],
    salary: "30CHF/h",
  },
  {
    title: "Junior Frontend Developer (Vue.js)",
    description:
      "Wir suchen einen Junior Frontend Developer, der uns bei der Entwicklung von Webanwendungen unterstützt.",
    place: "Rektoratdienst",
    salary: "30CHF/h",
    type: "Entwickler",
    tags: ["Fulltime", "Vue.js", "On Site"],
  },
];

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
  <div class="pt-16 normal-spacing">
    <TextImage 
        title="Dein nächster Job"
        description="An der Universität Zürich gibt es immer wieder temporäre Arbeiten, welche nicht durch das bestehende Personal abgedeckt werden können. Insbesondere bei Events wird Unterstützung benötigt, beispielsweise beim Empfang, bei der Einlasskontrolle, Wegweisung oder Hörsaalbetreuung, bei Auf- und Abbauarbeiten oder der Betreuung von Personen mit Beeinträchtigungen."
        image="/images/uzh-1.png"
        :link="{ link: '/about', title: 'Wer sind wir' }"
    />
  </div>

  <div class="pt-16 normal-spacing">
    <TextImage 
        title="Wie funktioniert es?"
        description="Auf unserer Online-Plattform bieten wir mit Campus Jobs eine zentrale Dienstleistung an, bei welcher Organisationseinheiten der UZH selbstständig kleine, einmalige und stundenbasierte Unterstützungsarbeiten ausschreiben können. Studierende erstellen auf dem Eventportal ein Profil und können sich auf diese Jobs bewerben (für bestimmte Jobtypen ist eine Schulung notwendig). Nach dem Arbeitseinsatz werden die Studierenden bezahlt und können sich je nach Interesse und Verfügbarkeit für einen nächsten Campus Job bewerben."
        image="/images/uzh-1.png"
        :reverse="true"
        :link="{ link: '/contact', title: 'Kontaktieren' }"
    />
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
            <img :src="fact.icon" class="h-16 mb-6" v-motion-pop-visible />
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

          <router-link to="/jobs" class="group">
            <div class="flex flex-row items-center">
              <p class="group-hover:text-secondary duration-200">Alle Jobs</p>
              <img src="/icons/arrow-right.svg" class="h-4 ml-2 text-primary group-hover:text-secondary duration-200" />
            </div>
          </router-link>
        </div>
        <Carousel :list="jobs">
          <JobCard class="flex-shrink-0 snap-start mx-5"
            v-for="(job, index) in jobs"
            :key="index"
            :title="job.title"
            :description="job.description"
            :place="job.place"
            :salary="job.salary"
            :type="job.type"
            :tags="job.tags"
          />
        </Carousel>
      </div>
    </div>
  </div>
</template>


