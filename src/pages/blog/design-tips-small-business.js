// src/pages/blog/design-tips-small-business.js
import BlogLayout from '@/components/Bloglayout'
import { allPosts } from '@/data/posts'

export default function SmallBusinessDesignTips() {
  const post = allPosts.find(p => p.slug === 'design-tips-small-business')
  return <BlogLayout post={post} />
}