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
		const d = new Date(dateStr);
		return d.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Blog | Lukáš Marek</title>
	<meta name="description" content="Blog Lukáše Marka – programování, technologie a další" />
</svelte:head>

<main class="min-h-screen bg-blue-50 px-4 py-12">
	<div class="mx-auto max-w-3xl">
		<div class="mb-10">
			<a href="/" class="text-sm text-blue-600 hover:underline">&larr; krtinec.cz</a>
			<h1 class="mt-4 text-4xl font-bold text-gray-800">Archiv článků</h1>
		</div>

		<h2 class="mb-6 text-2xl font-bold text-gray-800">Články na blog.helveti.cz</h2>

		<ul class="space-y-4">
			{#each helvetiPosts as post}
				<li>
					<a
						href={post.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
					>
						<div class="flex items-start justify-between gap-4">
							<div>
								<h3 class="text-xl font-semibold text-gray-800 hover:text-blue-600">
									{post.title}
								</h3>
								<div class="mt-2 flex flex-wrap gap-1">
									{#each post.tags as tag}
										<span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
											>{tag}</span
										>
									{/each}
								</div>
							</div>
							<span class="shrink-0 text-sm text-gray-500">{post.date}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="mt-16 mb-6 text-2xl font-bold text-gray-800">Archiv blogu fragaria.cz</h2>

		<ul class="space-y-4">
			{#each data.posts as post}
				<li>
					<a
						href="/blog/{post.slug}"
						class="block rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
					>
						<div class="flex items-start justify-between gap-4">
							<div>
								<h2 class="text-xl font-semibold text-gray-800 hover:text-blue-600">
									{post.title}
								</h2>
								{#if post.tags.length > 0}
									<div class="mt-2 flex flex-wrap gap-1">
										{#each post.tags as tag}
											<span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
												>{tag}</span
											>
										{/each}
									</div>
								{/if}
							</div>
							<time class="shrink-0 text-sm text-gray-500">{formatDate(post.date)}</time>
						</div>
					</a>
				</li>
			{/each}
		</ul>
		<h2 class="mt-16 mb-6 text-2xl font-bold text-gray-800">Články na root.cz</h2>

		<ul class="space-y-4">
			{#each rootPosts as post}
				<li>
					<a
						href={post.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
					>
						<div class="flex items-start justify-between gap-4">
							<div>
								<h3 class="text-xl font-semibold text-gray-800 hover:text-blue-600">
									{post.title}
								</h3>
								<div class="mt-2 flex flex-wrap gap-1">
									{#each post.tags as tag}
										<span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
											>{tag}</span
										>
									{/each}
								</div>
							</div>
							<time class="shrink-0 text-sm text-gray-500">{formatDate(post.date)}</time>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
