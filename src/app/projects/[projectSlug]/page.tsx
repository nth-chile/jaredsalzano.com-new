import styles from './project.module.scss'
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

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
