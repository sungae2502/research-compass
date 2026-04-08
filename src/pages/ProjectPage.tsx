import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/research-data";
import PaperCard from "@/components/PaperCard";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          width={800}
          height={512}
        />
        <div className="absolute inset-0 bg-scholarly-navy/60" />
        <div className="absolute inset-0 flex flex-col justify-end container max-w-5xl pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-3 transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Description + Papers */}
      <main className="container max-w-5xl py-10">
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
          {project.description}
        </p>

        <div className="space-y-4">
          {project.papers.map((paper, i) => (
            <PaperCard
              key={paper.id}
              paper={paper}
              projectId={project.id}
              index={i}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
