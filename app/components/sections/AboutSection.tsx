import Image from "next/image"
import { aboutContent } from "@/app/config/page"
import { skills } from "@/app/config/data"
import { SkillCard } from "@/app/components/cards/SkillCard"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 pt-[40px] md:pt-[80px]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-center gap-16 mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/gianna-profile.jpg"
                alt="Gianna Song"
                width={500}
                height={500}
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              {aboutContent.description.map((paragraph, index) => (
                <p key={index} className="text-base mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-black rounded-3xl transform translate-x-1 translate-y-1"></div>
              ))}
            </div>

            {skills.map((skill) => (
              <div key={skill.id} className="transform hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200">
                <SkillCard
                  title={skill.title}
                  color={skill.color}
                  icon={skill.icon}
                  items={skill.items}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
