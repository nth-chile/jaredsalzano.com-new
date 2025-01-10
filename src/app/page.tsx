import "@/styles/home.scss"
import Image from "next/image"
import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"
import ImageBg from "@/components/ImageBg"
import Footer from "@/components/Footer"
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import FAQAddHandlers from "@/components/FAQAddHandlers"

function getSortedPosts(posts: any[]) {
  return [...posts].sort((a, b) => {
    if (a.frontMatter.order < b.frontMatter.order) {
      return -1;
    }

    if (a.frontMatter.order > b.frontMatter.order) {
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
      <a className="absolute right-2 underline z-10 text-blue-700" href="/other-stuff">other stuff</a>
      <main className="relative">
        <div className="page-container page-container-top-padding">
          <div className="text-gray-800 text-xl text-container mb-16">
            <p className="mb-10">Hello. I’m a senoir full-stack web & app developer living in NYC. Over the past eight years, I&apos;ve done a wide variety of work, from making small personal blogs to servicing Fortune 10 companies. You can see my full resume <a target="_blank" href="/resume.pdf" className="text-blue-700 underline">here</a>.</p>
            <a className="contact-btn text-gray-800 hover:text-gray-700 focus:text-gray-700 rounded-2xl font-semibold text-dark" href="mailto:jaredsalzano@gmail.com" target="_blank">Message me</a>
          </div>
        </div>
        <Marquee className="project-marquee mb-4">
          {posts
            .map(({ frontMatter, slug }, index) => (
              <a key={index} href={`/projects/${slug}`}>
                <article className="h-72 relative rounded-2xl overflow-hidden drop-shadow" style={{ aspectRatio: "1.6 / 1" }}>
                  <Image
                    className={`${frontMatter.imgClass} w-full object-cover`}
                    src={frontMatter.featuredImage}
                    alt={frontMatter.title}
                    fill
                    priority={index > 4}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <h2 className="opacity-0 absolute bottom-4 pl-5 pr-6 font-semibold text-xl text-white drop-shadow z-20">{frontMatter.title}</h2>
                </article>
              </a>
            )
            )}
        </Marquee>
        <div className="page-container">
          <Testimonials className="mb-16" />
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, .9)" }}>
          <FAQ />
          {/* @ts-expect-error Async Server Component */}
          <FAQAddHandlers />
        </div>
      </main>
      <div className="relative" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <Footer />
      </div>
    </>
  )
}
