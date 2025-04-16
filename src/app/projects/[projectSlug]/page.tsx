import '@/styles/project.css'
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
    <main className='prose prose-img:rounded-lg'>
      <h1 className="font-serif text-2xl text-gray-600">{frontMatter.title}</h1>
      <div className="post-markdown-container" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
