<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(dateStr: string): string {
		if (!dateStr) return '';
		const d = new Date(dateStr);
		return d.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>{data.title} | Lukáš Marek</title>
	<meta name="description" content={data.title} />
</svelte:head>

<main class="page-root">
	<div class="page-inner">
		<!-- ── Back link ────────────────────────────────────────────── -->
		<div class="page-nav animate-fade-up" style="animation-delay: 0ms">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/blog" class="back-link">
				<span class="back-arrow">←</span>
				Blog
			</a>
		</div>

		<!-- ── Article ──────────────────────────────────────────────── -->
		<article class="article animate-fade-up" style="animation-delay: 60ms">
			<header class="article-header">
				<h1 class="article-title">{data.title}</h1>
				<div class="article-meta">
					{#if data.date}
						<time class="article-date">{formatDate(data.date)}</time>
					{/if}
					{#if data.tags.length > 0}
						<span class="meta-sep">·</span>
						<span class="article-tags">
							<!-- eslint-disable svelte/require-each-key -->
							{#each data.tags as tag}
								<span class="tag">#{tag}</span>
							{/each}
							<!-- eslint-enable svelte/require-each-key -->
						</span>
					{/if}
				</div>
				<div class="header-rule"></div>
			</header>

			<div class="prose max-w-none" lang={data.lang}>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html data.html}
			</div>
		</article>

		<!-- ── Footer nav ───────────────────────────────────────────── -->
		<div class="page-footer-nav animate-fade-up" style="animation-delay: 120ms">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/blog" class="back-link">
				<span class="back-arrow">←</span>
				Archiv článků
			</a>
		</div>
	</div>
</main>

<style>
	.page-root {
		min-height: 100svh;
		padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem);
	}

	.page-inner {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	/* ── Nav ──────────────────────────────────────────────────── */

	.page-nav,
	.page-footer-nav {
		display: flex;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.8rem;
		color: var(--fg-faint);
		letter-spacing: 0.02em;
		transition: color 0.15s ease;
	}

	.back-link:hover {
		color: var(--accent);
	}

	.back-arrow {
		font-size: 0.9rem;
	}

	/* ── Article ──────────────────────────────────────────────── */

	.article {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 10px;
		padding: clamp(1.5rem, 4vw, 3rem);
	}

	.article-header {
		margin-bottom: 2.5rem;
	}

	.article-title {
		font-family: 'Ubuntu Mono', monospace;
		font-size: clamp(1.4rem, 3.5vw, 2rem);
		font-weight: 700;
		color: var(--fg);
		letter-spacing: -0.02em;
		line-height: 1.25;
		margin: 0 0 1rem 0;
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
	}

	.article-date {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.75rem;
		color: var(--fg-faint);
		letter-spacing: 0.03em;
	}

	.meta-sep {
		color: var(--fg-faint);
		font-size: 0.75rem;
	}

	.article-tags {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.7rem;
		color: var(--accent);
		opacity: 0.75;
		letter-spacing: 0.02em;
	}

	.header-rule {
		height: 1px;
		background: linear-gradient(to right, var(--border), transparent);
	}
</style>
