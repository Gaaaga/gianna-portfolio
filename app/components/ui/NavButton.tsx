import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import type { ReactNode } from "react"

export function NavButton({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Check if this is a section link (contains #)
    if (href.includes("#")) {
      // If we're not on the homepage, first navigate to home
      if (pathname !== "/") {
        router.push("/")
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const elementId = href.split("#")[1]
          const element = document.getElementById(elementId)
          element?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        // If we're already on homepage, just scroll
        const elementId = href.split("#")[1]
        const element = document.getElementById(elementId)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // For regular page navigation
      router.push(href)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="nav-button hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      {children}
    </Link>
  )
}
