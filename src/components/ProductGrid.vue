<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 bg-slate-50">
        <article v-for="product in products" :key="product.id" class="bg-beige shadow-md rounded-lg p-2 md:p-4 flex items-start justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
            <div class="flex-1 pr-4">
                <h2 class="text-lg md:text-xl font-bold text-orange-700">{{ product.name }}</h2>
                <p class="text-gray-600 mb-2 md:mb-4">{{ product.description }}</p>
                <!-- Router link to the product details page -->
                <router-link :to="getProductLink(product)" class="inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm md:text-base font-medium py-2 px-4 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    Bekijk product
                </router-link>
            </div>
            <div class="flex-shrink-0 flex flex-col items-center">
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
 * Get the correct image URL for a product
 */
const getProductImage = (imagePath) => {
    if (!imagePath) return ''; 
    const cleanPath = imagePath.replace(/^assets\//, ''); // Remove 'assets/' from the start
    return new URL(`/src/assets/${cleanPath}`, import.meta.url).href; // Resolve the correct URL
};

/**
 * Format the product price into Euros (€)
 */
const formatCurrency = (price) => 
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);

/**
 * Generate the route link for the product details page
 */
const getProductLink = (product) => ({
    name: 'Product', // Assuming 'Product' is the route name
    params: { id: product.id }, // Pass product ID as route param
    query: { // Pass additional product details as query params
        bannerSrc: product.bannerSrc,
        categoryName: product.categoryName,
        subcategoryName: product.subcategoryName,
        categoryId: product.categoryId
    }
});

/**
 * Load the products from mockData and filter by specific names
 */
const loadProducts = () => {
    const productNames = ['Biologische pompoen', 'Espresso Brownies', 'Red Velvet Muffins'];

    // Flatten the nested structure and filter by product names
    products.value = mockData.flatMap(category =>
        category.subcategories.flatMap(subcategory =>
            subcategory.products
                .filter(product => productNames.includes(product.name)) // Filter selected products
                .map(product => ({
                    ...product, // Copy product data
                    id: product.id || crypto.randomUUID(), // Ensure each product has a unique ID
                    categoryName: category.name, // Include category name
                    categoryId: category.id, // Include category ID
                    subcategoryName: subcategory.name, // Include subcategory name
                    bannerSrc: product.bannerSrc || category.bannerSrc // Fallback banner
                }))
        )
    );
};

onMounted(loadProducts); // Load products when component mounts
</script>
