/**
 * Bestandsnaam: CustomerService.vue
 * Auteur: Fabio Vreede
 * Versie: v1.1.0
 * Datum: 2024-11-20
 * Tijd: 12:01:45
 * Doel: Dit component toont de contactgegevens van de klantenservice, zoals telefoonnummer, openingstijden en e-mail.
 */

<template>
    <div class="space-y-2 bg-slate-200 rounded-lg p-4">
        <!-- TItel van de klantenservice -->
        <h3 class="text-lg font-semibold text-gray-900">Klantenservice</h3>
        <!-- Container voor alle klantenservice informatieblokken -->
        <div class="space-y-4">
            
            <!-- Informatieblok telefoonnummer -->
            <div>
                <h4 class="text-sm font-semibold">Telefoonnummer</h4>
                <p class="text-sm text-gray-700">Bel ons op <strong>0900-1234567</strong> voor al je vragen!</p>
            </div>

            <!-- Informatieblok openingstijden -->
            <div>
                <h4 class="text-sm font-semibold">Openingstijden</h4>
                <p class="text-sm text-gray-700">
                Maandag - Vrijdag: 09:00 - 18:00<br>
                Zaterdag: 10:00 - 16:00<br>
                Zondag: Gesloten
                </p>
            </div>

            <!-- Informatieblok e-mailadres -->
            <div>
                <h4 class="text-sm font-semibold">E-mail</h4>
                <p class="text-sm text-gray-700">Stuur ons een bericht via <strong><a href="mailto:klantenservice@commodiumcopia.nl">klantenservice@commodiumcopia.nl</a></strong></p>
            </div>
        </div>
    </div>
</template>