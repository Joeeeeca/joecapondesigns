// src/pages/blog/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = [
    {
      slug: 'freelance-vs-agency',
      title: 'Why Hire a Freelance Developer Instead of an Agency?',
      excerpt:
        'Discover the benefits of hiring a freelance web developer over a traditional agency—cost, flexibility, communication, and more.',
      date: 'July 29, 2025',
    },

    {
  slug: 'design-tips-small-business',
  title: 'Web Design Tips for Small Businesses',
  excerpt: 'Simple and effective design tips to help small businesses create beautiful, functional websites.',
  date: 'August 1, 2025',
  tags: ['design', 'web development', 'small business']
},
    // Add more posts here later
  ]

  return (
    <>
      <Head>
        <title>Blog — Joe Capon Designs</title>
        <meta name="description" content="Web dev tips, insights, and project breakdowns by freelance developer Joe Capon." />
      </Head>

      <section className="min-h-screen py-24 px-6 lg:px-16 bg-gray-50 text-dark">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-center">Blog</h1>

          <ul className="space-y-10">
            {posts.map(post => (
              <li key={post.slug} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-accent font-medium hover:underline">
                  Read more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

<footer className="sticky bottom-0 bg-white border-t border-gray-200 p-4 text-center z-10">
  <a
    href="/blog/rss.xml"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-accent hover:underline"
  >
    📰 Subscribe via RSS
  </a>
</footer>


    </>
  )
}
