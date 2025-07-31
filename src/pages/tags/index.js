import Head from 'next/head'
import Link from 'next/link'
import { allPosts } from '@/data/posts'

const getTagCounts = () => {
  const counts = new Map()
  allPosts.forEach(p => p.tags.forEach(t => counts.set(t, (counts.get(t) || 0) + 1)))
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])
}

export default function TagsIndex() {
  const tags = getTagCounts()

  return (
    <>
      <Head><title>All Tags — Joe Capon Designs</title></Head>
      <section className="min-h-screen py-24 px-6 lg:px-16 bg-gray-50 text-dark">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Tags</h1>
          <div className="flex flex-wrap gap-3">
            {tags.map(([tag, count]) => (
              <Link key={tag} href={`/tags/${tag}`}
                className="inline-block bg-white border px-3 py-1 rounded-full shadow hover:shadow-md">
                #{tag} <span className="text-gray-500 ml-1">({count})</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/blog" className="text-accent hover:underline">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
