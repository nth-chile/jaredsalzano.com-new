import MakeProjectLinksOpenInNewTab from "@/components/MakeProjectLinksOpenInNewTab"
import Image from "next/image"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page-container">
      <a aria-label="home" className="project__back inline-block mb-14 text-lg" href="/">
        <Image
          alt=""
          src="/android-chrome-192x192.png"
          height={60}
          width={60}
        />
      </a>
      {children}
      <MakeProjectLinksOpenInNewTab />
    </div>
  )
}
