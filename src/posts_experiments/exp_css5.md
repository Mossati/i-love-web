---
title: Rolldown-Vite
description: Een snelle Rust-gebaseerde JavaScript-bundler ontworpen als drop-in vervanging voor Vite, met significante snelheids- en geheugenkortingen.
date: '2025-05-30'
categories:
  - Experimenten
published: true
---

# Rolldown-Vite

## Beschrijving
De `rolldown-vite` bundler is een drop-in vervanging voor de standaard Vite-bundler. Onder de motorkap gebruikt het Rolldown, een Rust-gebaseerde bundler, en de Oxc toolchain voor parsing, transformeren en minificatie. Zo profiteer je direct van snellere builds en lager geheugengebruik zonder je bestaande Vite-configuratie aan te passen.

## Voorbeeld
Vervang in je bestaande Vite-project het `vite`-pakket door `rolldown-vite` via een alias in `package.json`:

```json
{
  "dependencies": {
    "vite": "npm:rolldown-vite@latest"
  }
}
```

## Bronnen
- https://voidzero.dev/posts/announcing-rolldown-vite