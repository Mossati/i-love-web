---
title: CSS - :has pseudo-class
description: CSS
date: '2025-03-29'
categories:
  - Experimenten
published: true
---

# CSS - :has pseudo-class

## Beschrijving
Met de :has pseudo-class kan je een parent stijlen op basis van de children elementen.

## Voorbeeld
In dit voorbeeld geef ik een border aan de parent als het een "a" element bevat.

```html
<p><a>Link</a>Voorbeeld tekst.</p>
```

```css
p:has(a) {
  border: 0.1rem solid green;
}
```

## Bronnen
- https://www.joshwcomeau.com/css/has/?utm_source=CSS-Weekly&utm_campaign=Issue-592&utm_medium=web
