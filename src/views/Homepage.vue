<script setup>
import NavBar from '@/components/NavBar.vue';
import PromoSection from '@/components/PromoSection.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import NewsSection from '@/components/NewsSection.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <header class="shadow-md">
        <NavBar />
    </header>
    <main>
        <PromoSection />
        <ProductGrid />
        <NewsSection />
    </main>
    <footer>
        <Footer />
    </footer>
</template>