---
title: CSS - Anchor Positioning
description: CSS
date: '2025-03-29'
categories:
  - Experimenten
published: true
---

# CSS -  Anchor Positioning

## Beschrijving
???

### Anchor-name
Een standaard element is geen anchor element om het een anchor element te maken moet je een anchor-name toewijzen
met een variabelen als naam.

```css
.anchor {
  anchor-name: --my-anchor;
}
```

### Position-anchor
Als je een anchor-name hebt ingesteld heb je een target nodig waar de anchor element aan vast moet worden gezet, dit doe
je met een position-anchor. Dit element is absoluut en gekoppeld aan het anchor element.

```css
.target {
  position: absolute;
  position-anchor: --my-anchor;
}
```

### Position-area
De volgende stap is om ons target-element te positioneren ten opzichte van zijn anchor. 
De eenvoudigste manier om dit te doen is met de position-area eigenschap, 
die een denkbeeldig 3×3-raster rond het anker-element creëert. 
Hiermee kunnen we het target-element in één of meerdere gebieden van dit raster plaatsen.

Het werkt door de rij en kolom van het raster in te stellen met logische waarden zoals 
start en end (afhankelijk van de schrijfrichting), fysieke waarden zoals top, left, right, bottom, 
en de gedeelde waarde center. Vervolgens wordt de IMCB (Inline-axis Minimum Containing Block) 
van het target-element verkleind zodat het binnen het gekozen rastergebied past.

```css
.target {
  position-area: top right;
  /* or */
  position-area: start end;
}
```

### Position-visibility
Het biedt bepaalde voorwaarden om het target uit de viewport te verbergen.

* **always:** Het target wordt altijd weergegeven, ongeacht de anchors of de overflowing status.
* **no-overflow:** Als het target na het toepassen van position fallbacks nog steeds overflowing is binnen zijn containing block, 
dan wordt het sterk verborgen.
* **anchors-visible:** Als de anchor (niet het target) volledig overflowed is uit zijn containing block of volledig bedekt is 
door andere elementen, dan wordt het target sterk verborgen.

```css
position-visibility: always | anchors-visible | no-overflow
```

## Voorbeeld
In dit voorbeeld plaats ik een tooltip boven de button.

```html
<div class="anchor">Klik hier</div>
<div class="target">Tooltip</div>
```

```css
.anchor {
  anchor-name: --my-anchor;
  background: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.target {
  position-anchor: --my-anchor;
  position-area: top center;
  position-visibility: anchors-visible;
  background: #ff5722;
  color: white;
  padding: 5px;
  border-radius: 3px;
}
```

## Bronnen
- https://css-tricks.com/css-anchor-positioning-guide/?utm_source=CSS-Weekly&utm_campaign=Issue-596&utm_medium=web
