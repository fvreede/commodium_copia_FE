/**
* Bestand: router/index.js
* Auteur: Fabio Vreede
* Versie: v1.6.0
* Datum: 2024-10-20
* Tijd: 16:59:06
* Doel: Dit bestand definieert de router-configuratie voor de Commodium Copia applicatie. Het bevat routes voor verschillende pagina's en componenten, waaronder de Homepage, Categorieën, Subcategorieën en Productpagina's. Daarnaast bevat het een scroll-gedragsfunctie voor een verbeterde UX.
*/

import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import Homepage from "../views/Homepage.vue"; // Import de homepage view
=======
import HomePage from "../views/HomePage.vue"; // Import de homepage view
>>>>>>> 050428d119ff130f4df2f464bfdcdcb1bfe0dd7b
import Category from '../views/CategoryPage.vue'; // Import de categorypagina
import SubcategoryPage from "@/views/SubcategoryPage.vue"; // Import de subcategorypagina
import ProductPage from "../views/ProductPage.vue"; // Import de productpagina

// Configuratie van de router met geschiedenis en routes voor verschillende pagina's
const router = createRouter({
  history: createWebHistory(),

  // Definiëren van routes voor de applicatie
  routes: [
    {
      // Route voor de startpagina
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      // Route voor de categorie-overzichtspagina
      path: '/category',
      name: 'AllCategories',
      component: Category,
    },
    {
      // Route voor specifieke subcategoriepagina's
      path: '/category/:categoryId',
      name: 'Subcategory',
      component: SubcategoryPage,
    },
    {
        // Route voor specifieke productpagina's met dynamische properties doorgegeven als route-parameters
        path: '/product/:id',
        name: 'Product',
        component: ProductPage,
        props: route => ({
          id: route.params.id,
          bannerSrc: route.query.bannerSrc,
          categoryName: route.query.categoryName,
          subcategoryName: route.query.subcategoryName,
          categoryId: route.query.categoryId
        })
      }
  ],

  // Scrollgedrag instellen voor pagina-overgangen
  scrollBehavior(to, from, savedPosition) {
    // Als een opgeslagen positie bestaat (bijvoorbeeld door terug te navigeren), ga naar die positie
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll naar boven bij navigeren naar nieuwe pagina
      return { top: 0 };
    }
  }
});

// Exporteer de router voor gebruik in de hoofdapplicatie
export default router;