/**
 * Bestandsnaam: Footer.vue
 * Auteur: Fabio Vreede
 * Versie: v1.0.0
 * Datum: 2024-10-06
 * Tijd: 12:01:45
 * Doel: Dit component is de footer van de website en bevat sociale links, nieuwsbriefaanmelding, klantenservice, belangrijke pagina links, en copyright-informatie.
 */

<template>
  <footer class="bg-slate-100 py-8 mt-12 border-t border-gray-200">
    <!-- Grid-container voor footer-content -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <!-- Social Links sectie -->
      <div class="space-y-4">
        <SocialLinks />
      </div>

      <!-- Nieuwsbrief aanmeldingssectie -->
      <div class="space-y-4">
        <NewsLetterSignup />
      </div>

      <!-- Klantenservice sectie -->
      <div class="space-y-4">
        <CustomerService />
      </div>
    </div>

    <!-- Footer Links sectie voor belangrijke pagina's -->
    <div class="mt-8 border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-5 gap-4 text-center text-sm text-gray-500">
      <a href="#" class="hover:underline">Algemene voorwaarden</a>
      <a href="#" class="hover:underline">Levering & verzending</a>
      <a href="#" class="hover:underline">Privacybeleid</a>
      <a href="#" class="hover:underline">Onze organisatie</a>
    </div>

    <!-- Copyright sectie -->
    <div class="mt-8 text-center text-sm text-gray-500">
      &copy; 2024 Commodium Copia. Alle rechten voorbehouden.
    </div>
  </footer>
</template>

<script setup>
// Importeer de componenten die worden gebruikt in de footer
import SocialLinks from './SocialLinks.vue';
import NewsLetterSignup from './NewsLetterSignup.vue';
import CustomerService from './CustomerService.vue';
</script>

<style scoped>
footer {
  background-color: #f9fafb;
}
</style>