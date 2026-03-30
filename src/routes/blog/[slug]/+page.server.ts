import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const postsDir = join(process.cwd(), 'src/posts');
	const filePath = join(postsDir, `${params.slug}.md`);

	let raw: string;
	try {
		raw = readFileSync(filePath, 'utf-8');
	} catch {
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
