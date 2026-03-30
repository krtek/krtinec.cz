import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

const modules = import.meta.glob('/src/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function load({ params }: { params: { slug: string } }) {
	const raw = modules[`/src/posts/${params.slug}.md`] as string | undefined;

	if (!raw) {
		throw error(404, 'Post not found');
	}

	const { data, content } = matter(raw);
	const html = marked.parse(content, { async: false }) as string;

	return {
		title: data.title ?? params.slug,
		date: data.date ? String(data.date).slice(0, 10) : '',
		lang: data.lang ?? 'cs',
		tags: Array.isArray(data.tags) ? data.tags : [],
		html
	};
}
