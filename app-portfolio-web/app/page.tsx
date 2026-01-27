'use client';

import { ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'TaskFlow Pro',
      description: 'Real-time task management application with team collaboration features and push notifications',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'ShopHub E-Commerce',
      description: 'Complete e-commerce platform with payment gateway integration, inventory management and analytics',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e4be4f39?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'HealthTrace Dashboard',
      description: 'Health monitoring dashboard with real-time data visualization and predictive analytics',
      tech: ['React', 'D3.js', 'Firebase', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'SocialNest App',
      description: 'Social media platform featuring live streaming, direct messaging and AI-powered content recommendations',
      tech: ['React Native', 'Express', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1522869635100-ce306146efbb?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'CodeAI Assistant',
      description: 'Cloud-based IDE with AI code completion and real-time collaboration features for developers',
      tech: ['Vue.js', 'WebSocket', 'Python', 'OpenAI API'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'FinanceTracker',
      description: 'Personal financial planning app with budget tracking, investment analysis and spending insights',
      tech: ['Flutter', 'Firebase', 'Dart', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1579621970563-ec32593411a6?w=600&h=400&fit=crop',
    },
  ];

  const experiences = [
    {
      id: 1,
      position: 'Senior Full Stack Developer',
      company: 'TechVision Studios',
      duration: '2022 - Present',
      description:
        'Lead development team in creating innovative web applications using modern tech stacks. Mentor junior developers and implement best practices across the development process.',
      highlights: ['Team Lead', 'Architecture Design', 'Code Review', 'DevOps'],
    },
    {
      id: 2,
      position: 'Full Stack Engineer',
      company: 'Digital Solutions Inc',
      duration: '2020 - 2022',
      description:
        'Developed and maintained multiple production applications. Collaborated with design teams to implement pixel-perfect UI. Optimized database queries and significantly improved application performance.',
      highlights: ['Performance Optimization', 'API Development', 'Database Design', 'Testing'],
    },
    {
      id: 3,
      position: 'Frontend Developer',
      company: 'Creative Agency Co',
      duration: '2019 - 2020',
      description:
        'Built responsive web applications and interactive user interfaces. Worked with clients to understand requirements and delivered high-quality solutions on time.',
      highlights: ['Responsive Design', 'UI Implementation', 'Cross-browser Testing', 'Client Communication'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            @yourname
          </div>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm text-accent font-medium">Welcome to my portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Full Stack Developer <span className="text-accent">Crafting Digital</span> Experiences
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Specialized in building scalable web applications with a focus on user experience and code quality. Passionate about solving complex problems and learning new technologies.
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center gap-2">
              View My Work <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-3 border border-border hover:bg-secondary transition-colors rounded-lg font-semibold">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Showcasing some of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 bg-card"
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
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-semibold"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
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
                  <p className="text-accent mb-3 font-semibold">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.duration}</p>
                  <p className="text-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

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
        <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-blue-500/5 border border-accent/30 p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-blue-400 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-muted-foreground text-sm">
            © 2024 Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
