import {ReactNode} from "react"
import { Work_Sans } from "next/font/google"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "700"
})

interface PageMcConnellLyricsProps {
  children: ReactNode
  trackTitle: String
}

export default function PageMcConnellLyrics(props: PageMcConnellLyricsProps) {
  return (
    <>
      <a className="page-mcconnell-lyrics__back inline-block mt-5" href="/page-mcconnell-lyrics">back</a>
      <h1 className={`${workSans.className}`}>{props.trackTitle}</h1>
      <div className="mb-6">by Page McConnell</div>
      <div className="page-mcconnell-lyrics__lyrics">
        {props.children}
      </div>
    </>
  )
}
