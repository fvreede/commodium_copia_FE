<template>
    <Disclosure as="nav" class="bg-slate-100 fixed w-full top-0 z-50" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button @click="toggleButton('search')" class="relative rounded-full p-2 text-gray700 hover:bg-slate-200 hover:text-gray-900">
                            <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <!-- Logo -->                   
                    <div class="flex flex-shrink-0 items-center">
                        <a href="/" class="text-2xl font-bold text-gray-700">Commodium Copia</a>
                    </div>
                    <!-- Search bar -->
                    <div class="hidden sm:ml-6 sm:block">
                        <input type="search" placeholder="Zoek een product" v-model="searchQuery" class="w-full max-w-md rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm"/>
                    </div>
                    <!-- Nav bar -->
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-slate-50 text-gray-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
                        </div>
                    </div>
                </div>
                <!-- Menu button - mobile -->
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <DisclosureButton @click="toggleButton('menu')" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-slate-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                        <span class="absolute -inset-0.5"/>
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!menuOpen" class="block h-6 w-6" aria-hidden="true"/>
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
                    </DisclosureButton>
                </div>
                <!-- End menu button - mobile -->
                <div class="absolute inset-y-0 right-10 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Shopping cart button -->
                    <button type="button" class="relative rounded-full bg-slate-50 p-1 text-gray-700 hover:bg-slate-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                        <span class="absolute -inset-1.5"/>
                        <span class="sr-only">Show shopping cart</span>
                        <ShoppingCartIcon class="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <!-- End shopping cart button -->
                    
                    <!-- Profile dropdown (Account) -->
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

        <div v-if="showSearch && !menuOpen" class="sm:hidden px-4 pb-3 pt-2">
            <input type="search" placeholder="Zoek een product" v-model="searchQuery" class="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm"/>
        </div>

        <DisclosurePanel v-if="menuOpen" class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-slate-50 text-gray-700' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const navigation = [
    { name: 'Producten', href: '/category' },
    { name: 'Aanbiedingen', href: '#' },
]

const activeButton = ref(null);
const menuOpen = ref(false);

const showSearch = computed(() => activeButton.value === 'search')
const profileOpen = computed(() => activeButton.value === 'profile')

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
</script>