"use client"

import styles from './project.module.scss'
import { useEffect, useState, FunctionComponent } from "react"
import Test from '../../../content/test.mdx'
import { MDXProvider } from '@mdx-js/react'

export default function ProjectPage({
  params: { 
    projectSlug 
  }
} : {
  params: {
    projectSlug: String
  }
}) {
  const dashedTitle = projectSlug.replace(/ /g, '-')
  const [Test2, setTest2] = useState<FunctionComponent<any> | null>(() => Test)

  useEffect(() => {
    import(`../../../content/${dashedTitle}.mdx`).then((res) => {
      setTest2(res.default)
    }
    )
  }, [dashedTitle])

  return <MDXProvider>
    <Test2 />
  </MDXProvider>
}
