import {ReactNode} from "react"
interface PageMcConnellLyricsProps {
  children: ReactNode
  trackTitle: String
}

export default function PageMcConnellLyrics(props: PageMcConnellLyricsProps) {
  return (
    <>
      <a className="page-mcconnell-lyrics__back inline-block mt-5" href="/page-mcconnell-lyrics">back</a>
      <h1 className="font-work-sans">{props.trackTitle}</h1>
      <div className="mb-6">by Page McConnell</div>
      <div className="page-mcconnell-lyrics__lyrics">
        {props.children}
      </div>
    </>
  )
}
