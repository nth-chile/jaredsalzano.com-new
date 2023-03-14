import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import matter from "gray-matter"
import {read} from "to-vfile"
import path from "path"

export default async function getContentBySlug(slug: string) {
  const filePath = path.join(process.cwd(), `src/content/${slug}.md`)

  const vFile = await read(filePath)

  const { content, data: frontMatter } = matter(String(vFile))

  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content)
  
  return {
    frontMatter,
    html: String(html)
  }
}