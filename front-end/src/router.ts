import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
// @ts-ignore
import { useStore } from 'vuex';

// routes
import Form from './screens/Form.vue';
import Feed from './screens/Feed.vue';

const routes:RouteRecordRaw[] = [
    {
        path:"/",
        component:Feed
    },
    {
        path:"/form",
        component:Form
    }
];

const router = createRouter({
    routes,
    history:createWebHistory()
})

// ApplicationData guard
router.beforeEach((to, _, next) => {
    const {state} = useStore();
    if(to.path === "/form") return next();
    if(!state.location.latitude || !state.location.longitude ||  !state.currentDay) return next("/form")
    next();
});

export default router;
