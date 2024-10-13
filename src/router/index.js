import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import Category from '../views/CategoryPage.vue';
import SubcategoryPage from "../views/SubcategoryPage.vue";
import ProductPage from "../views/ProductPage.vue";

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
        },
        {
            path: '/product/:id',
            name: 'Product',
            component: ProductPage,
            props: true,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;