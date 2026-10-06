import { Maximize2 } from "lucide-react";

export type Project = {
  image: string;
  title: string;
  category: string;
  alt: string;
};

export function ProjectGallery({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (project: Project) => void;
}) {
  const gridColumns =
    projects.length === 1
      ? "grid-cols-1"
      : projects.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridColumns}`}>
      {projects.map((project) => (
        <button
          key={project.title}
          type="button"
          onClick={() => onSelect(project)}
          className="group relative overflow-hidden text-left"
          aria-label={`Ampliar ${project.title}`}
        >
          <img
            src={project.image}
            alt={project.alt}
            width={1024}
            height={1024}
            loading="lazy"
            className="h-[22rem] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[26rem] lg:h-[24rem]"
          />
          <span className="absolute inset-0 bg-image-overlay" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <span>
              <small className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-flame-soft">
                {project.category}
              </small>
              <strong className="font-display text-xl text-image-foreground">
                {project.title}
              </strong>
            </span>
            <span className="flex size-10 shrink-0 items-center justify-center border border-image-border bg-image-chip text-image-foreground backdrop-blur-sm">
              <Maximize2 className="size-4" />
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
