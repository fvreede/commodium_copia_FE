/**
 * Bestandsnaam: ProductPage.vue
 * Auteur: Fabio Vreede
 * Versie: v1.6.0
 * Datum: 2024-10-29
 * Tijd: 13:41:07
 * Doel: Deze view toont de details van een product op een aparte pagina.
 * Inclusief de banner, productinformatie en een knop om het product aan de winkelwagen toe te voegen.
 */

<template>
    <!-- Navigatiebalk -->
    <NavBar />
    <!-- Controleer of het product bestaat -->
    <div v-if="product" class="bg-gray-100">
        <!-- Dynamische Banner met categorie-informatie -->
        <div class="relative category-banner">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
                <img :src="resolveImagePath(bannerSrc)" :alt="categoryName + ' banner'" class="w-full h-64 object-cover object-center" />
            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
                <h2 class="text-2xl font-bold tracking-tight h_text sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4 md:mb-0 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2">{{ subcategoryName }}
                </h2>

                <!-- Link om terug te gaan naar de subcategorie -->
                <router-link :to="{ name: 'Subcategory', params: { categoryId: categoryId } }" class="flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                    Terug naar {{ categoryName }}
                </router-link>
            </div>
        </div>

        <!-- Product Details -->
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Product Afbeelding -->
                <div class="flex justify-center items-center aspect-w-1 aspect-h-1 w-full max-w-md lg:max-w-xs overflow-hidden rounded-lg lg:ml-40 ml-0">
                    <img :src="resolveImagePath(product.imageSrc)" :alt="product.name" class="w-full h-auto object-cover object-center sm:rounded-lg" />
                </div>


                <!-- Product Info -->
                <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>
                    <div class="mt-3">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl tracking-tight text-gray-900">€{{ formatPrice(product.price) }}</p>
                    </div>
                    <div class="mt-6">
                        <h3 class="sr-only">Description</h3>
                        <p class="text-base text-gray-700">{{ product.description }}</p>
                    </div>
                    
                    <!-- Knop om toe te voegen aan winkelwagen -->
                     <div class="mt-10 flex">
                        <button @click="cartStore.addToCart(product)" type="submit" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-orange-600 py-3 px-8 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-brown-50 sm:w-full">
                            Voeg toe aan winkelwagen
                        </button>
                    </div>
                </div>
            </div>

            <!-- Volledige product omschrijving -->
             <div class="mt-4">
                <h2 class="text-2xl font-semibold tracking-tight text-gray-900">Productomschrijving</h2>
                <hr class="my-4 border-gray-500" />
                <div class="mt-4">
                    <p class="text-base text-gray-700">{{ product.fullDescription }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center py-10">
        <p>Product not found.</p>
    </div>
    <!-- Footer -->
    <Footer />
</template>
  
<script setup>
// Het importeren van Vue functies en andere componenten
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Importeren mock data voor voorbeeldproducten
import mockData from '@/data/mockData.json';

// Winkelwagen store importeren
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();

// Props definiëren
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    bannerSrc: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    subcategoryName: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    }
});

// Data om route en product op te halen
const route = useRoute();
const product = ref(null);

onMounted(() => {
    // Product ophalen uit mock data op basis van ID en categorie
    const productId = Number(props.id);
    const category = mockData.find(cat => cat.id === Number(props.categoryId));
    if (category) {
        const subcategory = category.subcategories.find(sub => sub.name === props.subcategoryName);
        if (subcategory) {
        product.value = subcategory.products.find(p => p.id === productId);
        }
    }

    // Foutmelding weergeven als product niet gevonden wordt
    if (!product.value) {
        console.error('Product not found:', productId, props.categoryName, props.subcategoryName);
    }
});

/**
 * Functie om prijs te formatteren naar Nederlands formaat.
 * @param { number } price - De prijs van het product
 * @returns { string } - De geformatteerde prijs
 */
const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) {
        price = 0;
    }
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price).replace('€', '');
}

/**
 * Functie om afbeeldingspad op te lossen.
 * @param { string } path - Pad naar de afbeelding
 * @returns { string } - absolute URL van de afbeelding
 */
const resolveImagePath = (path) => {
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
</style>