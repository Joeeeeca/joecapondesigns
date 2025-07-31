import BlogLayout from '@/components/Bloglayout'
import { allPosts } from '@/data/posts'

export default function FreelanceVsAgencyPage() {
  const post = allPosts.find(p => p.slug === 'freelance-vs-agency')
  return <BlogLayout post={post} />
}
