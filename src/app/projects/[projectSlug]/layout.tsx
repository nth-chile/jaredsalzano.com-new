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
      <div className="page-container project">
        <div className="prose">
          <Link aria-label="home" className="inline-block mt-8 mb-10" href="/">Home</Link>
        </div>
        {children}
        <MakeProjectLinksOpenInNewTab />
      </div>
      <Footer />
    </div>
  )
}
