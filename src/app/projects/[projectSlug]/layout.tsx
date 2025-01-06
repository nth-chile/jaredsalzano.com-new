import MakeProjectLinksOpenInNewTab from "@/components/MakeProjectLinksOpenInNewTab"
import Image from "next/image"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page-container">
      <a aria-label="home" className="text-blue-700 underline inline-block mb-14" href="/">« home</a>
      {children}
      <MakeProjectLinksOpenInNewTab />
    </div>
  )
}
