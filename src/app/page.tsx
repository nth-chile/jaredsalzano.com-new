import "@/styles/home.css"
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
        <div className="page-container pt-28">
          <div className="text-gray-800 text-xl text-container mb-16">
            <p className="mb-5">Hello, I&apos;m a full-stack developer based in NYC. Over the past eight years, I&apos;ve built scalable, high-performance web applications for fast-moving startups, creative agencies, and Fortune 50 companies. I&apos;m experienced with leading projects from architecture to deployment, collaborating across teams, and solving complex technical challenges. Lately, I&apos;ve been learning about LLMs, vector databases, and emerging AI cloud services.</p>
            <p className="mb-5">I&apos;m open to freelance work, and I&apos;m looking for a full-time position at a tech company.</p>
            <p className="mb-10">You can see my full resume <a target="_blank" href="/resume.pdf" className="text-blue-700 underline">here</a>.</p>
            <a className="contact-btn text-gray-800 hover:text-gray-700 focus:text-gray-700 rounded-2xl font-semibold text-dark" href="mailto:jaredsalzano@gmail.com" target="_blank">Message me</a>
          </div>
        </div>
        <Marquee className="project-marquee mb-4">
          {posts
            .map(({ frontMatter, slug }, index) => (
              <a key={index} href={`/projects/${slug}`}>
                <article className="h-60 sm:h-72 relative rounded-2xl overflow-hidden shadow" style={{ aspectRatio: "1.6 / 1" }}>
                  <Image
                    className={`${frontMatter.imgClass} w-full object-cover`}
                    src={frontMatter.featuredImage}
                    alt={frontMatter.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <h2 className="opacity-0 absolute bottom-4 pl-5 pr-6 font-semibold text-xl text-white drop-shadow z-20">{frontMatter.title}</h2>
                </article>
              </a>
            )
            )}
        </Marquee>
        <Testimonials />
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
