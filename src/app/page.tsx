import "@/styles/home.css"
import Image from "next/image"
import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"
import Footer from "@/components/Footer"
import ProjectGrid from "@/components/ProjectGrid";
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"

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
      <a className="absolute right-2 underline z-10 text-blue-700" href="/other-stuff">other stuff</a>
      <main className="relative">
        <div className="sky-bg">
          <div className="page-container pt-28">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <Image
                src="/linkedin.jpg"
                // src="/caroline-avatar.jpg"
                alt="Jared Salzano portrait"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <div className="prose prose-xl mb-16">
                <p><b className="font-[500]">Hi, I&apos;m a front-end-leaning full-stack developer</b> with 8+ years of experience shipping maintainable, high-performance web apps for fast-moving startups, creative agencies, and Fortune 50 companies. I take ownership of projects from planning to deployment, solve complex technical challenges, and collaborate effectively across teams. Lately, I&apos;ve been exploring LLMs and emerging AI cloud services.</p>
                <p>I&apos;m <b className="font-[500]">actively looking for a full-time role</b> at a thoughtful, purpose-driven tech company—NYC or remote—as a senior front-end or full-stack developer. I&apos;m also currently taking on freelance work, excited to collaborate on fresh challenges.
                </p>
                <p className="mb-10">You can see my full resume <a target="_blank" href="/resume.pdf">here</a>.</p>
                <a className="btn rounded-2xl mr-4" target="_blank" href="mailto:jaredsalzano@gmail.com">💬 Message me</a>
              </div>
            </div>
          </div>
          <ProjectGrid className="mb-4" posts={posts} />
          <Testimonials />
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, .9)" }}>
          <FAQ />
        </div>
      </main >
      <div className="relative" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <Footer />
      </div>
    </>
  )
}
