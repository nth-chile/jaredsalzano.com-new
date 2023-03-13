import {remark} from 'remark'
import remarkHtml from 'remark-html'
import matter from "gray-matter"
import {read} from "to-vfile"
import path from "path"

export default async function getContentBySlug(slug: string) {
  const filePath = path.join(process.cwd(), `src/content/${slug}.md`)

  const vFile = await read(filePath)

  const { content, data: frontMatter } = matter(String(vFile))

  const html = await remark()
    .use(remarkHtml)
    .process(content)
  
  return {
    frontMatter,
    html: String(html)
  }
}