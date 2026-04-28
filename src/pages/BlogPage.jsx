import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import posts from '../blogs/posts.js';

const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

function shortDate(dateStr) {
  const [month, , year] = dateStr.split(' ');
  return `${month} ${year}`;
}

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black px-10 md:px-24 pt-28 pb-20">
        <div className="max-w-3xl mx-auto w-full border-t border-gray-100 dark:border-zinc-800">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              onClick={() => sessionStorage.setItem('scroll-position', window.scrollY.toString())}
              className="block py-6 border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 px-4 -mx-4 transition-colors dark:text-white"
            >
              <div className="flex justify-between items-baseline gap-4">
                <h2 className="font-medium md:text-base">{post.title}</h2>
                <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">{shortDate(post.date)}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
