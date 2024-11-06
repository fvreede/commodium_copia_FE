/**
 * Bestandsnaam: NewsSection.vue
 * Auteur: Fabio Vreede
 * Versie: v1.2.0
 * Datum: 2024-10-23
 * Tijd: 11:36:59
 * Doel: Component voor het weergeven van het laatste nieuws en promoties,
 * specifiek voor herfstaanbiedingen.
 */

<template>
    <section class="py-10 bg-slate-50">
        <!-- Titel van het nieuwssectie -->
        <h2 class="text-3xl font-bold text-center mb-8">Laatste Nieuws</h2>

        <!-- Nieuws card met promotie-informatie -->
        <div class="news-card bg-white p-6 rounded shadow mx-auto max-w-lg">
            <!-- Afbeelding van de promotie -->
            <img :src="newsItem.image" :alt="newsItem.imageAlt" class="w-full h-48 object-cover mb-4 rounded">
            <!-- Titel van de promotie -->
            <h3 class="text-xl font-semibold">{{ newsItem.title }}</h3>
            <!-- Beschrijving van de promotie -->
            <p class="text-gray-600 mt-2">{{ newsItem.summary }}</p>
            <!-- Link naar meer details -->
            <a href="#" class="mt-4 inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-4 rounded-full hover:from-orange-500 hover:to-orange-700 transition transform hover:scale-105 hover:shadow-lg">Lees meer</a>
        </div>
    </section>
</template>

<script>
/**
 * Export van de NewsSection component met data voor nieuwsitems.
 * Deze data bevat een titel, samenvatting en afbeelding van de promotie.
 */

export default {
    data() {
        return {
            newsItem: {
            title: "Herfst Promoties zijn hier!",
            summary: "Ontdek onze nieuwste herfstaanbiedingen en geniet van geweldige kortingen!",
            image: "/src/assets/images/herfstPromotion.jpg",
            imageAlt: "Herfst promotie"
            },
        };
    },
};
</script>

<style scoped>
/* Styling voor de overgangsanimaties van de links */
a {
    transition: background-color 0.3s, transform 0.2s;
}
</style>