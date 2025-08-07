import Head from 'next/head'
import Link from 'next/link'

function getReadingTime(text) {
  const wordsPerMinute = 200
  const noOfWords = text.trim().split(/\s+/).length
  const minutes = Math.ceil(noOfWords / wordsPerMinute)
  return `${minutes} min read`
}

export default function BlogPostLayout({ post, articleText, similarPosts }) {
  const readingTime = getReadingTime(articleText)

  return (
    <>
      <Head>
        <title>{post.title} — Joe Capon Designs</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <section className="min-h-screen py-24 px-6 lg:px-16 bg-gradient-to-br from-gray-50 to-white text-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="p-8 bg-white rounded-2xl shadow mb-10">
              <h1 className="text-4xl font-bold mb-2 leading-tight">{post.title}</h1>
              <div className="text-sm text-gray-500">
                <span>Published {post.date}</span>
                <span className="mx-2">•</span>
                <span>{readingTime}</span>
              </div>
              <div className="mt-2 space-x-2">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-100 text-sm text-gray-600 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <article className="prose lg:prose-lg prose-headings:text-dark prose-p:text-gray-700 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:border-accent max-w-none">
              {articleText.split('\n').map((para, idx) =>
                para.trim() ? <p key={idx}>{para.trim()}</p> : null
              )}
            </article>

            <div className="mt-12">
              <Link href="/blog" className="text-accent hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 border-l border-gray-200 pl-6">
            <h3 className="text-xl font-semibold mb-4">Similar Posts</h3>
            <ul className="space-y-6">
              {similarPosts.map(post => (
                <li key={post.slug} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 space-y-1 cursor-pointer">
                  <Link href={`/blog/${post.slug}`} className="text-dark hover:text-accent font-medium">
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
