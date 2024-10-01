<template>
    <div class="relative h-screen">
        <!-- Background image -->
        <img src="/src/assets/images/herfstPromotion.jpg" alt="Herfst promotie" class="absolute inset-0 h-full w-full object-cover"/>

        <!-- Overlay for readability -->
        <div class="absolute inset-0 bg-black opacity-30"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <h1 class="h_text text-4xl font-bold tracking-tight sm:text-5xl">De herfst is gearriveerd - vers van het land op jouw bord!</h1>
            <p class="p_text mt-4 text-xl">Deze week kun je genieten van de beste herfstproducten, sappige appels, pompoenen, en alles wat je nodig hebt om die cozy gerechten op tafel te zetten. Oh, en psst... we hebben ook iets lekkers voor bij de warme choco!</p>
            <a href="#" class="cta_button mt-8 inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">Shop nu en krijg 15% korting op je eerste bestelling</a>
        </div>
    </div>
</template>

<style scoped>
.h_text {
    color: #F6EBD8;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.p_text {
    color: #EDE4D9;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    line-height: 1.50;
    max-width: 600px;
}
</style>