import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import Category from '../views/CategoryPage.vue';
import SubcategoryPage from "../views/SubcategoryPage.vue";

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
            name: 'AllCategories',
            component: Category,
        },
        {
            path: '/category/:categoryId',
            name: 'Subcategory',
            component: SubcategoryPage,
        }
    ]
});

export default router;