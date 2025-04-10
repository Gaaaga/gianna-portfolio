import Link from "next/link"
import { navigationItems } from "@/app/config/page"
import { NavButton } from "@/app/components/ui/NavButton"
import { CallButton } from "@/app/components/ui/CallButton"

export function Navbar() {
  const blogItem = navigationItems.find(item => item.href === '/journal')

  return (
    <header className="navbar">
      <div className="navbar-bg-gradient"></div>
      <div className="navbar-brand">
        <Link href="/" className="navbar-brand-link">
          Gianna
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navigationItems.filter(item => item.href !== '/journal').map((item) => (
            <NavButton key={item.href} href={item.href}>
              {item.label}
            </NavButton>
          ))}
        </nav>
        {/* Blog button shown on all screens */}
        {blogItem && (
          <NavButton href={blogItem.href}>
            {blogItem.label}
          </NavButton>
        )}
        <CallButton />
      </div>
    </header>
  )
}
