import '@/styles/project.scss'
import getContentBySlug from "@/utils/getContentBySlug"

export async function generateMetadata({ params }: any) {
  try {
    const { projectSlug } = await params
    const content = await getContentBySlug(`posts/${projectSlug}`)

    let title = `Jared Salzano`

    if (content.frontMatter.title) {
      title = `${content.frontMatter.title} - ${title}`
    }

    return { title };
  } catch (err) {
    throw err
  }
}

export default async function ProjectPage({ params }: any) {
  let frontMatter
  let html

  try {
    const { projectSlug } = await params
    const content = await getContentBySlug(`posts/${projectSlug}`)
    frontMatter = content.frontMatter
    html = content.html
  } catch (err) {
    throw err
  }

  return (
    <main>
      <h1 className="font-times font-semibold text-2xl text-gray-600 mb-5">{frontMatter.title}</h1>
      <div className="post-markdown-container" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
