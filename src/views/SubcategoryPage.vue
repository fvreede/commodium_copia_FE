<template>
    <NavBar/>
    <div class="bg-gray-100">
        <!-- Dynamic Banner for each category -->
        <div class="relative category-banner">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
            <img :src="bannerSrc" alt="Category banner" class="w-full h-64 object-cover object-center" />
            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
                <h2 class="text-2xl font-bold tracking-tight h_text sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4 md:mb-0 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2">
                    {{ categoryName }}
                </h2>
                <router-link to="/category" class="flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to categories
                </router-link>
            </div>
        </div>

        <!-- Subcategories and products -->
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <!-- Loop through subcategories -->
            <div v-for="subcategory in displayedSubcategories" :key="subcategory.id" class="mb-12">
                <!-- Subcategory Title -->
                <h3 class="text-xl font-semibold leading-6 text-gray-900">{{ subcategory.name }}</h3>

                <!-- Products Grid under each subcategory -->
                <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <!-- Loop through products -->
                    <div v-for="product in subcategory.products" :key="product.id" class="group relative">
                        <router-link :to="{ name: 'Product', params: { id: product.id, bannerSrc: subcategory.bannerSrc } }">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                                <img :src="product.imageSrc" :alt="product.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h4 class="text-lg font-medium text-gray-900">{{ product.name }}</h4>
                                    <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
                                </div>
                                <p class="text-2xl font-semibokd text-gray-900">€{{ formatPrice(product.price) }}</p>
                            </div>
                        </router-link>
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
                    { 
                        id: 1, 
                        name: 'Wortel',
                        description: 'Een oranje wortel',
                        price: 1.50,
                        imageSrc: ''
                    },
                    { 
                        id: 2, 
                        name: 'Bloemkool',
                        description: 'Een witte bloemkool',
                        price: 1.50,
                        imageSrc: ''
                    },
                    { 
                        id: 3, 
                        name: 'Spinazie',
                        description: 'Een groene spinazie',
                        price: 1.50,
                        imageSrc: ''
                    }
                ]
            },
            {
                id: 2, 
                name: 'Fruit',
                products: [
                    { 
                        id: 10, 
                        name: 'Appel',
                        description: 'Een rode appel',
                        price: 1.50,
                        imageSrc: ''
                    },
                    { 
                        id: 11, 
                        name: 'Banaan',
                        description: 'Een tros gele bananen',
                        price: 1.50,
                        imageSrc: ''
                    },
                    { 
                        id: 12, 
                        name: 'Sinaasappel',
                        description: 'Een oranje sinaasappel',
                        price: 1.50,
                        imageSrc: ''
                    }
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
                    { 
                        id: 20, 
                        name: 'Wit brood',
                        description: 'Een wit brood met een licht korstje',
                        price: 2.50,
                        imageSrc: '../assets/images/subcategories/products/bakkerij_brood/witbrood.jpg'
                    },
                    { 
                        id: 21, 
                        name: 'Bruin brood',
                        description: 'Een bruin brood met een donker korstje',
                        price: 2.50,
                        imageSrc: ''
                    },
                    { 
                        id: 22, 
                        name: 'Croissant',
                        description: 'Twee verse croissants',
                        price: 1.50,
                        imageSrc: ''
                    }
                ]
            },
            { 
                id: 4, 
                name: 'Gebak',
                products: [
                    { 
                        id: 30, 
                        name: 'Brownie',
                        description: 'Een heerlijke verse brownie',
                        price: 2.50,
                        imageSrc: ''
                    },
                    { 
                        id: 31, 
                        name: 'Muffin',
                        description: 'Een heerlijke versgebakken muffin',
                        price: 2.50,
                        imageSrc: ''
                    },
                    { 
                        id: 32, 
                        name: 'Red Velvet Cake',
                        description: 'Een heerlijke verse red velvet cake',
                        price: 3.50,
                        imageSrc: ''
                    },
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
                    { 
                        id: 40, 
                        name: 'Melk',
                        description: 'Een flesje melk',
                        price: 1.00,
                        imageSrc: ''
                    },
                    { 
                        id: 41, 
                        name: 'Yoghurt',
                        description: 'Een potje yoghurt',
                        price: 2.00,
                        imageSrc: ''
                    },
                ]
            },
            {
                id: 6,
                name: 'Kaas',
                products: [
                    { 
                        id: 43, 
                        name: 'Gouda',
                        description: 'Een stukje gouda kaas',
                        price: 3.00,
                        imageSrc: ''
                    },
                    { 
                        id: 44, 
                        name: 'Feta',
                        description: 'Een stukje feta kaas',
                        price: 2.50,
                        imageSrc: ''
                    },
                    { 
                        id: 45, 
                        name: 'Brie',
                        description: 'Een stukje brie kaas',
                        price: 3.50,
                        imageSrc: ''
                    },
                ]
            },
            { 
                id: 7, 
                name: 'Eieren',
                products: [
                    { 
                        id: 50, 
                        name: 'Scharreleieren',
                        description: 'Een doosje scharreleieren',
                        price: 2.50,
                        imageSrc: ''
                    },
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

const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) {
        price = 0;
    }
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price).replace('€', '');
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