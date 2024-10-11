<template>
<NavBar />
<div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Subcategorieën voor {{ categoryName }}</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div v-for="subcategory in displayedSubcategories" :key="subcategory.id" class="group relative">
                    <h3 class="text-lg font-semibold text-gray-900">{{ subcategory.name }}</h3>
                    
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

// Mock data for subcategories
const allCategories = ref([
{
    id: 1,
    name: 'Groenten en Fruit',
    subcategories: [
        { id: 1, name: 'Groenten' },
        { id: 2, name: 'Fruit' }
    ]
},
{
    id: 2,
    name: 'Bakkerij en Brood',
    subcategories: [
        { id: 3, name: 'Brood' },
        { id: 4, name: 'Gebak' }
    ]
},
{
    id: 3,
    name: 'Zuivel en Eieren',
    subcategories: [
        { id: 5, name: 'Zuivel' },
        { id: 6, name: 'Eieren' }
    ]
}
]);

const route = useRoute();
const categoryId = ref(route.params.categoryId);
const category = ref(allCategories.value.find(cat => cat.id === Number(categoryId.value)));

const categoryName = ref(category.value.name);
const displayedSubcategories = ref(category.value.subcategories);
</script>
