<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-[200]" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed top-16 bottom-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-slate-200 shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <!-- Dialog title and close button -->
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-2xl font-bold text-gray-900">Winkelwagen</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="$emit('close')">
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <!-- End dialog title and close button -->
                    
                    <!-- Add your cart content here -->
                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <!-- Cart items -->
                          <li v-for="item in cartStore.items" :key="item.id" class="flex py-6">
                            <!-- Product image -->
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="resolveImagePath(item.imageSrc)" :alt="item.name" class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {{ item.name }}
                                  </h3>
                                  <p class="ml-4">{{ item.price.toFixed(2) }}</p>
                                </div>
                                <div class="flex">
                                  <h4>
                                    <!-- Link naar product -->

                                  </h4>
                                </div>
                              </div>
                              <!-- QUantity controls -->
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <div class="flex items-center space-x-3">
                                  <span class="text-gray-500">Aantal:</span>
                                  <div class="flex items-center border border-gray-300 rounded">
                                    <button @click="cartStore.decrementQuantity(item)" class="px-2 py-1 text-gray-600 hover:bg-gray-100">
                                      <MinusIcon class="h-3 w-3"/>
                                    </button>
                                    <span class="px-2 py-1">{{ item.quantity }}</span>
                                    <button @click="cartStore.addToCart(item)" class="px-2 py-1 text-gray-600 hover:bg-gray-100">
                                      <PlusIcon class="h-3 w-3"/>
                                    </button>
                                  </div>
                                </div>
                                <button type="button" class="font-medium text-red-600 hover:text-red-500" @click="cartStore.removeFromCart(item)">
                                  <TrashIcon class="h-5 w-5" />
                                </button>
                              </div>

                              <!-- Item total -->
                              <div class="mt-2 text-sm text-gray-500">
                                Totaal: {{ (item.price * item.quantity).toFixed(2) }}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- Empty cart message -->
                    <div v-if="cartStore.items.length === 0" class="flex flex-col items-center justify-center py-12">
                      <ShoppingCartIcon class="h-12 w-12 text-gray-400 mb-4" />
                      <p class="text-lg font-medium text-gray-900">De winkelwagen is leeg</p>
                      <p class="mt-1 text-sm text-gray-500">Voeg artikelen toe aan uw winkelwagen!</p>
                    </div>
                  </div>

                  <!-- Cart footer -->
                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flow-root">
                      <div class="flex justify-between text-base font-medium text-gray-900 mb-2">
                        <p>Subtotaal</p>
                        <p>€{{ cartStore.subtotal.toFixed(2) }}</p>
                      </div>
                    </div>
                    <div class="flex justify-between text-lg fond-bold text-gray-900">
                      <p>Totaal</p>
                      <p>€{{ cartStore.total.toFixed(2) }}</p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <button type="button" :disabled="cartStore.items.length === 0" class="w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base text-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed" >Verder naar bestellen</button>
                  </div>
                  <div class="mt-6 mb-4 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      of{{ ' ' }}
                      <button type="button" class=" font-medium text-indigo-600 hover:text-indigo-500" @click="$emit('close')">
                        ga verder met winkelen
                        <span aria-hidden="true">&rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon, TrashIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/stores/cart';

// Props
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

// Emits
defineEmits(['close']);

// Initialize the cart store
const cartStore = useCartStore();

const subtotal = computed(() => cartStore.subtotal);
const total = computed(() => cartStore.total);

const resolveImagePath = (path) => {
    return new URL(`../${path}`, import.meta.url).href;
}
</script>