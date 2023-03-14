export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page-container">
      <a aria-label="home" className="project__back inline-block mb-14 text-lg" href="/">
        <img alt="" src="/android-chrome-192x192.png" />
      </a>
      {children}
    </div>
  )
}
