import Head from 'next/head'
import Link from 'next/link'
import { allPosts } from '@/data/posts'

function getReadingTime(text) {
  const wordsPerMinute = 200
  const noOfWords = text.trim().split(/\s+/).length
  const minutes = Math.ceil(noOfWords / wordsPerMinute)
  return `${minutes} min read`
}

export default function BlogLayout({ post }) {
  const readingTime = getReadingTime(post.content)

  const similarPosts = allPosts.filter(
    p => p.slug !== post.slug &&
         p.tags.some(tag => post.tags.includes(tag))
  )

  return (
    <>
      <Head>
        <title>{post.title} — Joe Capon Designs</title>
        <meta name="description" content={post.description} />

        <meta property="og:type" content="article" />
<meta property="og:title" content={post.title} />
<meta property="og:description" content={post.description} />
<meta property="og:url" content={`https://joecapondesigns.com/blog/${post.slug}`} />
<meta property="og:image" content="https://joecapondesigns.com/your-thumbnail.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={post.title} />
<meta name="twitter:description" content={post.description} />
<meta name="twitter:image" content="https://joecapondesigns.com/your-thumbnail.jpg" />

  {/* ✅ New canonical tag */}
  <link rel="canonical" href={`https://joecapondesigns.com/blog/${post.slug}`} />

  {/* ✅ New optional keywords tag */}
  <meta name="keywords" content={post.tags.join(', ')} />

 <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: "Joe Capon"
        },
        description: post.description,
        articleBody: post.content,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://joecapondesigns.com/blog/${post.slug}`
        }
      })
    }}
  />
      </Head>

      <section className="min-h-screen py-24 px-6 lg:px-16 bg-gradient-to-br from-gray-50 to-white text-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="p-8 bg-white rounded-2xl shadow mb-10">
              <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
              <div className="text-sm text-gray-500">
                <span>Published {post.date}</span>
                <span className="mx-2">•</span>
                <span>{readingTime}</span>
              </div>
              <div className="mt-2 space-x-2">
{post.tags.map(tag => (
  <Link
    key={tag}
    href={`/tags/${tag}`}
    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded cursor-pointer"
  >
    #{tag}
  </Link>
))}




              </div>
            </div>

            <article className="prose lg:prose-lg max-w-none">
              {post.content.trim().split('\n').map((para, idx) =>
                para ? <p key={idx}>{para}</p> : null
              )}
            </article>

            <div className="mt-12">
              <Link href="/blog" className="text-accent hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 border-l border-gray-200 pl-6">
            <h3 className="text-xl font-semibold mb-4">Similar Posts</h3>
            <ul className="space-y-6">
              {similarPosts.map(p => (
                <li key={p.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 space-y-1 cursor-pointer">
                  <Link href={`/blog/${p.slug}`} className="text-dark hover:text-accent font-medium">
                    {p.title}
                  </Link>
                  <p className="text-sm text-gray-500">{p.date}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
