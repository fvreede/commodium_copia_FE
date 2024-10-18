<template>
    <NavBar/>
    <div class="bg-gray-100">
        <!-- Dynamic banner from subcategory -->
        <div class="relative category-banner">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
            <img :src="resolveImagePath(dynamicBannerSrc)" alt="Category banner" class="w-full h-64 object-cover object-center" />
            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
                <h2 class="text-2xl font-bold tracking-tight h_text sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4 md:mb-0 md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2">
                    {{ subcategoryName }}
                </h2>
                <router-link :to="{ name: 'AllCategories', params: { categoryId: categoryId } }" class="flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to {{ categoryName }}
                </router-link>
            </div>
        </div>
        <!-- Rest of your product page content -->
    </div>
    <Footer/>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

// Get props and route params
const props = defineProps(['id', 'bannerSrc', 'categoryName', 'subcategoryName', 'categoryId']);
const route = useRoute();

const dynamicBannerSrc = ref('');

// Watch for changes in route (useful when the component is already mounted and route changes)
watch(route, (newRoute) => {
    // Update banner source when route changes
    dynamicBannerSrc.value = newRoute.query.bannerSrc;
});

// Set the banner when the page loads
onMounted(() => {
    dynamicBannerSrc.value = props.bannerSrc;
});

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