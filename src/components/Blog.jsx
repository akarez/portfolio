import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const files = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });

    Promise.all(
      Object.entries(files).map(async ([path, load]) => {
        const raw = await load();
        const { data, content } = matter(raw);
        const slug = data.slug || path.split('/').pop().replace('.md', '');
        const excerpt = data.excerpt || content.split('\n').find(line => line.trim() && !line.startsWith('#'));

        return {
          ...data,
          slug,
          excerpt,
        };
      })
    ).then((loadedPosts) =>
      setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)))
    );
  }, []);

  return (
    <div id="blog" className="bg-white py-10 px-6 h-screen snap-start snap-always md:pt-48">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <h1 className="text-left md:text-lg mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 uppercase">
          Blog
        </h1>
        <div className="relative md:w-3/4 overflow-visible">
          {posts.map((post) => (
            <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            onClick={() => {
              sessionStorage.setItem('scroll-position', window.scrollY.toString());
            }}
            className="block relative mb-8 bg-white rounded-xl border border-gray-200 shadow transition-transform transform hover:shadow-lg hover:-translate-x-1 hover:bg-gray-50 px-6 py-5"
          >
            <div className="flex flex-wrap items-center mb-2">
              <h2 className="font-medium text-black">
                {post.title}
              </h2>
            </div>
            <p className="text-base text-gray-600 text-sm">{post.excerpt}</p>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;