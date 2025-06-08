---
title: Blob-shapes met `clip-path: shape()`
description: Maak complexe, organische vormen en vloeiende blob-achtige contouren direct in CSS met de nieuwe `shape()`-functie van `clip-path`.
date: '2025-05-22'
categories:
  - Experimenten
published: true
---

# Blob-shapes met `clip-path: shape()`

## Beschrijving
Met `clip-path: shape()` kun je in CSS eenvoudig afgeronde of willekeurig complexe vormen definiëren zonder afbeeldingen of SVG’s. Je geeft een vormbeschrijving mee (bijvoorbeeld een polygon met bochten) en de browser knipt het element daarop bij.

## Voorbeeld
Hieronder definieer je een organische blob-vorm door middel van een `circle()` en meerdere gemengde paden:

```css
.blob {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #FF6B6B, #FFD93D);
  clip-path: shape(
    inset(0 round 50% 50% 40% 40%) 
    circle(50% at 70% 30%)
    polygon(25% 5%, 75% 10%, 90% 50%, 60% 90%, 10% 80%)
  );
}
```

## Bronnen
- https://frontendmasters.com/blog/creating-blob-shapes-using-clip-path-shape/?utm_source=CSS-Weekly&utm_campaign=Issue-613&utm_medium=web