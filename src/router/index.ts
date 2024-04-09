import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DetailJob from '../views/Job/DetailJob.vue';
import Jobs from '../views/Job/Jobs.vue';
import Apply from '../views/Job/Apply.vue';

const routes = [
    { path: '/', component: Home, name: 'home'},
    { path: '/job/:id', component: DetailJob, name: 'detailJob', props: true },
    { path: '/jobs', component: Jobs, name: 'jobs' },
    { path: '/apply/:id', component: Apply, name: 'apply', props: true}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
});

export default router