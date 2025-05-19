import matter from 'gray-matter';

const files = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });

export const posts = Object.entries(files).map(([path, raw]) => {
  const { data, content } = matter(raw);
  const slug = data.slug || path.replace('./', '').replace('.md', '');
  const excerpt = data.excerpt || content.split('\n').find(line => line.trim());

  return {
    ...data,
    slug,
    excerpt,
    content,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));
