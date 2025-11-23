import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText, ExternalLink, Code2, Briefcase, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <main className="max-w-5xl mx-auto px-6 py-20 sm:py-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-2 border-background ring-2 ring-muted">
              <Image
                src="/sachin.jpg"
                alt="Sachin Maurya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Sachin Maurya
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Frontend Developer
              </p>
            </div>

            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I'm a developer and researcher with 1 year of experience, passionate about crafting exceptional user experiences.
              I don't just write code; I solve problems and build digital products that matter.
              Always grinding, always learning.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="https://www.linkedin.com/in/sachin-maurya-826111267/"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
              >
                <Briefcase className="w-5 h-5" />
                Hire Me
              </Link>
              <Link
                href="https://buymeacoffee.com/sachin9695"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-amber-950 font-semibold hover:bg-amber-500 transition-all hover:scale-105 active:scale-95"
              >
                <Coffee className="w-5 h-5" />
                Buy me a coffee
              </Link>
            </div>

            <div className="flex gap-4 pt-4 border-t border-border/50">
              <SocialLink href="https://github.com/sachinmaurya96" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/sachin-maurya-826111267/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://medium.com/@letscodefuture" icon={<MediumIcon className="w-5 h-5" />} label="Medium" />
            </div>
          </div>
        </div>

        {/* Project Showcase Section */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>
              <p className="text-muted-foreground text-lg">
                Blog Detail Component
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Full Preview
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors"
              >
                <Code2 className="w-4 h-4" />
                View Code
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground max-w-3xl">
              A comprehensive, production-ready blog detail view built with Next.js and Tailwind CSS.
              Features include a dynamic table of contents, responsive sidebar, social sharing, and an elegant reading experience.
            </p>

            {/* Browser Mockup for Iframe */}
            <div className="rounded-xl border bg-card shadow-2xl overflow-hidden ring-1 ring-border/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-background border text-xs text-muted-foreground font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    localhost:3000/blog
                  </div>
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              <div className="relative w-full h-[600px] bg-background">
                <iframe
                  src="/blog"
                  className="w-full h-full border-0"
                  title="Blog Component Preview"
                  loading="lazy"
                />
                {/* Overlay to prevent interaction if desired, or let it be interactive */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <JsonLd />
    </div>
  );
}

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sachin Maurya',
    jobTitle: 'Frontend Developer',
    url: 'https://sachinmaurya.com', // Placeholder
    sameAs: [
      'https://github.com/sachinmaurya96',
      'https://www.linkedin.com/in/sachin-maurya-826111267/',
      'https://medium.com/@letscodefuture',
      'https://buymeacoffee.com/sachin9695'
    ],
    image: 'https://sachinmaurya.com/sachin.jpg', // Placeholder domain
    description: 'Frontend Developer and Researcher with 1 year of experience.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}
