'use client'

import { useEffect } from 'react'
import { Post } from './page'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import type { Components } from 'react-markdown'

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
              <article key={post.slug} className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]">
                <header className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  {post.subtitle && (
                    <p className="text-lg text-gray-700 mb-2">{post.subtitle}</p>
                  )}
                  <time className="text-gray-600 text-sm block">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </header>
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={MarkdownComponents}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
