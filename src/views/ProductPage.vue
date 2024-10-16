<template>
    <NavBar />
    <div class="relative category-banner">
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"></div>
        <img :src="bannerSrc" alt="Subcategory banner" class="w-full h-64 object-cover object-center">
    </div>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

const route = useRoute(); // Initialize useRoute
const bannerSrc = ref(''); // Initialize bannerSrc

onMounted(() => {
    // Safely accxess and set the bannerSrc from route params
    if (route.params.bannerSrc) {
        bannerSrc.valuevefewfw = route.params.bannerSrc;
    }  {
        // Fallback image or error handling
        console.error('Banner source not provided');
        bannerSrc.value = '../assets/images/subcategories/banners/bakkerijBroodBanner.jpg'
    }
})
</script>
