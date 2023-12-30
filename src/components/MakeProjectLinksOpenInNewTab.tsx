"use client"

import {useEffect} from "react"

export default function MakeProjectLinksOpenInNewTab() {

  useEffect(() => {
    document.querySelectorAll('.post-markdown-container a').forEach((anchorTag) => {
      anchorTag.setAttribute("target", "_blank")
    })
  }, [])
  
  return <></>
}