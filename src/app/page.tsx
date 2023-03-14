import "@/styles/home.scss"
import Image from "next/image"
import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"
import ImageBg from "./components/ImageBg"

export default async function Home() {
  const posts = await getPreviewsForAllPosts()
  
  return (
    <>
      <ImageBg />
      <div className="page-container">
        <main className="relative">
          <div className="text-gray-800 text-container mb-36">
            <h1 className="page-home__wave">👋</h1>
            <p>I’m a full-stack web developer living in New York City. I make performant websites, web apps, web APIs, and web services. My area of expertise is in React and Node.js. I have eight years of experience working on a broad range of projects.</p>
            <br />
            <p>If you’d like to discuss a project, you can email me at <a className="text-blue-600 underline" href="mailto:jaredsalzano@gmail.com" target="_blank">jaredsalzano@gmail.com</a>.</p>
          </div>
          <ul className="project-grid grid grid-cols-2 gap-x-10 gap-y-20">
            {posts.map(({frontMatter, slug}, index) => (
                <li key={index} className="project-grid__item">
                  <a href={`/projects/${slug}`}>
                    <article>
                      <div className="project-grid__item__image-container relative h-72 mb-5">
                        <Image className="h-48 drop-shadow w-full" src={frontMatter.featuredImage} alt={frontMatter.title} fill />
                      </div>
                      <h2 className="font-times font-semibold text-2xl text-gray-600">{frontMatter.title}</h2>
                    </article>
                  </a>
                </li>
              )
            )}
          </ul>
        </main>
      </div>
    </>
  )
}
