import type { ReactNode } from "react"

interface ProcessCardProps {
  number: string;
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
}

export function ProcessCard({
  number,
  title,
  icon,
  description,
  color,
}: ProcessCardProps) {
  return (
    <div className={`${color} rounded-3xl p-6 shadow-lg border-2 border-black shadow-[0_4px_0_0_black]`}>
      <h3 className="text-xl font-bold mb-2">
         {title}
      </h3>
      <p>{description}</p>
    </div>
  )
}
