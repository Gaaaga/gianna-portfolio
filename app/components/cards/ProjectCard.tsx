import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  color: string;
  url: string;
}

export function ProjectCard({
  title,
  image,
  description,
  tags,
  color,
  url,
}: ProjectCardProps) {
  return (
    <div className={`${color} rounded-3xl overflow-hidden border-2 border-black shadow-[4px_4px_0_0_black]`}>
      <div className="p-4">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {tags.length > 0 && (
          <p className="text-sm mb-4 text-gray-600">{tags.join(" • ")}</p>
        )}
        <p className="mb-4 text-gray-700 whitespace-pre-line">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{url}</span>
          <Link
            href={url.startsWith('http') ? url : `https://${url}`}
            target="_blank"
            className="bg-white border-2 border-black px-4 py-2 rounded-full text-sm font-medium shadow-[2px_2px_0_0_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  )
}
