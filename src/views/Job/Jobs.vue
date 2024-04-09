<script setup lang="ts">
import JobCard from "../../components/JobCard.vue";
import { reactive, onMounted } from "vue";
import Job from "../../types/Job";
import JobState from "../../types/JobState";


const jobs: Array<Job> = [
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
    tags: ["Vollzeit", "Vue.js", "On Site"],
  },
];

const state: JobState = reactive({
  tags: [
    { name: "Vue.js", selected: true },
    { name: "Remote", selected: true },
    { name: "On Site", selected: true },
    { name: "Teilzeit", selected: true },
    { name: "Vollzeit", selected: true },
    { name: "Befristet", selected: true },
    { name: "Chemie", selected: true },
    { name: "Physik", selected: true },
    { name: "Geschichte", selected: true },
    { name: "Bibliothek", selected: true },
    { name: "IT", selected: true },
    { name: "Labor", selected: true },
    { name: "Forschung", selected: true },
    { name: "Studentische Hilfskraft", selected: true },
    { name: "Assistent", selected: true },
    { name: "Lehre", selected: true },
    { name: "Dozent", selected: true },
  ],
  jobs: [],
});

function filterJobs(tag: any) {
  tag.selected = !tag.selected;
  getFilteredJobs();
}

function getFilteredJobs() {
  state.jobs = jobs.filter((job) => {
    return job.tags.some((tag) => {
      return state.tags.find((t) => t.name === tag && t.selected);
    });
  });
}

onMounted(() => {
  getFilteredJobs();
});
</script>

<template>
  <div class="pt-16 w-full flex justify-center items-center normal-spacing">
    <h1 class="text-3xl font-bold text-center" v-motion-slide-visible-top>
      Campus Jobs <br />
      Entdecke <span class="text-secondary">deine</span> Karriereoptionen
    </h1>
  </div>

  <div class="pt-16 normal-spacing flex flex-col sm:flex-row">
    <div class="w-fit">
      <div class="w-[24rem]">
        <h3 class="font-semibold mb-2">Filter</h3>
        <div class="flex flex-row flex-wrap">
          <div
            v-for="tag in state.tags"
            :key="tag.name"
            class="px-2 py-[0.5px] rounded-full flex flex-row items-center mr-2 mb-2 cursor-pointer border-2 border-secondary"
            :class="
              tag.selected
                ? 'bg-secondary text-white'
                : 'bg-white text-secondary'
            "
            @click="filterJobs(tag)"
          >
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
        <JobCard
          v-for="(job, index) in state.jobs"
          :key="index"
          :title="job.title"
          :description="job.description"
          :place="job.place"
          :salary="job.salary"
          :type="job.type"
          :tags="job.tags"
        />
      </div>
    </div>
  </div>
</template>
