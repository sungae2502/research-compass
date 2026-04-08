import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/research-data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block overflow-hidden rounded-lg bg-surface-elevated border border-border shadow-sm hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={512}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-scholarly-green">
            {project.paperCount} {project.paperCount === 1 ? "paper" : "papers"}
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-scholarly-navy" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
