<script lang="ts">
	import * as config from '$lib/config'
    import Toggle from './toggle.svelte'
</script>

<nav>
  <!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

  <!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/journal">Journal</a>
		</li>
		<li>
			<a href="/loveweb">We Love Web</a>
		</li>
		<li>
			<a href="/experiments">Experimenten</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>

  <!-- Theme -->
  <Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
		align-items: center;
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
