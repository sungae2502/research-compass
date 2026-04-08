import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Quote } from "lucide-react";
import { projects } from "@/data/research-data";
import MethodologyBadge from "@/components/MethodologyBadge";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-10">
    <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
      <span className="inline-block w-8 h-px bg-scholarly-gold" />
      {title}
    </h2>
    {children}
  </section>
);

const PaperDetailPage = () => {
  const { projectId, paperId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const paper = project?.papers.find((p) => p.id === paperId);

  if (!project || !paper) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Paper not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-surface-warm">
        <div className="container max-w-3xl py-4">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to {project.title}
          </Link>
        </div>
      </header>

      <main className="container max-w-3xl py-10">
        {/* Title block */}
        <div className="mb-8 animate-fade-in">
          <MethodologyBadge methodology={paper.methodology} />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-3 mb-2 leading-snug">
            {paper.title}
          </h1>
          <p className="text-muted-foreground">
            {paper.authors} ({paper.year}) · <span className="italic">{paper.journal}</span>
          </p>
        </div>

        {/* Quote */}
        <div className="rounded-lg bg-muted/50 border border-border p-6 mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <Quote className="h-5 w-5 text-scholarly-gold mb-2" />
          <p className="font-serif italic text-foreground/90 leading-relaxed">
            "{paper.quote}"
          </p>
        </div>

        {/* Abstract */}
        <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
          <Section title="Abstract">
            <p className="text-foreground/85 leading-relaxed">{paper.abstract}</p>
          </Section>
        </div>

        {/* Methodology */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Section title="Methodology">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Type", value: paper.methodologyDetail.type },
                { label: "Participants", value: paper.methodologyDetail.participants },
                { label: "Data Collection", value: paper.methodologyDetail.dataCollection },
                { label: "Analysis", value: paper.methodologyDetail.analysis },
              ].map((item) => (
                <div key={item.label} className="rounded-md bg-surface-elevated border border-border p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Findings */}
        <div className="animate-fade-in" style={{ animationDelay: "250ms" }}>
          <Section title="Findings">
            <ul className="space-y-3">
              {paper.findings.map((finding, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-scholarly-green" />
                  {finding}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Implications */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Section title="Implications">
            <ul className="space-y-3">
              {paper.implications.map((imp, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-scholarly-gold" />
                  {imp}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Keywords */}
        <div className="animate-fade-in" style={{ animationDelay: "350ms" }}>
          <Section title="Keywords">
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-tag px-3 py-1 text-sm text-tag-foreground"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container max-w-3xl flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5" />
          Research Paper Archive
        </div>
      </footer>
    </div>
  );
};

export default PaperDetailPage;
