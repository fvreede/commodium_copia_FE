<template>
    <div class="space-y-2 bg-slate-200 rounded-lg p-4">
        <h3 class="text-lg font-semibold text-gray-900">Schrijf je in voor onze nieuwsbrief</h3>
        <form @submit.prevent="submitEmail" class="flex max-w-md gap-x-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="off" class="min-w-0 flex-auto px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Je e-mailadres" />
            <button type="submit" class="flex-none bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Inschrijven</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const submitEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value && emailPattern.test(email.value)) {
        alert(`Bedankt voor je inschrijving, ${email.value}!`);
        email.value = '';
    } else {
        alert('Voer een geldig e-mailadres in.');
    }
};
</script>