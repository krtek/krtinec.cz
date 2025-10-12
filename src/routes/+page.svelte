<script>
	// You can add any interactive functionality here if needed
</script>

<svelte:head>
	<title>Lukáš Marek | krtinec.cz</title>
	<meta name="description" content="Personal page of a skilled IT professional" />
	<meta name="theme-color" content="#dbeafe" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
	<div class="mx-auto max-w-4xl">
		<!-- Hero Section -->
		<div class="mb-12 text-center">
			<img
				src="/hero.png"
				alt="Profile"
				class="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
			/>
			<h1 class="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Lukáš Marek</h1>
			<p class="text-xl font-medium text-gray-600">Full-stack developer, engineering manager</p>
		</div>

		<!-- Contact & Social Links -->
		<div class="p-8">
			<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
				<!-- LinkedIn -->
				<a
					href="https://linkedin.com/in/krtek"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
							clip-rule="evenodd"
						/>
					</svg>
					LinkedIn
				</a>

				<!-- Bluesky -->
				<a
					href="https://bsky.app/profile/krtinec.cz"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg bg-sky-500 px-6 py-3 text-white shadow-md transition-colors duration-200 hover:bg-sky-600 hover:shadow-lg"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 2.5C8.5 2.5 5.5 4.5 3.5 7.5C1.5 10.5 1 14 2 17C3 20 6 21.5 12 21.5C18 21.5 21 20 22 17C23 14 22.5 10.5 20.5 7.5C18.5 4.5 15.5 2.5 12 2.5Z"
						/>
					</svg>
					Bluesky
				</a>
			</div>
		</div>
	</div>
</main>
