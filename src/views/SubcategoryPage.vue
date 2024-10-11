<template>
<NavBar />
<div class="bg-gray-100">
    <!-- Dynamic banner for each category -->
    <div class="category-banner">
        <img :src="bannerSrc" :alt="`Banner voor ${categoryName}`" class="w-full h-60 object-cover"/>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Subcategorieën voor {{ categoryName }}</h2>

            <!-- Table layout for Subcategories and Products -->
            <div class="grid grid-cols-4 gap-4">
                <div v-for="subcategory in displayedSubcategories" :key="subcategory.id" class="subcategory-row col-span-1">
                    <h3 class="text-lg font-bold text-gray-900">{{ subcategory.name }}</h3>
                </div>
                <div v-for="product in displayedProducts" :key="product.id" class="product-row col-span-3">
                    <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                        <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                        <p class="mt-2 text-base font-semibold text-gray-900">{{ product.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Mock data for subcategories and products
const allCategories = ref([
    {
        id: 1,
        name: 'Groenten en Fruit',
        subcategories: [
            { id: 1, name: 'Groenten' },
            { id: 2, name: 'Fruit' }
        ],
        products: [
            { id: 1, name: 'Appel'},
            { id: 2, name: 'Banaan'},
            { id: 3, name: 'Sinaasappel'}
        ],
    },
    {
        id: 2,
        name: 'Bakkerij en Brood',
        subcategories: [
            { id: 3, name: 'Brood' },
            { id: 4, name: 'Gebak' }
        ],
        products: [
            { id: 4, name: 'Stokbrood'},
            { id: 5, name: 'Croissant'},
            { id: 6, name: 'Appelflap'}
        ],
    },
    {
        id: 3,
        name: 'Zuivel en Eieren',
        subcategories: [
            { id: 5, name: 'Zuivel' },
            { id: 6, name: 'Eieren' }
        ],
        products: [
            { id: 7, name: 'Melk'},
            { id: 8, name: 'Yoghurt'},
            { id: 9, name: 'Eieren'}
        ]
    }
]);

const route = useRoute();
const categoryId = ref(route.params.categoryId);
const category = ref(allCategories.value.find(cat => cat.id === Number(categoryId.value)));

const categoryName = ref(category.value.name);
const displayedSubcategories = ref(category.value.subcategories);
const displayedProducts = ref(category.value.products);

// Dynamically set banner based on category
const bannerSrc = computed(() => category.value.bannerSrc);
</script>

<style scoped>
.category-banner {
    margin-bottom: 2rem;
}
.subcategory-row {
    text-align: left;
    padding: 0.5rem;
}
.product-row {
    text-align: left;
    padding: 0.5rem;
}
</style>
