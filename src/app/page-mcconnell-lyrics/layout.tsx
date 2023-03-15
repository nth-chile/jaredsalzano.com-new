import "@/styles/page-lyrics.scss"
import {ReactNode} from "react"
import type { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Page McConnell lyrics"
}

export default function PageMcConnellLayout({children}: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <div className="page-mcconnell-lyrics font-times">
        {children}
      </div>
    </>
  )
}
