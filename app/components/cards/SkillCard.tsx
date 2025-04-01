interface SkillCardProps {
  title: string;
  color: string;
  icon: string;
  items?: string[];
}

export function SkillCard({
  title,
  color,
  icon,
  items = [],
}: SkillCardProps) {
  return (
    <div className="rounded-3xl p-6 shadow-lg border-2 border-black shadow-[0_4px_0_0_black] h-[280px] flex flex-col" style={{ backgroundColor: color }}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 mt-1">
        {items.map((item, index) => (
          <span key={index} className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
