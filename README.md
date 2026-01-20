# Commodium Copia

## Inhoudsopgave
1.  [Inleiding](#inleiding)
2.  [Projectbeschrijving](#projectbeschrijving)
3.  [Gebruikte tools](#gebruikte-tools)
4.  [Projectstructuur](#projectstructuur)
5.  [Installatie en Setup](#installatie-en-setup)
6.  [Toekomstige ontwikkelingen](#toekomstige-ontwikkelingen)
7.  [Feedback](#feedback)

---
## Inleiding

Dit is de frontend van mijn huiswerkopdracht voor de MBO4 Softwareontwikkeling aan de LOI. Het project maakt gebruik van Vue.js en TailwindCSS om een gebruiksvriendelijke en responsieve interface te creëren voor mijn e-commerce website, Commodium Copia. Deze frontend zal later worden geïntegreerd met Laravel voor de backend-functionaliteit, waardoor een compleet en dynamisch systeem ontstaat.

**Live Demo**: [Commodium Copia](https://commodium-copia-fe-67wm.vercel.app)

## Projectbeschrijving

De supermarkt Commodium Copia, vanaf hier genoemd 'klant', wil een nieuwe website laten ontwikkelen om haar concurrentiepositie in de huidige markt te behouden. Zij richt hiervoor een aparte bv op voor de online verkoop, die integreert met de huidige distributie- en ICT-systemen.

Het belangrijkste onderdeel van deze nieuwe website is het thuis kunnen laten bezorgen van producten bij klanten. Andere supermarktketens lopen op dit moment voor in deze ontwikkeling: Halbert Eijn, Jombu en Vamor bieden allemaal al mogelijkheden om hun producten thuis te laten bezorgen.


## Gebruikte tools

### Frontend:

1. Vue.js 3.5.11
2. Vue Router 4.4.5
3. Tailwind.css 3.4.1
4. Heroicons/Headless UI
5. Postcss 8.4.38
6. Autoprefixer 0.4.19
7. Fontawesome brands icons (for Social media icons)
8. Pinia 2.2.4 for state management

---

## Projectstructuur

Hier volgt een overzicht van de belangrijkste bestanden en mappen binnen het project, inclusief een korte beschrijving van hun functies:

### src/components

- [**NavBar.vue**](src/components/NavBar.vue)  
  De navigatiebalk voor eenvoudige toegang tot de belangrijkste pagina’s van de website.

- [**PromoSection.vue**](src/components/PromoSection.vue)  
  Bevat een seizoensgebonden promotie met een visuele achtergrond en een CTA-knop. Momenteel ligt de focus op herfstproducten, en er is een actieknop om direct naar de winkelpagina te gaan en een korting te claimen.

- [**ProductGrid.vue**](src/components/ProductGrid.vue)  
  Een gridweergave van de producten, met afbeeldingen, namen en prijzen.

- [**NewsSection.vue**](src/components/NewsSection.vue)  
  Deze sectie toont nieuws en updates van Commodium Copia.

- [**Footer.vue**](src/components/Footer.vue)  
  De voettekst die op elke pagina verschijnt, samengesteld uit de volgende componenten:
  - [**SocialLinks.vue**](src/components/SocialLinks.vue): Bevat links naar de sociale media-accounts van Commodium Copia.
  - [**NewsLetterSignup.vue**](src/components/NewsLetterSignup.vue): Een compact inschrijfformulier voor de nieuwsbrief van Commodium Copia.
  - [**CustomerService.vue**](src/components/CustomerService.vue): Bevat de contactgegevens van de klantenservice, inclusief telefoonnummer, openingstijden en e-mailadres. Deze sectie biedt klanten een gemakkelijke manier om contact op te nemen met de klantenservice en om te weten wanneer ze bereikbaar zijn.

### src/view

- [**HomePage.vue**](src/views/Homepage.vue)  
  De layout van de startpagina van Commodium Copia, samengesteld uit:
  - **NavBar.vue**
  - **PromoSection.vue**
  - **ProductGrid.vue**
  - **NewsSection.vue**
  - **Footer.vue**

- [**CategoryPage.vue](src/views/CategoryPage.vue), [SubcategoryPage.vue](src/views/SubcategoryPage.vue), [ProductPage.vue**](src/views/ProductPage.vue)  
  Deze drie views zorgen voor de navigatie tussen productcategorieën, subcategorieën en productdetails, met koppelingen via `router-link` voor een naadloze gebruikerservaring.

### src/data

- [**mockData.json**](src/data/mockData.json)  
  Alle data voor **CategoryPage.vue**, **SubcategoryPage.vue**, en **ProductPage.vue** is opgeslagen in dit bestand. Na goedkeuring door de docent zal deze data worden omgezet naar een database voor verdere ontwikkeling.

### src/router

- [**index.js**](src/router/index.js)  
  Bevat de routerconfiguratie om navigatie tussen pagina’s mogelijk te maken.

## Installatie en Setup

### Vereisten:
Voor het draaien van dit project zijn de volgende vereisten nodig:

- [**Node.js**](https://nodejs.org/en) (v16.0.0 of hoger)
- [**npm**](https://www.npmjs.com) (v8.0.0 of hoger)

Controleer of deze zijn geïnstalleerd met de volgende commando’s:
```bash
node -v
npm -v
```
---
### Installatiestappen

1. **Pak het project uit**
   - Download en pak het projectbestand uit in de gewenste map.

2. **Installeer afhankelijkheden**
   - Open een terminal in de root-directory van het project en voer het volgende commando uit:
     ```bash
     npm install
     ```
   - Dit installeert alle noodzakelijke afhankelijkheden die zijn vermeld in het `package.json`-bestand.

3. **Start het project lokaal**
   - Om de ontwikkelserver te starten:
     ```bash
     npm run dev
     ```
   - De server zal starten op `http://localhost:5173`. Open deze URL in je webbrowser.

## Toekomstige ontwikkelingen

- Backend integratie met Laravel
- Authenticatie en authorisatie met Breeze
- API integratie met Inertia
- Implementatie van een winkelwagen systeem
- Implementatie van een CMS

## Feedback
De feedback van de docent heeft geleid tot de volgende aanpassingen:
- **Headers en Commentaar**: Toegevoegd in alle componenten voor betere documentatie en leesbaarheid.
- **Bestandsgrootte**: Gecontroleerd en beperkt tot een maximale grootte van 200 MB.
- **Projectstructuur**: De front-end is gestructureerd met 4 views: een homepage en drie productgerelateerde pagina's.
- **Leesmijbestand**: Beschrijving van alle gebruikte bestanden, installatie-instructies, en projectstructuur toegevoegd. 
