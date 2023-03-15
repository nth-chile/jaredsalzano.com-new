import '@/styles/project.scss'
import getContentBySlug from "@/utils/getContentBySlug"

export async function generateMetadata({ params } : { params: any}) {
  try {
    const content = await getContentBySlug(params.projectSlug)

    let title = `Jared Salzano`

    if (content.frontMatter.title) {
      title = `${content.frontMatter.title} - ${title}`
    }

    return { title };
  } catch (err) {
    throw err
  }
}

export default async function ProjectPage({
  params: { 
    projectSlug 
  }
} : {
  params: {
    projectSlug: string
  }
}) {
  let frontMatter
  let html

  try {
    const content = await getContentBySlug(projectSlug)
    frontMatter = content.frontMatter
    html = content.html
  } catch (err) {
    throw err
  }

  return <>
    <div>
      <h1 className="font-times font-semibold text-2xl text-gray-600 mb-5">{frontMatter.title}</h1>
      <div className="post-markdown-container" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </>
}
