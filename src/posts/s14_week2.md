---
title: Sprint 14 - Week 2
description: Learning Journal voor sprint 14 week 2
date: '2024-10-04'
categories:
  - sveltekit
  - svelte
  - directus
published: true
---

# Week 2
We werken verder aan het Deloitte project voor de opdrachtgever.

## 📅 Maandag - 30/09/2024
We hebben een workshop gehad over de structuur van Sveltekit en wat alles precies inhoud.

### Structuur
De structuur van Sveltekit is als volgt. (Dit is al in een andere journal vermeld)
app.html: Dit bestand is de core van je project, het laad alles in om een pagina te tonen.
/routes: Deze folder bevat alle routes van je project, deze map is verplicht in een Sveltekit project omdat het nodig is om een pagina te laden.
lib/server: Deze folder is alleen voor server-side code zoals API_KEYS en/of wachtwoorden.
/static: Deze folder bevat statisch bestanden die niet elke keer gebuild hoeven te wordne door Sveltekit zoals afbeeldingen of een global.css bestand.
gitignore: Dit bestand bevat informatie over delen code die je niet naar Github wil pushen.
package.json: Dit bestand bevat alle nodige packages voor je project.
svelte.config: Dit bestand bevat de configuratie van je Sveltekit project.
vite.config: Dit bestand is een build tool voor je project.

### Routing
Voor frameworks wordt routing zelf ingesteld je hoeft alleen een folder te creeëren in de routes folder
en dan wordt er een route voor aangemaakt.
Je hebt 2 verschillende soorten routes: Static en Dynamic.
Een static route is een normale route met een naam van de route.
Een dynamic route is een route die een slug bevat oftwel een waarde die mee wordt gegeven vanuit een andere pagina,
deze route heeft dus geen vaste naam zoals de static route maar past zich aan aan de waarde die wordt meegegeven.

### Error Handling
Met Sveltekit is het mogeijk om een error pagina te tonen als er bijvoorbeeld iets mis is met een bestand of de url van je pagina.
Dit kan worden gedaan door in de routes folder een +error.svelte bestand aan te maken, waneer de gebruiker op een niet bestaande pagina komt
wordt hij verwezen naar dit bestand.
Als je unieke error pagina's wil aanmaken voor elke route kan dat ook door de +error.svelte bestand te plaatsen in de folder van een route.

Als Sveltekit niet werkt kan je ook een +error.html bestand aanmaken in de src folder, deze pagina wordt alleen getoont als Sveltekit 
niet kan draaien voor de gebruiker.

### Layout
Als je pagina's hebt die hetzeflde layout gebruiken voor de structuur van een pagina is het handig om een +layout.svelte bestand aan te maken.
In dit bestand kan je een bepaald layout instellen die automatisch wordt toegepast op alle pagina's van je project.
Dit doe je door het bestand in de routes folder te plaatsen, dit zorgt ervoor dat het op alle routes wordt toegepast.

### Loading Data
Om data in te laden vanuit Sveltekit kan je twee manieren gebruiken: +page.js en +page.server.js
Het verschil tussen deze twee bestanden is de +page.js client-side is en +page.server.js server-side.

### Binding
Je kan met Sveltekit ook variabelen binden aan elementen waardoor je ze direct kan aanpassen.
In dit voorbeeld heb je een name variabelen met een waarde een een shout variabelen die name combineerd met een string.
De $: voor de shout variabelen zorgt ervoor dat het reactive wordt waardoor het in real-time aangepast wordt.
Het input element heeft een bind atrribuut die wordt verbonden aan de name variabelen dit zorgt ervoor dat wanneer je iets in het input
veld typt dat automatisch de name variabelen wordt aangepast op basis van wat jij typt.

```js
<script>
  let name = 'world'
  $: shout = name + 'hoi'
</script>

<input bind:value={name}>

<p>hello {name}</p>
<p>{shout}</p>
```

### Library
Hieraan plaats je al je componenten die je vervolgens met een import in een ander bestand kan ophalen.

```js
import <Naam> from '$lib/<Naam>.svelte';
```

### Component
Een component is een stukje code die je kan importeren in andere bestanden, componenten zorgen ervoor dat je voorkomt om
hetzelfde code overnieuw te schrijven in andere bestanden. 
Dit is een manier van DRY coding (Don't Repeat Yourself).
Je kan doormiddel van de export functie data van een componenten meegeven aan andere bestanden en met een bind kan je data
aan een component meegeven.

## 📅 Woensdag - 02/10/2024
We hebben een workshop gehad over Design Critique, en hierbij hebben we principles geleerd die je kan toepassen om
een functionerend ontwerp te maken.

### Design Principles
Good design is innovative
Good design makes a product useful
Good design is aesthetic
Good design makes a product understandable
Good design is unobtrusive
Good design is honest
Good design is long-lasting
Good design is thorough down to the last detail
Good design is environmentally friendly
Good design is as little design as possible

## 📅 Vrijdag - 04/10/2024
Code/Design review en We Love Web
