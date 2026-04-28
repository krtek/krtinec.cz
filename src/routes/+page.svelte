<svelte:head>
	<title>Lukáš Marek | krtinec.cz</title>
	<meta name="description" content="Personal page of a skilled IT professional" />
	<meta name="theme-color" content="#f5f4f0" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
</svelte:head>

<main class="page-root">
	<div class="page-inner">
		<!-- ── Prompt line ──────────────────────────────────────────── -->
		<div class="prompt animate-fade-up" style="animation-delay: 0ms">
			<span class="prompt-symbol">~/krtinec.cz</span>
			<span class="prompt-cursor">▋</span>
		</div>

		<!-- ── Identity block ───────────────────────────────────────── -->
		<div class="identity animate-fade-up" style="animation-delay: 80ms">
			<div class="avatar-wrap">
				<img src="/hero.png" alt="Lukáš Marek" class="avatar" />
			</div>
			<div class="identity-text">
				<h1 class="name">Lukáš Marek</h1>
				<p class="role">Full-stack developer &amp; engineering manager</p>
			</div>
		</div>

		<!-- ── Divider ───────────────────────────────────────────────── -->
		<div class="divider animate-fade-up" style="animation-delay: 160ms"></div>

		<!-- ── Links block ──────────────────────────────────────────── -->
		<nav class="links animate-fade-up" style="animation-delay: 240ms">
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a href="/blog" class="nav-link">
				<span class="nav-arrow">//</span>
				<span>Archiv článků</span>
			</a>

			<a
				href="https://linkedin.com/in/krtek"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-link"
			>
				<span class="nav-arrow">→</span>
				<span>LinkedIn</span>
			</a>

			<a href="https://github.com/krtek" target="_blank" rel="noopener noreferrer" class="nav-link">
				<span class="nav-arrow">→</span>
				<span>GitHub</span>
			</a>

			<a
				href="https://bsky.app/profile/krtinec.cz"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-link"
			>
				<span class="nav-arrow">→</span>
				<span>Bluesky</span>
			</a>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</nav>

		<!-- ── Footer ───────────────────────────────────────────────── -->
		<footer class="page-footer animate-fade-up" style="animation-delay: 320ms">
			<span class="footer-comment">/* krtinec.cz */</span>
		</footer>
	</div>
</main>

<style>
	.page-root {
		min-height: 100svh;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		padding: clamp(1.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 4rem);
	}

	@media (min-width: 640px) {
		.page-root {
			align-items: center;
		}
	}

	.page-inner {
		width: 100%;
		max-width: 680px;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	/* ── Prompt ───────────────────────────────────────────────── */

	.prompt {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.8rem;
		color: var(--fg-faint);
		letter-spacing: 0.02em;
		margin-bottom: 2.5rem;
		display: flex;
		align-items: center;
		gap: 0;
	}

	.prompt-symbol {
		color: var(--accent);
		opacity: 0.7;
	}

	.prompt-cursor {
		color: var(--accent);
		animation: blink 1.2s step-end infinite;
		line-height: 1;
		margin-left: 2px;
	}

	/* ── Identity ─────────────────────────────────────────────── */

	.identity {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.avatar-wrap {
		flex-shrink: 0;
		position: relative;
	}

	.avatar {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--border);
		filter: grayscale(20%);
		opacity: 0.9;
	}

	.identity-text {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.name {
		font-family: 'Ubuntu Mono', monospace;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 700;
		color: var(--fg);
		letter-spacing: -0.02em;
		line-height: 1;
		margin: 0;
	}

	.role {
		font-family: 'Ubuntu', sans-serif;
		font-size: 0.95rem;
		font-weight: 300;
		color: var(--fg-muted);
		margin: 0;
		letter-spacing: 0.01em;
	}

	/* ── Divider ──────────────────────────────────────────────── */

	.divider {
		height: 1px;
		background: linear-gradient(to right, var(--border), transparent);
		margin-bottom: 2rem;
	}

	/* ── Nav links ────────────────────────────────────────────── */

	.links {
		display: flex;
		flex-direction: column;
		gap: 0;
		margin-bottom: 3rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.95rem;
		color: var(--fg-muted);
		padding: 0.65rem 0;
		border-bottom: 1px solid var(--border-faint);
		transition:
			color 0.15s ease,
			padding-left 0.15s ease;
		position: relative;
	}

	.nav-link:first-child {
		border-top: 1px solid var(--border-faint);
	}

	.nav-link:hover {
		color: var(--fg);
		padding-left: 0.5rem;
	}

	.nav-link:hover .nav-arrow {
		color: var(--accent);
	}

	.nav-arrow {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.85rem;
		color: var(--fg-faint);
		transition: color 0.15s ease;
		width: 1.8rem;
		flex-shrink: 0;
	}

	/* ── Footer ───────────────────────────────────────────────── */

	.page-footer {
		margin-top: auto;
	}

	.footer-comment {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.75rem;
		color: var(--fg-faint);
		letter-spacing: 0.02em;
	}
</style>
