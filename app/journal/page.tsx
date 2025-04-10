import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import JournalList from './JournalList'

export interface Post {
  slug: string
  title: string
  subtitle: string
  date: string
  content: string
}

export default async function JournalPage() {
  const postsDirectory = path.join(process.cwd(), 'content/journal')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts: Post[] = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle || '',
      date: data.date,
      content
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return <JournalList posts={posts} />
}
