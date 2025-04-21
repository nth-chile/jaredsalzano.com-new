import { ReactNode } from "react"
interface PageMcConnellLyricsProps {
  children: ReactNode
  trackTitle: String
}

export default function PageMcConnellLyrics(props: PageMcConnellLyricsProps) {
  return (
    <>
      <a className="page-mcconnell-lyrics__back inline-block mt-5 font-serif" href="/page-mcconnell-lyrics">Back</a>
      <h1>{props.trackTitle}</h1>
      <div className="mb-6 font-serif">by Page McConnell</div>
      <div className="page-mcconnell-lyrics__lyrics font-serif">
        {props.children}
      </div>
    </>
  )
}
