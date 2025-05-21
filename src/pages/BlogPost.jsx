import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { FiCopy, FiCheck } from 'react-icons/fi';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('sh', bash);

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    import(`../blogs/${slug}.md?raw`)
      .then((raw) => {
        const parsed = matter(raw.default);
        setContent(parsed.content);
        setMeta(parsed.data);
      })
      .catch(() => {
        setMeta({ title: 'OH NO! BLOG NOT FOUND 404', date: '', readTime: '' });
        setContent('This blog post does not exist. It is what it is.');
      });
  }, [slug]);

  const CodeBlock = ({ children, className = '' }) => {
    const [copied, setCopied] = useState(false);
    const language = className.replace('language-', '') || 'bash';

    const codeContent = typeof children === 'string'
      ? children
      : Array.isArray(children)
        ? children.join('')
        : children?.toString?.() ?? '';

    const copyToClipboard = useCallback(() => {
      navigator.clipboard.writeText(codeContent).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }, [codeContent]);
  
    return (
      <div className="relative mb-4 rounded overflow-hidden group">
        <button
          onClick={copyToClipboard}
          className="absolute top-5 right-2 z-10 p-1 text-gray-500 hover:text-black transition"
          aria-label="Copy code"
        >
          {copied ? <FiCheck className="text-green-600" /> : <FiCopy />}
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          customStyle={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.875rem',
            padding: '1rem',
            paddingRight: '3rem',
            borderRadius: '0.5rem',
            background: '#f3f4f6',
            overflowX: 'auto',
          }}
          codeTagProps={{ className }}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    );
  };
  

  if (!meta) return <div className="pt-24 px-6">Loading...</div>;

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="pt-24 px-6 max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="text-sm text-gray-600 hover:text-blue-800 mb-6"
        >
          Back to Main Site
        </button>
        <h1 className="text-2xl font-semibold mb-2 uppercase">{meta.title}</h1>
        <p className="text-gray-600 text-xs mb-2 uppercase"> Posted: {meta.date}  •  Updated: {meta.updated}</p>
        <p className="text-gray-600 text-xs mb-2 uppercase"> {meta.category} / {meta.subcategory} </p>

        <div className="my-6 h-px bg-gray-300 w-full" />

        <article>
          <ReactMarkdown
            children={content}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-2xl font-bold mt-10 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-semibold mt-8 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-base font-semibold mt-6 mb-2" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-base font-semibold mt-2 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-base leading-7 mb" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside space-y-2 mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-600 underline hover:text-blue-800" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-2 mt-2" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold" {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                if (inline) {
                  return (
                    <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                }
                return <CodeBlock>{children}</CodeBlock>;
              },
            }}
          />
        </article>
      </div>
    </div>
  );
}

export default BlogPost;