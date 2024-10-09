    import { createRouter, createWebHistory } from "vue-router";
    import Homepage from "../views/Homepage.vue";
    import Category from '../views/CategoryPage.vue';

    const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Homepage,
            },
            {
                path: '/category',
                name: 'Category',
                component: Category,
            },
        ]
    })

    export default router