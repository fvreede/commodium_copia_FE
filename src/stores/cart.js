import { defineStore } from 'pinia';
import mockData from '@/data/mockData.json';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    // Add totalItems getter to track cart count
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    
    // Existing getters
    subtotal: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
    total: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 5, // Shipping cost
    
    // Add formatted price getters for display
    formattedSubtotal: (state) => { return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(state.subtotal); }, 
    formattedTotal: (state) => { return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(state.total); }, 
  },
  
  actions: {
    addToCart(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    
    removeFromCart(product) {
      this.items = this.items.filter((item) => item.id !== product.id);
    },
    
    updateQuantity(product, quantity) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        // Add validation to prevent negative quantities
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeFromCart(product);
        }
      }
    },
    
    // Optional: Add convenience methods
    clearCart() {
      this.items = [];
    },
    
    decrementQuantity(product) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(product);
        }
      }
    }
  }
});