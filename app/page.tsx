"use client"
import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import { skills } from "./config/data"
import { NavButton } from "./components/ui/NavButton"
import { CallButton } from "./components/ui/CallButton"
import { SkillCard } from "./components/cards/SkillCard"
import { ProjectCard } from "./components/cards/ProjectCard"
import { ExperienceSection } from "./components/sections/ExperienceSection"

export default function Home() {
	useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const source = url.searchParams.get("utm_source");

      if (source === "resume") {
        // trigger Vercel pageview log, add flag
        const trackingPath = "/from-resume";
        window.history.replaceState({}, "", trackingPath); // clean url
      }
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="navbar">
        <div className="navbar-bg-gradient"></div>
        <div className="navbar-brand">
          <Link href="/" className="navbar-brand-link">
            Gianna Song
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="navbar-nav">
            <NavButton href="#about">About</NavButton>
            <NavButton href="#experience">Experience</NavButton>
            <NavButton href="#projects">Projects</NavButton>
          </nav>
          <CallButton />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="hero-text-container">
            <h1 className="text-4xl md:text-6xl font-bold">
              Code with purpose,
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold">
              design with empathy,
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold">
              ship with clarity.
            </h1>
          </div>

          <p className="mt-8 text-lg max-w-3xl">
            Senior Frontend Engineer & Product-Focused Developer with nearly a decade of experience building thoughtful, scalable products across SaaS, B2B, and B2C.
          </p>

          <div className="mt-12">
            <CallButton />
          </div>
        </section> */}

        {/* About Section with Profile */}
        <section id="about" className="min-h-screen flex items-center bg-gray-50 pt-[40px] md:pt-[80px]">
          <div className="container mx-auto px-4 py-16">
            {/* <h2 className="text-4xl font-bold text-center mb-16">About Me</h2> */}

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
                  <p className="text-base mb-6">
									Hi🙋🏻‍♀️, I’m Gianna, a frontend engineer with nearly a decade of experience crafting thoughtful, scalable products across SaaS, B2B, and B2C.
                  </p>
									<p className="text-base mb-6">
									From fast-moving MVPs to scalable platforms, I’ve led projects across SaaS, fintech, and creative tools, combining deep technical focus with strong product intuition. I care deeply about building things that are not just functional, but meaningful, grounded in real user needs and delivered with a high bar for quality and clarity.
                  </p>
                  <p className="text-base mb-6">
									What sets me apart is the way I bridge engineering, product , and design. I believe great software comes not just from clean code, but from understanding the “why” behind every feature, and aligning teams to deliver real impact.
                  </p>
									<p className="text-base">
									I’m currently based in Melbourne🇦🇺, continuing my journey as a builder, problem solver, and design-driven engineer.
									</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
                {/* Add offset effect to cards */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-black rounded-3xl transform translate-x-1 translate-y-1"></div>
                  ))}
                </div>

                {/* Actual cards */}
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

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <section id="projects" className="py-40 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Recent Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
              <div>
                <ProjectCard
                  title="MoeGo Branded App"
                  image="/images/moego-branded-app.png"
                  description={`A white-label mobile app platform for pet businesses, built with React Native.
Businesses can offer fully branded apps with scheduling, messaging, payment, and real-time tracking—all seamlessly connected to MoeGo's ecosystem.
→ Helped MoeGo secure multiple enterprise accounts with this scalable solution.`}
                  tags={[]}
                  color="bg-[#FFD6D6]"
                  url="moego.pet/pet-parent-portal"
                />
              </div>
              <div>
                <ProjectCard
                  title="MoeGo Online Booking System"
                  image="/images/moego-booking.png"
                  description={`A powerful and flexible scheduling platform that lets pet businesses customize every step of their booking flow.
I led the architecture, frontend system, and the launch of Business Homepage and Abandoned Booking Recovery features.
→ more than 1/3 of MoeGo's total appointments now come through this product.`}
                  tags={[]}
                  color="bg-[#E0DBFF]"
                  url="moego.pet/online-booking-feature"
                />
              </div>
              <div>
                <ProjectCard
                  title="MoeGo Official Website"
                  image="/images/moego-website.png"
                  description={`A conversion-focused marketing website built with performance and brand storytelling in mind.
I led the full redesign, from content strategy to code, bringing MoeGo's brand to life with high-impact visuals and interactions.
→ Significantly increased user engagement and lead conversion.`}
                  tags={[]}
                  color="bg-[#FF5500]"
                  url="moego.pet"
                />
              </div>
              <div>
                <ProjectCard
                  title="Polarr Photo Editor"
                  image="/images/polarr-editor.png"
                  description={`A fast, responsive, cross-platform photo editor available on Web, macOS, Windows, Android, and iOS.
Built high-performance UI components and refactored the architecture to decouple WebGL rendering from interface logic.
→ Ensured smooth editing even for complex photo operations.`}
                  tags={[]}
                  color="bg-[#00C172]"
                  url="photoeditor.polarr.co"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-white font-bold text-2xl">
                Gianna Song
              </Link>
              <p className="mt-1">Melbourne, Australia</p>
            </div>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/gianna-song-1b7441241/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C172]">
                LinkedIn
              </Link>
              <Link href="https://github.com/Gaaaga" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C172]">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

