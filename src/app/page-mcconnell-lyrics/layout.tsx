import "@/styles/page-lyrics.scss"
import {ReactNode} from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page McConnell lyrics"
}

export default function PageMcConnellLayout({children}: { children: ReactNode }) {
  return (
    <div className="page-mcconnell-lyrics font-times">
      {children}
    </div>
  )
}
