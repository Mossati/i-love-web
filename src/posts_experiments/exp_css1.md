---
title: CSS - If() functie
description: CSS
date: '2025-03-29'
categories:
  - We Love Web
published: true
---

# CSS - if() functie

## Beschrijving
De if() functie in CSS werkt als een eenvoudige voorwaardelijke check. 
Het vergelijkt een conditie en kiest op basis daarvan een waarde.

## Voorbeeld
In dit voorbeeld maak ik gebruik van de if() functie om te checken of de variabelen --wide gelijk is aan 1 als dat
zo is wordt de breedte 300px anders 200px.

```css
.card {
    width: if(var(--wide) == 1, 300px, 200px);
}
```

## Bronnen
- https://www.bram.us/2025/02/18/css-at-function-and-css-if/?utm_source=CSS-Weekly&utm_campaign=Issue-606&utm_medium=web
