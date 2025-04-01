import Link from "next/link"
import type { ReactNode } from "react"

export function NavButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="nav-button"
    >
      {children}
    </Link>
  )
}
