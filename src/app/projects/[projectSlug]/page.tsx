import '@/styles/project.scss'
import getContentBySlug from "@/utils/getContentBySlug"

export default async function ProjectPage({
  params: { 
    projectSlug 
  }
} : {
  params: {
    projectSlug: String
  }
}) {
  const slug = projectSlug.replace(/ /g, '-')
  let frontMatter
  let html

  try {
    const content = await getContentBySlug(slug)
    frontMatter = content.frontMatter
    html = content.html
  } catch (err) {
    throw err
  }

  return (
    <div>
      <h1 className="font-times font-semibold text-2xl text-gray-600 mb-5">{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
