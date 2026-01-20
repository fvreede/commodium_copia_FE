/**
 * Bestandsnaam: NewsLetterSignup.vue
 * Auteur: Fabio Vreede
 * Versie: v1.0.0
 * Datum: 2024-10-05
 * Tijd: 10:13:18
 * Doel: Component voor nieuwsbriefaanmelding waarbij gebruikers hun e-mailadres kunnen invoeren
 */

<template>
    <div class="space-y-2 bg-slate-200 rounded-lg p-4">
        <h3 class="text-lg font-semibold text-gray-900">Schrijf je in voor onze nieuwsbrief</h3>
        <!-- Formulier voor nieuwsbrief inschrijving -->
        <form @submit.prevent="submitEmail" class="flex max-w-md gap-x-2">
            <label for="email-address" class="sr-only">Email address</label>

            <!-- Email invoerveld -->
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="off" class="min-w-0 flex-auto px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Je e-mailadres" />

            <!-- Verstuurknop voor inschrijving -->
            <button type="submit" class="flex-none bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Inschrijven</button>
        </form>
    </div>
</template>

<script setup>
/**
 * Vue component setup voor NewsLetterSignup.vue
 * Behandelt de logica voor het inschrijven van gebruikers via hun e-mailadres.
 */

import { ref } from 'vue';

// Ref voor het bijhouden van de ingevoerde email
const email = ref('');

// Functie voor het verwerken van de emailinschrijving
const submitEmail = () => {
    // Email validatiepatroon
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check of de email geldig is
    if(email.value && emailPattern.test(email.value)) {
        alert(`Bedankt voor je inschrijving, ${email.value}!`);
        // Leeg het invoerveld na succesvolle inschrijving
        email.value = '';
    } else {
        alert('Voer een geldig e-mailadres in.');
    }
};
</script>