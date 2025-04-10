import Link from "next/link"
import { footerContent } from "@/app/config/page"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-white font-bold text-2xl">
              {footerContent.name}
            </Link>
            <p className="mt-1">{footerContent.location}</p>
          </div>
          <div className="flex gap-6">
            {footerContent.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00C172]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
