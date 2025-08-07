const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');
const { allPosts } = require('./src/data/posts'); // adjust path if needed

const baseUrl = 'https://joecapondesigns.com';

// Static routes
const staticLinks = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/tags', changefreq: 'monthly', priority: 0.6 },
];

// Dynamic blog post routes
const blogLinks = allPosts.map(post => ({
  url: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: 0.7,
}));

// Combine all routes
const links = [...staticLinks, ...blogLinks];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });

  const xmlData = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  createWriteStream('./public/sitemap.xml').write(xmlData);
  console.log('✅ Sitemap updated with static + blog routes!');
}

generateSitemap();
