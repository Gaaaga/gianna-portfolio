"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { projects } from "@/app/config/projects"

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section className="bg-[#FFE4E4] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.period}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6A00] hover:text-[#FF6A00]/80 inline-flex items-center"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700">{project.summary}</p>
                </div>
                <button
                  onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {expandedProject === project.title ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {expandedProject === project.title && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-gray-700 whitespace-pre-line mb-6">
                    {project.details.overview}
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Key Highlights:</h4>
                    <ul className="space-y-3">
                      {project.details.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#FF6A00] rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.link && (
                    <div className="mt-8">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white rounded-xl hover:bg-[#FF6A00]/90 transition-colors"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
