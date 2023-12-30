import "@/styles/home.scss"
import Image from "next/image"
import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"
import ImageBg from "@/components/ImageBg"
import Footer from "@/components/Footer"
import matter from "gray-matter"

function getSortedPosts(posts: any[]) {
  return [...posts].sort((a, b) => {
    if( a.frontMatter.order < b.frontMatter.order ) {
      return -1;
    }

    if( a.frontMatter.order > b.frontMatter.order ) {
      return 1;
    }

    return 0;
  })
}

export default async function Home() {
  let posts = await getPreviewsForAllPosts()
  posts = getSortedPosts(posts)
  
  return (
    <>
      <ImageBg />
      <a className="absolute right-2 underline z-10 text-blue-800" href="/other-stuff">other stuff</a>
      <div className="page-container">
        <main className="relative">
          <div className="text-gray-800 text-container mb-28 sm:mb-36">
            <h1 className="page-home__wave">👋</h1>
            <p>I’m a full-stack web developer living in New York City. I make performant websites, web apps, web APIs, and web services. My area of expertise is in React and Node.js. I have eight years of experience working on a broad range of projects.</p>
            <br />
            <p>If you’d like to discuss a project, you can email me at <a className="text-blue-800 underline" href="mailto:jaredsalzano@gmail.com" target="_blank">jaredsalzano@gmail.com</a>.</p>
          </div>
          <ul className="project-grid grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-20">
            {posts
            .map(({frontMatter, slug}, index) => (
                <li key={index} className="project-grid__item">
                  <a href={`/projects/${slug}`}>
                    <article>
                      <div className="project-grid__item__image-container relative h-72 mb-5">
                        <Image
                          className={`${frontMatter.imgClass} h-48 drop-shadow w-full object-cover`} 
                          src={frontMatter.featuredImage} 
                          alt={frontMatter.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
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
      <Footer />
    </>
  )
}
