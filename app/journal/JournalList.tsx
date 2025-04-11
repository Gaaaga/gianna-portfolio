'use client'

import { useEffect, useState } from 'react'
import { Post } from './page'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import type { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const MarkdownComponents: Components = {
  h2: ({ children, ...props }) => (
    <h2 className="text-1xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200 text-gray-900" {...props}>
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => (
    <p className="text-base text-gray-700 leading-relaxed my-4" {...props}>
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-gray-300 pl-6 my-6 text-gray-700 text-sm leading-normal italic" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside my-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside my-4 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),
  code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
    const language = className?.replace('language-', '') || '';
    return inline ? (
      <code
        className="bg-gray-200 text-red-600 rounded px-1 py-0.5 text-sm font-mono border border-gray-300 whitespace-nowrap"
        {...props}
      >
        {children}
      </code>
    ) : (
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        PreTag="div"
        className="bg-gray-100 rounded-md p-4 overflow-x-auto"
        {...props}
      >
        {String(children).trim()}
      </SyntaxHighlighter>
    );
  },
}

export default function JournalList({ posts }: { posts: Post[] }) {
  useEffect(() => {
    console.log('Mounted client component')
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <ExpandableArticle key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function ExpandableArticle({ post }: { post: Post }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <article className="mb-16 bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        {post.subtitle && (
          <p className="text-lg text-gray-700 mb-2">{post.subtitle}</p>
        )}
        <time className="text-gray-600 text-sm block">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </time>
      </header>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents}
        >
          {isExpanded ? post.content : post.content.split('\n').slice(0, 5).join('\n')}
        </ReactMarkdown>
      </div>
      <button
        onClick={toggleExpand}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </article>
  )
}
