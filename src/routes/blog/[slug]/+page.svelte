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

<main class="min-h-screen bg-blue-50 px-4 py-12">
	<div class="mx-auto max-w-3xl">
		<div class="mb-8">
			<a href="/blog" class="text-sm text-blue-600 hover:underline">&larr; Blog</a>
		</div>

		<article class="rounded-2xl bg-white px-8 py-10 shadow-sm">
			<header class="mb-8">
				<h1 class="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">{data.title}</h1>
				<div class="flex flex-wrap items-center gap-3">
					<time class="text-sm text-gray-500">{formatDate(data.date)}</time>
					{#if data.tags.length > 0}
						<div class="flex flex-wrap gap-1">
							{#each data.tags as tag}
								<span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">{tag}</span
								>
							{/each}
						</div>
					{/if}
				</div>
			</header>

			<div class="prose prose-blue max-w-none">
				{@html data.html}
			</div>
		</article>
	</div>
</main>
