import Link from "next/link"

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`mailto:gaa.song@gmail.com?subject=Interested in connecting from your website&body=Hi Gianna,%0D%0A%0D%0AI found your portfolio website and I'm impressed with your work. I'd love to connect and discuss potential opportunities.%0D%0A%0D%0ABest regards`}
      className={`call-button ${className}`}
    >
      <span className="md:hidden">Message me</span>
      <span className="hidden md:inline">Send me a message</span>
    </a>
  )
}
