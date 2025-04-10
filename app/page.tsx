"use client"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { AboutSection } from "./components/sections/AboutSection"
import { ExperienceSection } from "./components/sections/ExperienceSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  )
}

