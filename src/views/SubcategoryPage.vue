/**
 * Bestandsnaam: SubcategoryPage.vue
 * Auteur: Fabio Vreede
 * Versie: v1.9.0
 * Datum: 2024-10-22
 * Tijd: 16:42:58
 * Beschrijving: Deze view toont een dynamische bannerruimte, subcategorieën en hun bijbehorende producten voor een geselecteerde categorie in de Commodium Copia webapp. De view biedt een interactieve interface voor gebruikers om producten te bekijken binnen elke subcategorie.
 */

<template>
    <!-- Navigatiebalk -->
    <NavBar/>
    <div class="bg-gray-100">
        <!-- Dynamische banner die verandert afhankelijk van de geselcteerde categorie -->
        <div class="relative category-banner">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
            <img :src="resolveImagePath(bannerSrc)" alt="Category banner" class="w-full h-64 object-cover object-center" />
            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
                <!-- Dynamische categorie naam die verandert afhankelijk van de geselecteerde categorie -->
                <h2 class="text-2xl font-bold tracking-tight h_text sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4 md:mb-0 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2">
                    {{ categoryName }}
                </h2>
                <!-- Link terug naar alle categorieën -->
                <router-link :to="{ name: 'AllCategories' }" class="flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug naar categorieën
                </router-link>
            </div>
        </div>

        <!-- Weergave van subcategorieën en hun producten -->
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <!-- Itereer door subcategorieën -->
            <div v-for="subcategory in displayedSubcategories" :key="subcategory.id" class="mb-12">
                <!-- Subcategory Title -->
                <h3 class="text-xl font-semibold leading-6 text-gray-900">{{ subcategory.name }}</h3>

                <!-- Productraster voor elk subcategorieën -->
                <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-y-12 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-x-8">
                    <!-- Itereer door producten binnen de huidige subcategorie -->
                    <div v-for="product in subcategory.products" :key="product.id" class="group relative">
                        <router-link :to="{ name: 'Product', params: { id: product.id }, query: { bannerSrc: bannerSrc, categoryName: categoryName,  subcategoryName: subcategory.name, categoryId: categoryId }}">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                                <img :src="resolveImagePath(product.imageSrc)" :alt="product.name" class="w-full h-full object-cover object-center" />
                            </div>
                            
                            <!-- Product details en beschrijving -->
                            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between">
                                <div>
                                    <h4 class="text-sm font-medium text-gray-900 sm:text-base">{{ product.name }}</h4>
                                    <p class="mt-1 text-xs text-gray-500 sm:text-sm line-clamp-2">{{ product.description }}</p>
                                </div>

                                <!-- Product prijsweergave -->
                                <p class="mt-2 text-lg font-semibold text-gray-900 sm:mt-0 sm:text-xl">€{{ formatPrice(product.price) }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <Footer/>
</template>

<script setup>
// Importeer Vue composables voor reactiviteit en berekende waarden
import { ref, computed } from 'vue';
// Importeer useRoute voor toegang tot de router en routeparameters
import { useRoute } from 'vue-router';
// Importeer componenten voor de navigatiebalk en de footer
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Importeer mock data uit JSON-bestand voor tijdelijke product- en categorieweergave
import mockData from '@/data/mockData.json';

// Verkrijg routerinformatie van de huidige route
const route = useRoute();

// Verkrijg de ID van de huidige categorie uit de routeparameters en maak deze reactief
const categoryId = ref(route.params.categoryId);

// Zoek de categorie in de mock data op basis van de ID en stel deze in als berekende waarde
const category = computed(() => mockData.find(cat => cat.id === Number(categoryId.value)));

// Haal de naam van de huidige categorie op voor weergave in de banner
const categoryName = computed(() => category.value?.name);

// Haal de subcategorieën van de huidige categorie op om deze weer te geven in de interface
const displayedSubcategories = computed(() => category.value?.subcategories);

// Stel het juiste bannerpad dynamisch in op basis van de categorie
const bannerSrc = computed(() => category.value?.bannerSrc);

// Functie voor het formatteren van productprijzen in EUR-formaat
const formatPrice = (price) => {
      // Controleer of de prijs een geldig nummer is, anders zet deze op nul
  if (typeof price !== 'number' || isNaN(price)) {
    price = 0;
  }
    // Formatteer de prijs in het Nederlands en verwijder het euroteken voor consistentie
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price).replace('€', '');
}

// Functie om het juiste pad van een afbeeldingsbestand op te lossen
const resolveImagePath = (path) => {
    // Genereer een absolute URL naar de afbeelding op basis van het opgegeven pad
    return new URL(`../${path}`, import.meta.url).href;
}
</script>

<style scoped>
.h_text {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    color: #F6EBD8;
}

.category-banner {
    margin-bottom: 2rem;
}

.subcategory-section {
    margin-bottom: 2rem;
}

.group:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
}
</style>