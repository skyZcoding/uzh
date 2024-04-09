<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import Link from '../../components/Link.vue';

const props = defineProps({
    id: Number,
})

const { id } = toRefs(props);

console.log(id);
</script>

<template>
    <div class="pt-16 normal-spacing">
        <h1>Frontend Developer (Vue.js)</h1>
        <div class="flex flex-col-reverse sm:flex-row justify-start mt-8">
            <div class="w-2/3 lg:w-4/5 sm:pr-4">
                <h2 class="mb-2">Beschreibung</h2>
                <p class="text-gray-600">
                    Für unseren Kunden, ein erfolgreich geführtes Technologieunternehmen, welches sich auf die Entwicklung von innovativen Softwareprodukten spezialisiert, suchen wir für den Sitz in Zürich einen motivierten, selbstständigen und zuverlässigen C#-Entwickler. Bist du eine ambitionierte Person, welche gerne den Einstieg in eine der führenden Unternehmungen der Technologiebranche machen will? - Dann freuen wir uns auf Deine Bewerbung.
                </p>
                <h3 class="mt-4 mb-2">Aufgaben</h3>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Entwicklung von Softwarelösungen im Bereich der industriellen Automation</li>
                    <li>Erstellung von technischen Konzepten und Spezifikationen</li>
                    <li>Programmierung von Softwaremodulen</li>
                    <li>Erstellung von Testfällen und Durchführung von Tests</li>
                    <li>Unterstützung bei der Inbetriebnahme der Softwarelösungen</li>
                </ul>
                <h3 class="mt-4 mb-2">Anforderungen</h3>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Abgeschlossene Ausbildung als Informatiker oder Elektroingenieur</li>
                    <li>Sehr gute Kenntnisse in der Softwareentwicklung mit C#</li>
                    <li>Kenntnisse in der industriellen Automation von Vorteil</li>
                    <li>Teamfähige, kommunikative und flexible Persönlichkeit</li>
                    <li>Sehr gute Deutsch- und Englischkenntnisse</li>
                </ul>
                <h3 class="mt-4 mb-2">Angebot</h3>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Interessante und abwechslungsreiche Tätigkeit in einem innovativen Umfeld</li>
                    <li>Attraktive Anstellungsbedingungen und Sozialleistungen</li>
                    <li>Professionelle Unterstützung bei der Einarbeitung</li>
                    <li>Modernes Arbeitsumfeld und gute Infrastruktur</li>
                    <li>Vielseitige Weiterbildungsmöglichkeiten</li>
                </ul>
            </div>
            <div class="w-1/3 sm:mb-0 mb-4 lg:w-1/5 flex flex-col">
                <Link title="Bewerben" link="/apply/1" level="primary" class="w-full" />
                <div class="flex flex-col mt-4">
                    <h3 class="mb-2">Details</h3>
                    <div class="flex flex-row items-center">
                        <img src="/icons/work.svg" class="h-6 w-6 mr-2" />
                        <p class="font-semibold mr-1">Art:</p>
                        <p class="">Entwickler</p>
                    </div>
                    <div class="flex flex-row items-center mt-2">
                        <img src="/icons/dollar.svg" class="h-6 w-6 mr-2" />
                        <p class="font-semibold mr-1">Lohn:</p>
                        <p class="">30CHF/h</p>
                    </div>
                    <div class="flex flex-row items-center mt-2">
                        <img src="/icons/clock.svg" class="h-6 w-6 mr-2" />
                        <p class="font-semibold mr-1">Pensum:</p>
                        <p class="">100%</p>
                    </div>
                    <div class="flex flex-row items-center mt-2">
                        <img src="/icons/location.svg" class="h-6 w-6 mr-2" />
                        <p class="font-semibold mr-1">Ort:</p>
                        <p class="">Zürich</p>
                    </div>
                    <div class="flex flex-row items-center mt-2">
                        <img src="/icons/calendar.svg" class="h-6 w-6 mr-2" />
                        <p class="font-semibold mr-1">Veröffentlicht:</p>
                        <p class="">01.01.2022</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>