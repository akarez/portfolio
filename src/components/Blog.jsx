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
    <div id="blog" className="bg-gray-100 py-10 px-6">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <h1 className="text-left md:text-lg mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 uppercase">
          Blog
        </h1>
        <div className="relative md:w-3/4 overflow-visible">
          {posts.map((post) => (
            <div
            key={post.slug}
            className="relative mb-8 bg-gray-100 rounded-xl border border-gray-200 shadow transition-transform transform hover:shadow-lg hover:-translate-x-1 hover:bg-gray-50 px-6 py-5"
          >          
              <div className="flex flex-wrap items-center mb-2">
                <h2 className="font-medium mr-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    onClick={() => {
                      sessionStorage.setItem('scroll-position', window.scrollY.toString());
                    }}
                    className="inline-flex items-center text-black"
                  >
                    {post.title}
                  </Link>
                </h2>
              </div>
              {/* <p className="md:text-base text-sm text-gray-600 mb-2">Date: {post.date} </p> */}
              <p className="text-base text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;