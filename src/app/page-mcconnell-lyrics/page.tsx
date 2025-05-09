import Link from "next/link"
import Image from "next/image"

export default function PageMcConnellLyricsIndex() {
  return (
    <div className="page-mcconnell-lyrics__index">
      <Link className="page-mcconnell-lyrics__back inline-block mt-5 font-serif" href="/">Home</Link>
      <h1 className="max-w-xl">Lyrics to Page McConnell’s self-titled album</h1>
      <div className="flex justify-between flex-col sm:flex-row font-serif">
        <ol className="m-0 py-0 order-2 sm:order-1 list-decimal">
          <li>
            <a href="/page-mcconnell-lyrics/beauty-of-a-broken-heart">Beauty of a Broken Heart</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/heavy-rotation">Heavy Rotation</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/maid-marian">Maid Marian</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/close-to-home">Close to Home</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/runaway-bride">Runaway Bride</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/back-in-the-basement">Back in the Basement</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/rules-i-dont-know">Rules I Don’t Know</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/complex-wind">Complex Wind</a>
          </li>
          <li>
            <a href="/page-mcconnell-lyrics/everyone-but-me">Everyone But Me</a>
          </li>
        </ol>
        <Image
          alt="Page McConnell album cover"
          className="mb-10 order-1 sm:order-2 max-w-full"
          height={300}
          priority
          src="/page-mcconnell.jpeg"
          width={300}
        />
      </div>
    </div>
  )
}
