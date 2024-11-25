/**
 * @file cart.js
 * @version v1.0.2
 * @date 2024-10-29 17:54:42
 * @author Fabio Vreede
 * @description Store voor het beheren van de winkelwagenfunctionaliteit in Commodium Copia. Biedt acties voor het toevoegen, bijwerken, en verwijderen van items in de winkelwagen, en berekent de totalen en hoeveelheden voor weergave in de UI.
 * 
 * @dependencies:
 * - Pinia (defineStore)
 * - mockData.json: Mock data bestand voor productgegevens
 */

import { defineStore } from 'pinia'; // Importeer Pinia's defineStore functie voor het maken van de store
import mockData from '@/data/mockData.json'; // Importeer mock data als tijdelijke productgegevens

// Definieer de winkelwagen-store met de naam 'cart'
export const useCartStore = defineStore('cart', {
  // Definieer de initiële state van de winkelwagen
  state: () => ({
    items: [] // Een lege array om producten in de winkelwagen bij te houden
  }),
  
  getters: {
    // Getter om het totale aantal artikelen in de winkelwagen te berekenen
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    
    // Bestaande getters om de subtotaalprijs te berekenen
    subtotal: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),

    // Berekent de totaalprijs inclusief verzendkosten (vast bedrag van €5)                                                                    
    total: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 5,       

    // Geformatteerde subtotaalprijs voor weergave in het EUR-format
    formattedSubtotal: (state) => { 
      return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(state.subtotal); 
    }, 

    // Geformatteerde totaalprijs voor weergave in het EUR-format
    formattedTotal: (state) => { 
      return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(state.total); 
    }
  },
  
  actions: {
    // Voeg een product toe aan de winkelwagen
    addToCart(product) {
      // Controleer of het product al in de winkelwagen zit
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Verhoog de hoeveelheid als het product al bestaat
        existingItem.quantity++;
      } else {
        // Voeg het product toe met een initiële hoeveelheid van 1 als het nog niet bestaat
        this.items.push({ ...product, quantity: 1 });
      }
    },
    
    // Verwijder een product volledig uit de winkelwagen
    removeFromCart(product) {
      this.items = this.items.filter((item) => item.id !== product.id);
    },
    
    // Werk de hoeveelheid van een product bij op basis van de opgegeven waarde
    updateQuantity(product, quantity) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        // Zorg ervoor dat de hoeveelheid niet negatief wordt
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeFromCart(product); // Verwijder het product als de hoeveelheid nul of negatief is
        }
      }
    },
    
    // Leeg de winkelwagen door alle items te verwijderen
    clearCart() {
      this.items = [];
    },
    
    // Verlaag de hoeveelheid van een product met 1
    decrementQuantity(product) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        // Verwijder het product als de hoeveelheid 1 bereikt, anders verlaag de hoeveelheid
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(product);
        }
      }
    }
  }
});
