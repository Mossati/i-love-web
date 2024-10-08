<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import { StickyNote } from 'lucide-svelte';

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>We Love Web</h1>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title"><StickyNote /> {post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
        display: flex;
        flex-direction: row;
        align-items: center;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
