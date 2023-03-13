"use client"

import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'

const ResponsiveImage = (props) => (
  <Image alt={props.alt} {...props} />
)

const components = {
  img: ResponsiveImage
}

export default function Home(props) {
  return (
    // <MDXProvider>
      <main {...props} />
    // </MDXProvider>
  )
}
