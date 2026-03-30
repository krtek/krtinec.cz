import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	lang: string;
	tags: string[];
}

export function load() {
	const postsDir = join(process.cwd(), 'src/posts');
	const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const posts: PostMeta[] = files.map((filename) => {
		const raw = readFileSync(join(postsDir, filename), 'utf-8');
		const { data } = matter(raw);
		const slug = filename.replace(/\.md$/, '');
		return {
			slug,
			title: data.title ?? slug,
			date: data.date ? String(data.date).slice(0, 10) : '',
			lang: data.lang ?? 'cs',
			tags: Array.isArray(data.tags) ? data.tags : []
		};
	});

	posts.sort((a, b) => b.date.localeCompare(a.date));

	return { posts };
}
