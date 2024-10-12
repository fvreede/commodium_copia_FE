<template>
    <NavBar/>
    <div class="bg-gray-100">
        <!-- Dynamic Banner for each category -->
        <div class="relative category-banner">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
            <img :src="bannerSrc" alt="Category banner" class="w-full h-64 object-cover object-center" />
            <h2 class="absolute inset-y-0 z-20 left-0 flex items-center text-2xl font-bold tracking-tight p-4 h_text sm:text-2xl md:text-4xl lg:text-6xl mt-8">{{ categoryName }}</h2>
                <router-link to="/category" class="absolute top-1/2 transform-translate-y-1/2 right-2 z-20 flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full mx-4 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                Back to categories
            </router-link>
        </div>

        <!-- Subcategories and products -->
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <!-- Loop through subcategories -->
            <div v-for="subcategory in displayedSubcategories" :key="subcategory.id" class="mb-12">
                <!-- Subcategory Title -->
                <h3 class="text-xl font-semibold leading-6 text-gray-900">{{ subcategory.name }}</h3>

                <!-- Products Grid under each subcategory -->
                <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="product in subcategory.products" :key="product.id" class="group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://dummyimage.com/300x300" alt="Product image" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h4 class="text-sm font-medium text-gray-900">{{ product.name }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>


<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Category specific banners
import groentenFruitBanner from '@/assets/images/subcategories/banners/groentenFruitBanner.jpg';
import bakkerijBroodBanner from '@/assets/images/subcategories/banners/bakkerijBroodBanner.jpg';
import zuivelEierenBanner from '@/assets/images/subcategories/banners/zuivelEierenBanner.jpg';

// Mock data for subcategories and products
const allCategories = ref([
    {
        id: 1,
        name: 'Groenten en Fruit',
        bannerSrc: groentenFruitBanner,
        subcategories: [
            { 
                id: 1, 
                name: 'Groenten',
                products: [
                    { id: 1, name: 'Wortel' },
                    { id: 2, name: 'Bloemkool' },
                    { id: 3, name: 'Spinazie' }
                ]
            },
            {
                id: 2, 
                name: 'Fruit',
                products: [
                    { id: 10, name: 'Appel' },
                    { id: 11, name: 'Banaan' },
                    { id: 12, name: 'Sinaasappel' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Bakkerij en Brood',
        bannerSrc: bakkerijBroodBanner,
        subcategories: [
            { 
                id: 3, 
                name: 'Brood',
                products: [
                    { id: 20, name: 'Wit brood' },
                    { id: 21, name: 'Bruin brood' },
                    { id: 22, name: 'Meergranen brood' }
                ]
            },
            { 
                id: 4, 
                name: 'Gebak',
                products: [
                    { id: 30, name: 'Appeltaart' },
                    { id: 31, name: 'Slagroomtaart' },
                    { id: 32, name: 'Chocoladetaart' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Zuivel en Eieren',
        bannerSrc: zuivelEierenBanner,
        subcategories: [
            {
                id: 5,
                name: 'Zuivel',
                products: [
                    { id: 40, name: 'Melk' },
                    { id: 41, name: 'Yoghurt' },
                    { id: 42, name: 'Kaas' }
                ]
            },
            { 
                id: 6, 
                name: 'Eieren',
                products: [
                    { id: 50, name: 'Scharreleieren' },
                    { id: 51, name: 'Biologische eieren' },
                    { id: 52, name: 'Vrije uitloop eieren' }
                ]                
            }
        ]
    }
]);

const route = useRoute();
const categoryId = ref(route.params.categoryId);
const category = ref(allCategories.value.find(cat => cat.id === Number(categoryId.value)));

const categoryName = computed(() => category.value?.name);
const displayedSubcategories = computed(() => category.value?.subcategories);

// Dynamically set banner based on category
const bannerSrc = computed(() => category.value?.bannerSrc);

watch(categoryId, (newId) => {
    category.value = allCategories.value.find(cat => cat.id === Number(newId));
});
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
</style>