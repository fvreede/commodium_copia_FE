/**
 * Bestandsnaam: ProductGrid.vue
 * Auteur: Fabio Vreede
 * Versie: v1.3.0
 * Datum: 2024-10-23
 * Tijd: 11:36:59
 * Doel: Component voor het weergeven van een productoverzicht in een gridlay-out.
 * Filtert specifieke producten uit mockData en toont hun details.
 */

<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 bg-slate-50">
        <!-- Artikelen voor elk product in de lijst -->
        <article v-for="product in products" :key="product.id" class="bg-beige shadow-md rounded-lg p-2 md:p-4 flex items-start justify-between">
            <div class="flex-1 pr-4">
                <h2 class="text-lg md:text-xl font-bold text-orange-700">{{ product.name }}</h2>
                <p class="text-gray-600 mb-2 md:mb-4">{{ product.description }}</p>
                <!-- Router-link naar de productdetailpagina -->
                <router-link :to="getProductLink(product)" class="inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm md:text-base font-medium py-2 px-4 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    Bekijk product
                </router-link>
            </div>
            <div class="flex-shrink-0 flex flex-col items-center">
                <!-- Productafbeelding -->
                <img :src="getProductImage(product.imageSrc)" :alt="product.name" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md border border-orange-200"/>
                <p class="text-orange-600 font-bold mt-1 text-base md:text-lg">{{ formatCurrency(product.price) }}</p>
            </div>
        </article>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import mockData from '@/data/mockData.json';

const products = ref([]);

/**
 * Geeft de juiste afbeeldings - URL voor een product terug.
 * @param {string} imagePath - Pad van de afbeelding.
 * @returns {string} Correcte URL van de afbeelding.
 */
const getProductImage = (imagePath) => {
    if (!imagePath) return ''; 
    const cleanPath = imagePath.replace(/^assets\//, ''); // Verwijdert 'assets/' van het begin
    return new URL(`/src/assets/${cleanPath}`, import.meta.url).href; // Genereert de juiste URL
};

/**
 * Formatteert de productprijs naar euro's (€).
 * @param {number} price - Prijs van het product.
 * @returns {string} Geformatteerde prijs.
 */
const formatCurrency = (price) => 
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);

/**
 * Genereert de router-link voor de productdetailpagina.
 * @param {object} product - Productobject met ID en aanvullende details.
 * @returns {object} Route-object voor de link naar de productpagina.
 */
const getProductLink = (product) => ({
    name: 'Product', // Veronderstelde router-naam 'Product'
    params: { id: product.id }, // Product-ID als router-parameter
    query: { // Extra details als query-parameters
        bannerSrc: product.bannerSrc,
        categoryName: product.categoryName,
        subcategoryName: product.subcategoryName,
        categoryId: product.categoryId
    }
});

/**
 * Laadt de producten uit mockData en filtert op specifieke namen.
 */
const loadProducts = () => {
    const productNames = ['Biologische pompoen', 'Espresso Brownies', 'Red Velvet Muffins'];

    // Plat de geneste structuur uit en filtert op productnamen
    products.value = mockData.flatMap(category =>
        category.subcategories.flatMap(subcategory =>
            subcategory.products
                .filter(product => productNames.includes(product.name)) // Filtert geselecteerde producten
                .map(product => ({
                    ...product, // Kopieert productdata
                    id: product.id || crypto.randomUUID(), // Zorgt voor een unieke ID
                    categoryName: category.name, // Voegt categorienaam toe
                    categoryId: category.id, // Voegt categorie-ID toe
                    subcategoryName: subcategory.name, // Voegt subcategorienaam toe
                    bannerSrc: product.bannerSrc || category.bannerSrc // Fallback banner
                }))
        )
    );
};

onMounted(loadProducts); // Laadt producten wanneer de component mount
</script>
