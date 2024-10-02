<template>
    <section class="news-section py-10 bg-slate-50">
        <h2 class="text-3xl font-bold text-center mb-8">Laatste Nieuws</h2>
        <div class="news-card bg-white p-6 rounded shadow mx-auto max-w-lg">
            <img src="/src/assets/images/herfstPromotion.jpg" alt="Herfst promotie" class="w-full h-48 object-cover mb-4 rounded">
            <h3 class="text-xl font-semibold">Herfst Promoties zijn hier!</h3>
            <p class="text-gray-600 mt-2">Ontdek onze nieuwste herfstaanbiedingen en geniet van geweldige kortingen!</p>
            <a href="#" class="mt-4 inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-4 rounded-full hover:from-orange-500 hover:to-orange-700 transition transform hover:scale-105 hover:shadow-lg">Lees meer</a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            newsItem: {
            title: "Herfst Promoties zijn hier!",
            summary: "Ontdek onze nieuwste herfstaanbiedingen en geniet van geweldige kortingen!",
            image: "/src/assets/images/herfstPromotion.jpg",
            },
        };
    },
};
</script>

<style scoped>
.news-card {
    transition: transform 0.3s, box-shadow 0.3s;
}
.news-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
a {
    transition: background-color 0.3s transform 0.2s;
}
</style>