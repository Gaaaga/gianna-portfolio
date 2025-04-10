import { projects } from "@/app/config/data"
import { ProjectCard } from "@/app/components/cards/ProjectCard"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Recent Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                tags={project.tags}
                color={project.color}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
