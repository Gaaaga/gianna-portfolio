import Link from "next/link"
import type { ReactNode } from "react"

export function NavButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="nav-button hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      {children}
    </Link>
  )
}
