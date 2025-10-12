<script lang="ts">
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics();

	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

{@render children?.()}
