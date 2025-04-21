import '@/styles/project.css'
import getContentBySlug from "@/utils/getContentBySlug"
import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"
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

  const { projectSlug } = await params
  const content = await getContentBySlug(`posts/${projectSlug}`)
  frontMatter = content.frontMatter
  html = content.html

  let projects = await getPreviewsForAllPosts()
  projects = projects.sort((a: any, b: any) => {
    if (a.frontMatter.order < b.frontMatter.order) {
      return -1;
    }
    if (a.frontMatter.order > b.frontMatter.order) {
      return 1;
    }
    return 0;
  })
  const currentIndex = projects.findIndex((project: any) => project.slug === projectSlug)

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <main className='prose prose-img:rounded prose-img:shadow-lg'>
        {frontMatter.featuredImageCaption && (
          <figure>
            <Image className="featured-image" src={frontMatter.featuredImage} alt="Project featured image" width={640} height={400} />
            <figcaption>{frontMatter.featuredImageCaption}</figcaption>
          </figure>
        )}
        {!frontMatter.featuredImageCaption && (
          <Image className="featured-image" src={frontMatter.featuredImage} alt="Project featured image" width={640} height={400} />
        )}
        <h1 className="font-serif text-3xl">{frontMatter.title}</h1>
        <div className="post-markdown-container" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      {nextProject && (
        <div className="prose text-right sm:text-left">
          <a href={`/projects/${nextProject.slug}`}>Next project</a>
        </div>
      )}
    </>
  )
}
