<template>
    <NavBar />
    <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Categorieën</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div v-for="category in categories" :key="category.name" class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img :src="category.imageSrc" :alt="category.imageAlt" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                <a :href="category.href">
                    <span class="absolute inset-0" />
                    {{ category.name }}
                </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">{{ category.description }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

import groentenFruitImg from '@/assets/images/categories/groenten-fruit.jpg';
import bakkerijBroodImg from '@/assets/images/categories/bakkerij-brood.jpg';
import zuivelEierenImg from '@/assets/images/categories/zuivel-eieren.jpg';

const categories = [
    {
        name: 'Groenten en Fruit',
        imageSrc: groentenFruitImg,
        imageAlt: 'Groenten en fruit',
        href: '#',
        description: 'Ontdek de lekkerste groenten en fruit van het seizoen.'
    },
    {
        name: 'Bakkerij en Brood',
        imageSrc: bakkerijBroodImg,
        imageAlt: 'Bakkerij en brood',
        href: '#',
        description: 'Vers brood en gebak, elke dag vers gebakken.'
    },
    {
        name: 'Zuiveel en Eieren',
        imageSrc: zuivelEierenImg,
        imageAlt: 'Zuivel en eieren',
        href: '#',
        description: 'Verse zuivel en eieren, rechtstreeks van de boerderij.'
    },
]
</script>