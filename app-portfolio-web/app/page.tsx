"use client";

import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Book Review App",
      description:
        "A book catalog and review web app with search by title, filter tabs (popular/highest-rated by time range), pagination, average rating + review count aggregation, and a review form with validation plus request throttling. Book details are cached for faster access.",
      tech: ["Laravel 12", "PHP 8.2", "Blade", "Tailwind CSS", "Eloquent ORM"],
      image: "./book-review.png",
      link: "https://github.com/iqbalmudzakky/book-review-app-laravel",
    },
    {
      id: 2,
      title: "Task List App",
      description:
        "A CRUD task management web app with pagination, validation, and status toggle, enabling users to create, view, update, and complete tasks efficiently.",
      tech: [
        "Laravel 12",
        "PHP 8.2",
        "Blade",
        "Tailwind CSS",
        "MySQL",
        "Alpine.js",
      ],
      image: "./task-list.png",
      link: "https://github.com/iqbalmudzakky/task-list-app-laravel",
    },
    {
      id: 3,
      title: "MedQueueAI",
      description:
        "A real-time clinic queue management and payment web application with ETA prediction, enabling patients to monitor queue status live and clinics to manage consultations efficiently.",
      tech: [
        "Next.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "Socket.io",
        "OpenAI API",
        "Cloudinary",
        "Tailwind CSS",
      ],
      image: "./medqueue-ai.png",
      link: "https://medqueue-navy.vercel.app/",
    },
    {
      id: 4,
      title: "MyQuip-App",
      description:
        "A modern e-commerce web application inspired by Quip, featuring product browsing, wishlist management, user authentication, and a responsive shopping experience.",
      tech: [
        "Next.js",
        "TypeScript",
        "RestAPI",
        "MongoDB",
        "JWT Authentication",
        "Tailwind CSS",
        "Zod",
        "Infinite-Scroll",
      ],
      image: "./myquip.png",
      link: "https://myquip-app.vercel.app/",
    },
    {
      id: 5,
      title: "GameHub-Insight",
      description:
        "A full-stack gaming discovery platform featuring infinite scrolling, search, authentication, favorites, and AI-based game recommendations.",
      tech: [
        "React",
        "Redux Toolkit",
        "Vite",
        "Axios",
        "Infinite Scroll",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "JWT",
        "Google OAuth",
        "Gemini API",
        "Jest",
        "Supertest",
      ],
      image: "./gamehub-insight.png",
      link: "https://github.com/iqbalmudzakky/gamehub-insight",
    },
  ];

  const experiences = [
    {
      id: 1,
      position: "Software Developer Intern",
      company: "Datacom",
      duration: "January 2026 - February 2026",
      description:
        "Completed a software development job simulation at Datacom involving application review, root cause analysis of bugs, implementation of fixes, and planning for future improvements.",
      highlights: [
        "Debugging with Browser Developer Tools",
        "Identifying Root Cause of UI Bugs",
        "Fixing Map Coordinate Logic",
        "Working with Existing Codebase",
      ],
    },
    {
      id: 2,
      position: "Frontend Software Engineer Intern",
      company: "Skyscanner",
      duration: "January 2026",
      description:
        "Completed a front-end engineering job simulation by developing a React application with Skyscanner’s Backpack design system and implementing a calendar-based travel date selection feature.",
      highlights: [
        "React Development",
        "UI Component Customisation",
        "Calendar Feature Implementation",
      ],
    },
    {
      id: 3,
      position: "Design Engineer",
      company: "PT Nifa Persada Teknindo",
      duration: "February 2024 - September 2024",
      description:
        "Designed mechanical components using SolidWorks and AutoCAD with a focus on manufacturability and cost efficiency, while collaborating with cross-functional teams to ensure timely project delivery and smooth workflow coordination.",
      highlights: [
        "3D Modeling & 2D Drafting",
        "Design for Manufacturability",
        "Cross-functional Collaboration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-linear-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            <a href="#">Muhammad Iqbal Mudzakky</a>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 md:pt-16 lg:pt-12 md:pb-24 lg:pb-26">
        <div className="max-w-3xl">
          <div className="mb-3 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm text-accent font-medium">
              Hi, I’m Dzaky 👋
            </span>
          </div>
          <div className="mb-6 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
            <span className="text-sm text-accent font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="">Full Stack Developer</span>
            <br />
            <span className="text-accent">
              Focused On Clean, Maintainable Code
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            A Full Stack Developer who enjoys building real-world web
            applications, writing clean code, and continuously learning new
            technologies.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center gap-2"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border hover:bg-secondary transition-colors rounded-lg font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing some of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 bg-card relative"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all text-sm font-semibold absolute bottom-4 right-4"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-20 border-t border-border"
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey in the tech industry and professional growth
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l border-border hover:border-accent/50 transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full border-4 border-background" />

              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                  <p className="text-accent mb-3 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.duration}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-secondary/50 border border-border text-foreground text-xs rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-20 border-t border-border"
      >
        <div className="rounded-2xl bg-linear-to-br from-accent/10 to-blue-500/5 border border-accent/30 p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <a
            href="https://wa.me/6285722203216"
            target="_blank"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-blue-400 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-muted-foreground text-sm">
            © 2025 Muhammad Iqbal Mudzakky. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/iqbalmudzakky"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-iqbal-mudzakky-4b4829203/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
