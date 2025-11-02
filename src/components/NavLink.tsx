import Link from "next/link"

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <div className="prose">
      <Link href={href} className="inline-flex items-center hover:underline transition-opacity no-underline">
        {children}
      </Link>
    </div>
  )
}
