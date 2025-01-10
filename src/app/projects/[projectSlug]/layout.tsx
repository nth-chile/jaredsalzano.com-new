import MakeProjectLinksOpenInNewTab from "@/components/MakeProjectLinksOpenInNewTab"
import Image from "next/image"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page-container">
      <a aria-label="home" className="inline-block mt-8 mb-10" href="/">Home</a>
      {children}
      <MakeProjectLinksOpenInNewTab />
    </div>
  )
}
