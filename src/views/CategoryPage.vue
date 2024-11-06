/**
 * Bestandsnaam: CategoryPage.vue
 * Auteur: Fabio Vreede
 * Versie: v1.4 .0
 * Datum: 2024-10-22
 * Tijd: 16:42:58
 * Doel: Deze view toont een overzicht van beschikbare categorieën. 
 * Elke categorie heeft een afbeelding, naam en korte beschrijving die naar subcategorieën leidt.
 */

<template>
  <!-- Navigatiebalk -->
  <NavBar />

  <!-- Hoofdcontainer voor categorieën sectie-->
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Categorieën</h2>

        <!-- Categorieën grid layout -->
        <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8">

          <!-- Itereer door alle categorieën en toon een card voor elke categorie -->
          <div v-for="category in categories" :key="category.name" class="group relative">

            <!-- Link naar de subcategoriepagina gebaseerd op categorie ID -->
            <router-link :to="{ name: 'Subcategory', params: { categoryId: category.id } }">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">

                <!-- Dynamische afbeelding voor de categorie -->
                <img :src="category.imageSrc" :alt="category.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75"/>
              </div>

              <!-- Naam van de categorie -->
              <h3 class="mt-2 text-sm text-gray-700 truncate">
                {{ category.name }}
              </h3>

              <!-- Beschrijving van de categorie met een line-clamp voor consistentie -->
              <p class="mt-1 text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">{{ category.description }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />
</template>
  
<script setup>
// Import van vereiste componenten zoals NavBar en Footer
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Import van afbeeldingen voor de categorieën
import groentenFruitImg from '@/assets/images/categories/groenten-fruit.jpg';
import bakkerijBroodImg from '@/assets/images/categories/bakkerij-brood.jpg';
import zuivelEierenImg from '@/assets/images/categories/zuivel-eieren.jpg';

/**
 * Array van categorieën die de ID, naam, afbeelding, alt-text en beschrijving van alle categorie bevat.
 */
const categories = [
  {
    id: 1,
    name: 'Groenten en Fruit',
    imageSrc: groentenFruitImg,
    imageAlt: 'Groenten en fruit',
    href: '#',
    description: 'Ontdek de lekkerste groenten en fruit van het seizoen.'
  },
  {
    id: 2,
    name: 'Bakkerij en Brood',
    imageSrc: bakkerijBroodImg,
    imageAlt: 'Bakkerij en brood',
    href: '#',
    description: 'Vers brood en gebak, elke dag vers gebakken.'
  },
  {
    id: 3,
    name: 'Zuivel en Eieren',
    imageSrc: zuivelEierenImg,
    imageAlt: 'Zuivel en eieren',
    href: '#',
    description: 'Verse zuivel en eieren, rechtstreeks van de boerderij.'
  },
]
</script>