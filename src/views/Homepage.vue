/**
 * Bestandsnaam: HomePage.vue
 * Auteur: Fabio Vreede
 * Versie: v1.0.0
 * Datum: 2024-10-08
 * Tijd: 22:12:18
 * Beschrijving: Deze view definieert de HomePage, met secties zoals de navigatiebalk, promotiesectie, productenraster, nieuwsrubriek en footer.
 */

<script setup>
 // Importeren van de NavBar component
import NavBar from '@/components/NavBar.vue';

// Importeren van de PromoSection component
import PromoSection from '@/components/PromoSection.vue';

// Importeren van de ProductGrid component
import ProductGrid from '@/components/ProductGrid.vue';

// Importeren van de NewsSection component
import NewsSection from '@/components/NewsSection.vue';

// Importeren van de Footer component
import Footer from '@/components/Footer.vue';
</script>

<template>
    <!-- Header sectie met de navigatiebalk -->
    <header class="shadow-md">
        <NavBar />
    </header>

    <!-- Hoofdinhoud sectie met promotiesectie, productraster en nieuwrubriek -->
    <main>
        <PromoSection />
        <ProductGrid />
        <NewsSection />
    </main>

    <!-- Footer sectie -->
    <footer>
        <Footer />
    </footer>
</template>