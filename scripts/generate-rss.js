// scripts/generate-rss.js
const fs = require('fs')
const path = require('path')
const { allPosts } = require('../src/data/posts.js')

const siteUrl = 'https://joecapondesigns.com'
const rssPath = path.join(process.cwd(), 'public', 'blog', 'rss.xml')

function generateRSS(posts) {
  const items = posts.map(post => {
    return `
      <item>
        <title>${post.title}</title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description>${post.excerpt || ''}</description>
      </item>
    `
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Joe Capon Designs — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Insights and tips on web development and design.</description>
    ${items}
  </channel>
</rss>`
}

const rssContent = generateRSS(allPosts)
fs.mkdirSync(path.dirname(rssPath), { recursive: true })
fs.writeFileSync(rssPath, rssContent)
console.log('✅ RSS feed generated at /public/blog/rss.xml')
