/**
 * Bestandsnaam: NavBar.vue
 * Auteur: Fabio Vreede
 * Versie: v1.9.0
 * Datum: 2024-10-29
 * Tijd: 13:41:07
 * Doel: Dit component definieert de navigatiebalk voor Commodium Copia, inclusief zoekfunctionaliteit, een winkelwagenicoon, een profielmenu en een mobiele versie van het menu. Het biedt gebruikers toegang tot verschillende pagina's en zorgt voor navigatie en interactie binnen de site.
 */

<template>
    <!-- Navigatiebalk met vaste positie aan de bovenkant -->
    <Disclosure as="nav" class="bg-slate-100 fixed w-full top-0 z-[1000]" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <!-- Zoekknop voor mobiele versie -->
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button @click="toggleButton('search')" class="relative rounded-full p-2 text-gray700 hover:bg-slate-200 hover:text-gray-900">
                            <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>

                    <!-- Logo, weergave afhankelijk van schermgrootte -->                   
                    <div class="flex flex-shrink-0 items-center mr-20 sm:mr-0">
                        <a href="/" class="text-2xl font-bold text-gray-700 block lg:hidden">ComCopia</a>
                        <a href="/" class="hidden lg:block text-2xl font-bold text-gray-700">Commodium Copia</a>
                    </div>

                    <!-- Zoekbalk, alleen zichtbaar op grotere schermen -->
                    <div class="hidden sm:ml-6 sm:block">
                        <input type="search" placeholder="Zoek een product" v-model="searchQuery" class="w-full max-w-md rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm"/>
                    </div>

                    <!-- Navigatieknoppen voor desktop -->
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-slate-50 text-gray-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
                        </div>
                    </div>
                </div>

                <!-- Knop voor menu op mobiele versie -->
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <DisclosureButton @click="toggleButton('menu')" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-slate-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                        <span class="absolute -inset-0.5"/>
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!menuOpen" class="block h-6 w-6" aria-hidden="true"/>
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
                    </DisclosureButton>
                </div>
                <!-- End menu button - mobile -->
                 
                <!-- Winkelwagenknop, inclusief badge voor item aantal -->
                <div class="absolute inset-y-0 right-10 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Shopping cart button -->
                    <div class="relative">
                        <button @click.stop="toggleCart" type="button" class="relative rounded-full bg-slate-50 p-1 text-gray-700 hover:bg-slate-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                            <span class="absolute -inset-1.5"/>
                            <span class="sr-only">Show shopping cart</span>
                            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true"/>
                            <span v-if="cartItemCount > 0" class="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full text-xs font-semibold leading-tight h-4 w-4 flex items-center justify-center" :class="{ 'scale-110': isCartUpdated }">
                                {{ cartItemCount }}
                            </span>
                        </button>
                    </div>
                    <!-- End shopping cart button -->
                    
                    <!-- Profiel dropdown met account-opties -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton @click="toggleButton('profile')" class="relative flex rounded-full bg-slate-50 p-1 text-gray-700 hover:bg-slate-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                                <span class="absolute -inset-1.5"/>
                                <span class="sr-only">Open user menu</span>
                                <UserIcon class="h-6 w-6" aria-hidden="true"/>
                            </MenuButton>
                        </div>
                        <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-50 py-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItems v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black']">Dashboard</a>
                                </MenuItems>
                                <MenuItems v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black']">Settings</a>
                                </MenuItems>
                                <MenuItems v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-500' : '', 'block px-4 py-2 text-sm text-black']">Sign out</a>
                                </MenuItems>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>

        <!-- Zoekveld specifiek voor mobiele weergave, weergegeven bij 'search' actie -->
        <div v-if="showSearch && !menuOpen" class="sm:hidden px-4 pb-3 pt-2">
            <input type="search" placeholder="Zoek een product" v-model="searchQuery" class="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm"/>
        </div>

        <!-- Mobiel navigatiemenu, weergegeven bij 'menu' actie -->
        <DisclosurePanel v-if="menuOpen" class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-slate-50 text-gray-700' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>

    <!-- Winkelwagencomponent dat geopend kan worden en sluit door event -->
    <ShoppingCart :isOpen="isCartOpen" @close="closeCart"/>
</template>

<script setup>
/**
 * Vue component setup voor NavBar.vue
 * Importeert en initialiseert de vereiste componenten, iconen, winkelwagen functionaliteit en methoden voor navigatie en interactieve elementen.
 */
import { computed, ref, watch } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import ShoppingCart from './ShoppingCart.vue'
import { useCartStore } from '@/stores/cart'

// Navigatieopties, de actieve button en menu status
const navigation = [
    { name: 'Producten', href: '/category' },
    { name: 'Aanbiedingen', href: '#' },
]

const activeButton = ref(null)
const menuOpen = ref(false)

// Variabelen voor de winkelwagencomponent
const isCartOpen = ref(false)
const isCartUpdated = ref(false)

// Verbindt de winkelwagenstore met het component om het aantal items bij te houden
const cartStore = useCartStore()
const cartItemCount = computed(() => cartStore.totalItems)

// Animeert het winkelwagenicoon wanneer het aantal items verandert
watch(cartItemCount, () => {
    isCartUpdated.value = true
    setTimeout(() => {
        isCartUpdated.value = false
    }, 300)
})

// Computed properties voor zoek- en profielopties
const showSearch = computed(() => activeButton.value === 'search')
const profileOpen = computed(() => activeButton.value === 'profile')

// Functie om actieve knop bij te houden en het menu open of dicht te klappen
const toggleButton = (button) => {
    if (activeButton.value === button) {
        activeButton.value = null;
        if (button === 'menu') {
            menuOpen.value = false
        }
    } else {
        activeButton.value = button;
        if (button === 'menu') {
            menuOpen.value = true;
        } else {
            menuOpen.value = false;
        }
    }
};

// Methoden om de winkelwagen te openen, sluiten en de status te togglen
const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
}

const closeCart = () => {
    isCartOpen.value = false;
}
</script>

<style scoped>
/* Stijl voor schaalvergroting animatie bij winkelwagen update */
.scale-110 {
    animation: pulse 0.3s ease-in-out;
}

/* Keyframes voor pulse-animatie */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
</style>