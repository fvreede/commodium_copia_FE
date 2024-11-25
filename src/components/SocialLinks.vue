/**
 * Bestandsnaam: SocialLinks.vue
 * Auteur: Fabio Vreede
 * Versie: v1.1.0
 * Datum: 2024-11-20
 * Tijd: 08:37:53
 * Doel: Component om social media links weer te geven
 */

<template>
    <!-- Container voor de "Volg ons" sectie met achtergrond, afronding en padding -->
    <div class="space-y-2 bg-slate-200 rounded-lg p-4">
        <!-- Titel van de sectie -->
        <h3 class="text-lg font-semibold text-gray-900">Volg ons:</h3>
        <!-- Container voor sociale media iconen met ruimte tussen de links -->
        <div class="space-x-4">
            <!-- Link naar Facebook met hover-effect -->
            <a href="https://www.facebook.com" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faFacebookSquare" class="w-8 h-8"/>
            </a>
            <!-- Link naar X (voorheen Twitter) met hover-effect -->
            <a href="https://www.x.com" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faXTwitter" class="w-8 h-8"/>
            </a>
            <!-- Link naar Instagram met hover-effect -->
            <a href="https://www.instagram.com" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faInstagramSquare" class="w-8 h-8"/>
            </a>
        </div>
    </div>
</template>

<script setup>
/* Importeer de FontAwesome-icon component en de iconen die je nodig hebt */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookSquare, faXTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
</script>