<template>
    <div class="space-y-2 bg-slate-200 rounded-lg p-4">
        <h3 class="text-lg font-semibold text-gray-900">Volg ons:</h3>
        <div class="space-x-4">
            <a href="#" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faFacebookSquare" class="w-8 h-8"/>
            </a>
            <a href="#" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faXTwitter" class="w-8 h-8"/>
            </a>
            <a href="#" class="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon :icon="faInstagramSquare" class="w-8 h-8"/>
            </a>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookSquare, faXTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
</script>