import { BookOpen } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/research-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface-warm">
        <div className="container max-w-5xl py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="h-6 w-6 text-scholarly-green" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Research Archive
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            Research Paper Archive
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Connecting research ideas and making insights visible
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="container max-w-5xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
