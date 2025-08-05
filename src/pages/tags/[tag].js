import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { allPosts } from '@/data/posts'

export default function TagPage() {
  const { query } = useRouter()
  const tag = String(query.tag || '')
  const posts = allPosts.filter(p => p.tags.includes(tag))

  return (
    <>
      <Head>
        <title>Posts tagged “{tag}” — Joe Capon Designs</title>
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="min-h-screen py-24 px-6 lg:px-16 bg-gray-50 text-dark">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-center">
            Posts tagged <span className="text-accent">#{tag}</span>
          </h1>

          {posts.length ? (
            <ul className="space-y-6">
              {posts.map(p => (
                <li key={p.slug} className="p-6 bg-white rounded-xl shadow">
                  <Link href={`/blog/${p.slug}`} className="text-2xl font-semibold hover:text-accent">
                    {p.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{p.date}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts found for this tag.</p>
          )}

          <div className="mt-10">
            <Link href="/blog" className="text-accent hover:underline">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
