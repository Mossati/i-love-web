---
title: Server-Sent Events in SvelteKit (Node)
description: Real-time eenrichtings-streaming met SSE in een SvelteKit-applicatie op Node.js, inclusief server-endpoint en client-component.
date: '2025-06-08'
categories:
  - API
published: true
---

# Server-Sent Events in SvelteKit (Node)

## Beschrijving
Met Server-Sent Events (SSE) kun je via een persistent HTTP-verbinding real-time updates van de server naar de client pushen, zonder polling. In SvelteKit gebruik je een `+server.ts` endpoint om de events te streamen en een Svelte-component om ze te consumeren.

## Voorbeeld

### Server-endpoint (src/routes/sse/+server.js)
```js
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      let counter = 0;

      const sendEvent = () => {
        counter += 1;
        const data = JSON.stringify({ count: counter, time: new Date().toISOString() });
        controller.enqueue(encoder.encode(`event: ping\ndata: ${data}\n\n`));
      };

      // stuur elke seconde een ping-event
      const interval = setInterval(sendEvent, 1000);

      // bij client-close stoppen we de interval
      return () => {
        clearInterval(interval);
        controller.close();
      };
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
};
```

### Client-side
```svelte
<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  let messages: { count: number; time: string }[] = [];

  let evtSource: EventSource;

  onMount(() => {
    evtSource = new EventSource('/sse');

    // standaard “message” event (kan ook weggelaten als we alleen custom events gebruiken)
    evtSource.onmessage = (e) => {
      console.log('Message:', e.data);
    };

    // luister op custom “ping” events
    evtSource.addEventListener('ping', (e: MessageEvent) => {
      const payload = JSON.parse(e.data);
      messages = [...messages, payload];
    });

    evtSource.onerror = (err) => {
      console.error('SSE-fout:', err);
      evtSource.close();
    };
  });

  onDestroy(() => {
    evtSource.close();
  });
</script>

<main>
  <h1>Server-Sent Events Demo</h1>
  <ul>
    {#each messages as msg}
      <li>#{msg.count} — {msg.time}</li>
    {/each}
  </ul>
</main>
```

## Bronnen
- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events