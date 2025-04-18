import "@/styles/global.css"
import MakeProjectLinksOpenInNewTab from "@/components/MakeProjectLinksOpenInNewTab"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className="prose page-container" style={{ maxWidth: "none" }}>
        <Link aria-label="home" className="inline-block mt-8 mb-10" href="/">Home</Link>
      </nav>
      <div className="page-container project pb-16">
        {children}
        <MakeProjectLinksOpenInNewTab />
      </div>
      <Footer />
    </div>
  )
}
