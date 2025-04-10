"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navbar } from "@/app/components/layout/Navbar"
import { Footer } from "@/app/components/layout/Footer"
import { Post } from "@/app/lib/posts"

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <>
      <Navbar />

      <div className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Journal</h1>
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
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

      <Footer />
    </>
  )
}
