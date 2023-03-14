import "@/styles/global.scss"
import type { Metadata } from "next"
import Script from 'next/script'

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata: Metadata = {
  title: "Jared Salzano",
  description: "",
  icons: {
    apple: [
      {
        sizes: "180x180",
        type: "image/png",
        url:"/apple-touch-icon.png"
      }
    ],
    other: [
      {
        rel: "icon",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      }
    ]
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Jared Salzano",
    description: "",
    images: [
      {
        url: "/meta-img.png",
        height: 1573,
        width: 1631
      }
    ],
    type: "website",
    url: "https://jaredsalzano.com/"
  },
  other: {
    color: "#5bbad5",
    custom: "meta",
    href: "/safari-pinned-tab.svg",
    rel: "mask-icon",
  },
  themeColor: "white",
  twitter: {
    card: "summary_large_image",
    description: "",
    images: ["/meta-img.png"],
    title: "Jared Salzano"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-105812256-1');
          `}
        </Script>
      </body>
    </html>
  )
}
