---
title: Sprint 13 - Week 1
description: Learning Journal voor sprint 13 week 1
date: '2024-09-06'
categories:
  - sveltekit
  - svelte
  - directus
published: true
---

# Week 1
We zijn begonnen met werken aan Sveltekit en het bouwen van een Squadpage en Visitekaartje.

## 📅 Maandag - 02/09/2024
Vandaag hebben we geleerd hoe je Sveltekit kan gebruiken en installeren voor je eigen project.

Stappen die je moet volgen om Sveltekit te installeren voor je project.
```ts
npm create svelte@latest
npm install
npm run dev -- --open
```

### Bronnen
[SvelteKit](https://kit.svelte.dev/)

## 📅 Woensdag - 04/09/2024
Het verschil tussen Svelte en SvelteKit.

### Svelte
Svelte is een frontend JavaScript-framework waarmee je webapplicaties kunt bouwen
het verschilt van andere frameworks (zoals React) doordat het de meeste van zijn werk tijdens
de compileertijd doet in plaats van tijdens runtime.

### SvelteKit
SvelteKit is een complete applicatieframework dat bovenop Svelte is gebouwd.
Het biedt een set tools en functies om complexe, webapplicaties te ontwikkelen,
waaronder routing, server-side rendering (SSR), en statische sitegeneratie (SSG).

De bestandstructuur van SvelteKit.
```ts
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ ├ hooks.server.js
│ └ service-worker.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

**Src**<br>
Hier zitten alle bestanden en code die je maakt voor je applicatie.

**Src/routes/**<br>
Dit is de map waar je pagina's en routes aanmaakt.
Elke 'slug' wordt gebruikt als route en moet hetzelfde naam hebben als de API url paden.

**+Page.svelte**<br>
Dit is het bestand dat de UI voor een specifieke pagina bevat.

**Src/lib/:**<br>
Dit is een map waarin je herbruikbare code plaatst, zoals componenten of functies die je in meerdere delen van je app wilt gebruiken.

**Static**<br>
Hierin plaats je statische bestanden zoals afbeeldingen, lettertypen of andere assets die niet veranderen.

**Svelte.config.js**<br>
Dit is het configuratiebestand voor SvelteKit. Hier kun je dingen instellen zoals adapter-opties

## 📅 Vrijdag - 05/09/2024
Dit is hoe je Directus kan verbinden met Sveltekit om data te fetchen.
```ts
npm install @directus/sdk
```

voor het fetchen van data kunnen we de fetch functie gebruiken.
```js
//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from "$lib/fetch-json"

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load() {
  //een variable met een APi url voor person met id 56
  const url = 'https://fdnd.directus.app/items/person/56'
  //fetch de data uit de API url en sla het op in deze variable
  const person = await fetchJson(url)
  //return een object waarin person.data wordt meegegeven
  return {
    person: person.data
  }
}
```

Voor het gebruiken van deze functie moet je eerst een bestand aanmaken genaamd "fetch-json.js" in de lib folder met de volgende code.
```js
/**
 * An asynchronous helper function that wraps the standard node.js fetch API.
 * This function calls an API url passed as the first and mandatory parameter,
 * there is an optional payload parameter to send a json object, eg. a filter.
 * It then calls the API and returns the response body parsed  as a json object.
 * @example <caption>fetchJson as returning function using the await keyword</caption>
 * const data = await fetchJson('https://api-url.com/endpoint/')
 * @example <caption>fetchJson as oneliner using the then() structure.</caption>
 * fetchJson('https://api-url.com/endpoint/').then((data)=>{
 *  // use data...
 * })
 * @param {string} url the api endpoint to address
 * @param {object} [payload] the payload to send to the API
 * @returns the response from the API endpoint parsed as a json object
 */
export default async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
      .then((response) => response.json())
      .catch((error) => error)
  }
```

### Bronnen
[Getting started with directus & sveltekit](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)
