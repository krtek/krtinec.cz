<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const helvetiPosts = [
		{
			title: 'Dive test: 14 ponorů s Citizen Promaster Aqualand JP2008-06E',
			date: '2026-03',
			url: 'https://blog.helveti.cz/dive-test-14-ponoru-s-citizen-promaster-aqualand-jp2008-06e/',
			tags: ['potápění', 'citizen', 'recenze']
		},
		{
			title: 'Dive test: 14 ponorů s Certina DS Super PH500M Special Edition',
			date: '2026-03',
			url: 'https://blog.helveti.cz/potapeni-s-certina-ds-super-ph500m/',
			tags: ['potápění', 'certina', 'recenze']
		},
		{
			title: 'Nejen vodotěsnost. Co dělá z hodinek opravdové potápky?',
			date: '2025-06',
			url: 'https://blog.helveti.cz/nejen-vodotesnost-co-dela-z-hodinek-opravdove-potapky/',
			tags: ['potápění', 'hodinky', 'akademie']
		},
		{
			title: 'Seiko Prospex SNJ035P1 Arnie PADI Special Edition z pohledu potápěče',
			date: '2025-03',
			url: 'https://blog.helveti.cz/seiko-prospex-snj035p1-arnie-padi-special-edition-z-pohledu-potapece/',
			tags: ['potápění', 'seiko', 'recenze']
		}
	];

	const rootPosts = [
		{
			title: 'Programování pro Android: začátky s UI',
			date: '2011-03-31',
			url: 'https://www.root.cz/clanky/programovani-pro-android-zacatky-s-ui/',
			tags: ['android', 'programování']
		},
		{
			title: 'Android v příkladech: práce s kontakty',
			date: '2011-03-17',
			url: 'https://www.root.cz/clanky/android-v-prikladech-prace-s-kontakty/',
			tags: ['android', 'programování']
		},
		{
			title: 'Programování pro Android v příkladech',
			date: '2011-03-10',
			url: 'https://www.root.cz/clanky/programovani-pro-android-v-prikladech/',
			tags: ['android', 'programování']
		}
	];

	function formatDate(dateStr: string): string {
		if (!dateStr) return '';
		// Short form like "2025-06" — just return as-is
		if (dateStr.length <= 7) return dateStr;
		const d = new Date(dateStr);
		return d.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Blog | Lukáš Marek</title>
	<meta name="description" content="Blog Lukáše Marka – programování, technologie a další" />
</svelte:head>

<main class="page-root">
	<div class="page-inner">
		<!-- ── Back + heading ──────────────────────────────────────── -->
		<div class="page-header animate-fade-up" style="animation-delay: 0ms">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="/" class="back-link">
				<span class="back-arrow">←</span>
				krtinec.cz
			</a>
			<h1 class="page-title">Archiv článků</h1>
		</div>

		<!-- ── Section: helveti.cz ─────────────────────────────────── -->
		<section class="section animate-fade-up" style="animation-delay: 80ms">
			<h2 class="section-label">
				<span class="label-comment">// </span>blog.helveti.cz
			</h2>
			<ul class="post-list">
				<!-- eslint-disable svelte/no-navigation-without-resolve svelte/require-each-key -->
				{#each helvetiPosts as post, i}
					<li class="post-row animate-fade-up" style="animation-delay: {120 + i * 40}ms">
						<a href={post.url} target="_blank" rel="noopener noreferrer" class="post-link">
							<span class="post-title">{post.title}</span>
							<span class="post-meta">
								<span class="post-date">{post.date}</span>
								<span class="post-tags">
									{#each post.tags as tag}
										<span class="tag">#{tag}</span>
									{/each}
								</span>
							</span>
						</a>
					</li>
				{/each}
				<!-- eslint-enable svelte/no-navigation-without-resolve svelte/require-each-key -->
			</ul>
		</section>

		<!-- ── Section: fragaria.cz ────────────────────────────────── -->
		<section class="section animate-fade-up" style="animation-delay: 280ms">
			<h2 class="section-label">
				<span class="label-comment">// </span>archiv fragaria.cz
			</h2>
			<ul class="post-list">
				<!-- eslint-disable svelte/no-navigation-without-resolve svelte/require-each-key -->
				{#each data.posts as post, i}
					<li class="post-row animate-fade-up" style="animation-delay: {320 + i * 25}ms">
						<a href="/blog/{post.slug}" class="post-link">
							<span class="post-title">{post.title}</span>
							<span class="post-meta">
								<time class="post-date">{formatDate(post.date)}</time>
								{#if post.tags.length > 0}
									<span class="post-tags">
										{#each post.tags as tag}
											<span class="tag">#{tag}</span>
										{/each}
									</span>
								{/if}
							</span>
						</a>
					</li>
				{/each}
				<!-- eslint-enable svelte/no-navigation-without-resolve svelte/require-each-key -->
			</ul>
		</section>

		<!-- ── Section: root.cz ────────────────────────────────────── -->
		<section class="section animate-fade-up" style="animation-delay: 400ms">
			<h2 class="section-label">
				<span class="label-comment">// </span>root.cz
			</h2>
			<ul class="post-list">
				<!-- eslint-disable svelte/no-navigation-without-resolve svelte/require-each-key -->
				{#each rootPosts as post, i}
					<li class="post-row animate-fade-up" style="animation-delay: {440 + i * 40}ms">
						<a href={post.url} target="_blank" rel="noopener noreferrer" class="post-link">
							<span class="post-title">{post.title}</span>
							<span class="post-meta">
								<time class="post-date">{formatDate(post.date)}</time>
								<span class="post-tags">
									{#each post.tags as tag}
										<span class="tag">#{tag}</span>
									{/each}
								</span>
							</span>
						</a>
					</li>
				{/each}
				<!-- eslint-enable svelte/no-navigation-without-resolve svelte/require-each-key -->
			</ul>
		</section>
	</div>
</main>

<style>
	.page-root {
		min-height: 100svh;
		padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 6vw, 4rem);
	}

	.page-inner {
		max-width: 760px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	/* ── Header ───────────────────────────────────────────────── */

	.page-header {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.8rem;
		color: var(--fg-faint);
		transition: color 0.15s ease;
		letter-spacing: 0.02em;
	}

	.back-link:hover {
		color: var(--accent);
	}

	.back-arrow {
		font-size: 0.9rem;
	}

	.page-title {
		font-family: 'Ubuntu Mono', monospace;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 700;
		color: var(--fg);
		letter-spacing: -0.02em;
		line-height: 1.1;
		margin: 0;
	}

	/* ── Section ──────────────────────────────────────────────── */

	.section {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.section-label {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--fg-faint);
		letter-spacing: 0.06em;
		text-transform: lowercase;
		margin: 0 0 0.75rem 0;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-faint);
	}

	.label-comment {
		color: var(--accent);
		opacity: 0.6;
	}

	/* ── Post list ────────────────────────────────────────────── */

	.post-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.post-row {
		border-bottom: 1px solid var(--border-faint);
	}

	.post-link {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 0.9rem 0;
		position: relative;
		transition: padding-left 0.15s ease;
	}

	.post-link::before {
		content: '';
		position: absolute;
		left: -1rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--accent);
		opacity: 0;
		transition: opacity 0.15s ease;
		border-radius: 1px;
	}

	.post-row:hover .post-link {
		padding-left: 0.5rem;
	}

	.post-row:hover .post-link::before {
		opacity: 1;
	}

	.post-title {
		font-family: 'Ubuntu', sans-serif;
		font-size: 0.975rem;
		font-weight: 500;
		color: var(--fg);
		line-height: 1.4;
		transition: color 0.15s ease;
	}

	.post-row:hover .post-title {
		color: var(--accent);
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.post-date {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.72rem;
		color: var(--fg-faint);
		letter-spacing: 0.03em;
		flex-shrink: 0;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.68rem;
		color: var(--fg-faint);
		letter-spacing: 0.02em;
		transition: color 0.15s ease;
	}

	.post-row:hover .tag {
		color: var(--accent);
		opacity: 0.7;
	}
</style>
