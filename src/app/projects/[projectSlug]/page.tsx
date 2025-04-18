import '@/styles/project.css'
import getContentBySlug from "@/utils/getContentBySlug"
import Image from "next/image"

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
    <main className='prose prose-img:rounded prose-img:shadow-lg'>
      <Image className="featured-image" src={frontMatter.featuredImage} alt="Project featured image" width={640} height={400} />
      <h1 className="font-serif text-3xl">{frontMatter.title}</h1>
      <div className="post-markdown-container" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
