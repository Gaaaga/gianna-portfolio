"use client"

import { useState, useRef, useEffect } from "react"
import { experiences } from "@/app/config/data"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import "@/app/styles/experience.css"

export function ExperienceSection() {
  const [currentCompany, setCurrentCompany] = useState(experiences[0]);
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: [0, 1],
        rootMargin: "-80px 0px 0px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className={`experience-section min-h-screen flex items-center bg-[#FFE4E4] ${isInView ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Professional Experience</h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex experience-container gap-8 max-w-7xl mx-auto">
          <div className={`left-panel w-1/2 ${isInView ? 'sticky top-20' : ''}`}>
            <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0_0_black]">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">{currentCompany.company}</h2>
                      <p className="text-xl mt-1 text-gray-800">{currentCompany.role}</p>
                      <p className="text-sm mt-1 text-gray-600">{currentCompany.period}</p>
                    </div>
                    {currentCompany.website && (
                      <a
                        href={`https://${currentCompany.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6A00] hover:text-[#FF6A00]/80 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  {currentCompany.description?.split('\n').map((line: string, index: number) => (
                    <p key={index} className="whitespace-pre-line">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right-panel w-1/2 max-w-md space-y-2">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`timeline-item p-3 transition-all duration-300 ${
                  currentCompany.id === exp.id
                    ? 'current-item bg-[#FFF3EB]'
                    : 'hover-item'
                } cursor-pointer rounded-lg`}
                onClick={() => {
                  setCurrentCompany(exp);
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm text-gray-500 group-hover:text-[#FF6A00]/80">
                    {exp.period}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{exp.emoji}</span>
                    <h3 className={`text-lg leading-tight ${currentCompany.id === exp.id ? 'text-[#FF6A00]' : 'group-hover:text-[#FF6A00]'}`}>
                      {exp.company}
                    </h3>
                  </div>
                  <p className={`text-sm ${currentCompany.id === exp.id ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {exp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div
                className={`timeline-item p-4 transition-all duration-300 ${
                  expandedCompany === exp.company
                    ? 'current-item bg-[#FFF3EB]'
                    : 'hover-item'
                } cursor-pointer rounded-lg`}
                onClick={() => setExpandedCompany(expandedCompany === exp.company ? null : exp.company)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs text-gray-500 group-hover:text-[#FF6A00]/80">
                      {exp.period}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{exp.emoji}</span>
                      <h3 className={`text-base leading-tight ${expandedCompany === exp.company ? 'text-[#FF6A00]' : 'group-hover:text-[#FF6A00]'}`}>
                        {exp.company}
                      </h3>
                    </div>
                    <p className={`text-sm ${expandedCompany === exp.company ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                      {exp.role}
                    </p>
                  </div>
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    {expandedCompany === exp.company ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {expandedCompany === exp.company && (
                <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-[4px_4px_0_0_black]">
                  <div className="space-y-4 text-sm text-gray-700">
                    {exp.description?.split('\n').map((line: string, index: number) => (
                      <p key={index} className="whitespace-pre-line">{line}</p>
                    ))}
                    {exp.website && (
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#FF6A00] hover:text-[#FF6A00]/80 mt-4"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
