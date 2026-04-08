import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Paper } from "@/data/research-data";
import MethodologyBadge from "./MethodologyBadge";

interface PaperCardProps {
  paper: Paper;
  projectId: string;
  index: number;
}

const PaperCard = ({ paper, projectId, index }: PaperCardProps) => {
  return (
    <Link
      to={`/project/${projectId}/paper/${paper.id}`}
      className="group block rounded-lg bg-surface-elevated border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-serif text-lg font-bold text-foreground leading-snug group-hover:text-scholarly-navy transition-colors">
          {paper.title}
        </h3>
        <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <p className="text-sm text-muted-foreground mb-3">
        {paper.authors} ({paper.year})
      </p>

      <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
        {paper.summary}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <MethodologyBadge methodology={paper.methodology} />
        {paper.keywords.slice(0, 3).map((kw) => (
          <span
            key={kw}
            className="rounded-full bg-tag px-2.5 py-0.5 text-xs text-tag-foreground"
          >
            {kw}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default PaperCard;
