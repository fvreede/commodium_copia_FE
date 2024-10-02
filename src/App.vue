<script setup>
import NavBar from './components/NavBar.vue'
import PromoSection from './components/PromoSection.vue';
import ProductGrid from './components/ProductGrid.vue';
</script>

<template>
  <header class="shadow-md">
    <NavBar />
  </header>
  <main>
    <PromoSection />
    <ProductGrid />
  </main>
</template>

