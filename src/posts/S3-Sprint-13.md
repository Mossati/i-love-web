---
title: Second post
description: First post.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

## Markdown

### Learning Journal
## Semester 3 Sprint 13

## 02-09-2024
We zijn begonnen met het gebruiken van Svelte Kit en hebben daarvoor Svelte moeten installeren in de repo voor de squad page.

Stappen om SvelteKit te installeren:
- ```npm create svelte@latest my-app```
- ```cd my-app```
- ```npm install```
- ```npm run dev -- --open```

Bronnen:
- [SvelteKit](https://kit.svelte.dev/)

## 04-09-2024
Het verschil tussen Svelte en SvelteKit.

### Svelte
- Svelte is een frontend JavaScript-framework waarmee je webapplicaties kunt bouwen
het verschilt van andere frameworks (zoals React) doordat het de meeste van zijn werk tijdens
de compileertijd doet in plaats van tijdens runtime.

### SvelteKit
- SvelteKit is een complete applicatieframework dat bovenop Svelte is gebouwd.
Het biedt een set tools en functies om complexe, webapplicaties te ontwikkelen,
waaronder routing, server-side rendering (SSR), en statische sitegeneratie (SSG).

De bestandstructuur van SvelteKit.

### src:
Hier zitten alle bestanden en code die je maakt voor je applicatie.

src/routes/
- Dit is de map waar je pagina's en routes aanmaakt.
- Elke 'slug' wordt gebruikt als route en moet hetzelfde naam hebben als de API url paden.

+page.svelte
- Dit is het bestand dat de UI voor een specifieke pagina bevat.

src/lib/:
- Dit is een map waarin je herbruikbare code plaatst, zoals componenten of functies die je in meerdere delen van je app wilt gebruiken.

### static
Hierin plaats je statische bestanden zoals afbeeldingen, lettertypen of andere assets die niet veranderen.

### svelte.config.js
Dit is het configuratiebestand voor SvelteKit. Hier kun je dingen instellen zoals adapter-opties

## 05-09-2024
Directus verbinden met SvelteKit.

```npm install @directus/sdk```
