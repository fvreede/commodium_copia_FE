<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-slate-50">
        <article v-for="product in products" :key="product.id" class="bg-beige shadow-md rounded-lg p-4 flex flex-row items-start justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
            <div class="flex-1 pr-4">
                <h2 class="text-xl font-bold text-orange-700">{{ product.name }}</h2>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <a :href="product.link" class="bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 hover-shadow-xl">Bekijk product</a>
            </div>
            <div class="flex-shrink-0">
                <img :src="product.image" :alt="product.name" class="w-48 h-48 object-cover rounded-md border border-orange-700">
                <p class="text-orange-600 font-bold mt-1 text-2xl">{{ formatCurrency(product.price) }}</p>
            </div>
        </article>
    </section>
</template>

<script>
import { CurrencyEuroIcon } from '@heroicons/vue/24/outline';

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    description: 'Beschrijving van product 1',
                    image: 'link-to-image-1.jpg',
                    price: 19.99,
                    link: '#'
                },
                {
                    id: 2,
                    name: 'Product 2',
                    description: 'Beschrijving van product 2',
                    image: 'link-to-image-2.jpg',
                    price: 29.99,
                    link: '#'
                },
                {
                    id: 3,
                    name: 'Product 3',
                    description: 'Beschrijving van product 3',
                    image: 'link-to-image-3.jpg',
                    price: 39.99,
                    link: '#'
                }
            ]
        };
    },
    methods: {
        formatCurrency(value) {
            return '€' + value.toFixed(2).replace('.', ',');
        }
    }
};
</script>