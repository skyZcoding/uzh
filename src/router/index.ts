import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DetailJob from '../views/Job/DetailJob.vue';
import Jobs from '../views/Job/Jobs.vue';

const routes = [
    { path: '/', component: Home, name: 'home'},
    { path: '/job/:id', component: DetailJob, name: 'detailJob' },
    { path: '/jobs', component: Jobs, name: 'jobs' }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router