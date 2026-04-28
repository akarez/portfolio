import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import shellSession from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from '../components/Footer';
import posts from '../blogs/posts.js';
import { useTheme } from '../context/ThemeContext';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('sh', bash);
SyntaxHighlighter.registerLanguage('shell-session', shellSession);
SyntaxHighlighter.registerLanguage('console', shellSession);

function stripPrompts(code, language) {
  if (language !== 'shell-session' && language !== 'console') return code;
  return code
    .split('\n')
    .filter(line => /^[^\s]*[$#%]\s/.test(line))
    .map(line => line.replace(/^[^\s]*[$#%]\s/, ''))
    .join('\n')
    .trim();
}

function CodeBlock({ language, children, isDark }) {
  const [copied, setCopied] = useState(false);

  const code = typeof children === 'string'
    ? children
    : Array.isArray(children) ? children.join('') : String(children ?? '');

  const copy = useCallback(() => {
    navigator.clipboard.writeText(stripPrompts(code, language)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code, language]);

  const bgColor = isDark ? '#27272a' : '#f3f4f6';

  return (
    <div className="relative mb-4 rounded overflow-hidden">
      <button
        onClick={copy}
        className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 p-1 rounded transition ${
          isDark
            ? 'bg-zinc-800 text-gray-400 hover:text-white'
            : 'bg-gray-100 text-gray-500 hover:text-black'
        }`}
        aria-label="Copy code"
      >
        {copied
          ? <FiCheck className={isDark ? 'text-green-400' : 'text-green-600'} />
          : <FiCopy />}
      </button>
      <SyntaxHighlighter
        language={language || 'text'}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem',
          padding: '1rem',
          paddingRight: '3rem',
          borderRadius: '0.5rem',
          background: bgColor,
          overflowX: 'auto',
        }}
        codeTagProps={{ style: { background: bgColor, fontFamily: 'inherit' } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const [PostContent, setPostContent] = useState(null);
  const [error, setError] = useState(false);
  const { isDark } = useTheme();

  const meta = posts.find(p => p.slug === slug);

  const mdxComponents = useMemo(() => ({
    h1: (props) => <h1 className="text-2xl font-bold mt-10 mb-4" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold mt-8 mb-3" {...props} />,
    h3: (props) => <h3 className="text-base font-semibold mt-6 mb-2" {...props} />,
    h4: (props) => <h4 className="text-base font-semibold mt-2 mb-2" {...props} />,
    p: (props) => <p className="text-base leading-7 mb-4" {...props} />,
    ul: (props) => <ul className="list-disc list-inside space-y-2 mb-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />,
    a: (props) => <a className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300" {...props} />,
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 mb-2 mt-2" {...props} />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    pre: ({ children }) => {
      const child = children?.props ?? {};
      const lang = (child.className ?? '').replace('language-', '') || 'text';
      return <CodeBlock language={lang} isDark={isDark}>{child.children}</CodeBlock>;
    },
    code: (props) => (
      <code className="bg-gray-200 dark:bg-zinc-800 dark:text-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
    ),
  }), [isDark]);

  useEffect(() => {
    setPostContent(null);
    setError(false);
    import(`../blogs/${slug}.mdx`)
      .then(mod => setPostContent(() => mod.default))
      .catch(() => setError(true));
  }, [slug]);

  if (!PostContent && !error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black dark:text-white pt-24 px-6">
        Loading...
      </div>
    );
  }

  if (error || !meta) {
    return (
      <>
        <div className="min-h-screen bg-white dark:bg-black pt-24 px-6 max-w-4xl mx-auto pb-12">
          <Link to="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-6 block">
            ← Back
          </Link>
          <h1 className="text-2xl font-semibold mb-2 uppercase dark:text-white">404 — Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">This blog post does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black dark:text-white pt-24 px-6 max-w-4xl mx-auto pb-12">
        <Link to="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-6 block">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold mb-2 uppercase">{meta.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 uppercase">
          Posted: {meta.date} &nbsp;•&nbsp; Updated: {meta.updated}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 uppercase">
          {meta.category} / {meta.subcategory}
        </p>
        <div className="my-6 h-px bg-gray-300 dark:bg-gray-700 w-full" />
        <article>
          <PostContent components={mdxComponents} />
        </article>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost;
