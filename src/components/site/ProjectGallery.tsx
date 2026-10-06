import { Maximize2, X } from "lucide-react";

export type Project = {
  image: string;
  title: string;
  category: string;
  alt: string;
};

export function ProjectGallery({
  projects,
  selectedProject,
  onSelect,
  onClose,
}: {
  projects: Project[];
  selectedProject: Project | null;
  onSelect: (project: Project) => void;
  onClose: () => void;
}) {
  const gridColumns =
    projects.length === 1
      ? "grid-cols-1"
      : projects.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridColumns}`}>
      {projects.map((project) => {
        const isSelected = selectedProject?.title === project.title;

        return (
          <article
            key={project.title}
            className={`relative overflow-hidden ${
              isSelected
                ? "col-span-full border border-flame bg-[#080a0e] p-2 sm:p-3"
                : "bg-[#080a0e]"
            }`}
          >
            {isSelected && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar imagem ampliada"
                className="absolute right-4 top-4 z-20 flex min-h-11 items-center gap-2 rounded-full bg-white px-4 font-bold text-[#111111] shadow-xl"
              >
                <X className="size-5" /> Fechar
              </button>
            )}

            <button
              type="button"
              onClick={() => (isSelected ? onClose() : onSelect(project))}
              className="group relative block w-full overflow-hidden text-left"
              aria-label={isSelected ? `Fechar ${project.title}` : `Ampliar ${project.title}`}
              aria-expanded={isSelected}
            >
              <img
                src={project.image}
                alt={project.alt}
                width={1024}
                height={1024}
                loading={isSelected ? "eager" : "lazy"}
                className={
                  isSelected
                    ? "max-h-[75svh] min-h-[320px] w-full bg-black object-contain"
                    : "h-[22rem] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[26rem] lg:h-[24rem]"
                }
              />
              {!isSelected && <span className="absolute inset-0 bg-image-overlay" />}
              <span
                className={
                  isSelected
                    ? "flex items-center justify-between gap-4 bg-[#080a0e] px-3 py-4 sm:px-5"
                    : "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6"
                }
              >
                <span>
                  <small className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-flame-soft">
                    {project.category}
                  </small>
                  <strong className="font-display text-xl text-image-foreground">
                    {project.title}
                  </strong>
                </span>
                {!isSelected && (
                  <span className="flex size-10 shrink-0 items-center justify-center border border-image-border bg-image-chip text-image-foreground backdrop-blur-sm">
                    <Maximize2 className="size-4" />
                  </span>
                )}
              </span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
