"use client"

import {useEffect, useState} from "react"

export default function ImageBg() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])
  
  return <>{ready && (
    <div className="image-bg">
      <div className="image-bg__inner"/>
    </div>
  )}</>
}