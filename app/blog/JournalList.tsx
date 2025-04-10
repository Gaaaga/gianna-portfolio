'use client'

import { useEffect } from 'react'
import { Post } from './page'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navbar } from "../components/layout/Navbar"

export default function JournalList({ posts }: { posts: Post[] }) {
  useEffect(() => {
    console.log('Mounted client component')
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <div className="prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
