import "@/styles/other-stuff.scss"
import ImageBg from "@/components/ImageBg"
import Footer from "@/components/Footer"

export default async function OtherStuff() {
  return (
    <>
      <ImageBg />
      <div className="flex flex-col h-100vh">
        <div className="page-container w-full grow">
          <a aria-label="home" className="text-blue-700 underline inline-block mt-8 mb-10" href="/">Home</a>
          <main className="relative">
            <ul className="text-blue-700 underline text-shadow-lg text-lg">
              <li>
                <a target="_blank" href="https://nth-chile.github.io/platos-search/">plato’s search (game)</a>
              </li>
              <li>
                <a target="_blank" href="https://sugarstream.live/">sugarstream</a>
              </li>
              <li>
                <a href="page-mcconnell-lyrics">page lyrics</a>
              </li>
            </ul>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
