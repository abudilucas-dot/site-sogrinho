import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

export type Project = {
  image: string;
  title: string;
  category: string;
  alt: string;
};

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const gridColumns =
    projects.length === 1
      ? "grid-cols-1"
      : projects.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [selected]);

  return (
    <>
      <div className={`grid gap-4 ${gridColumns}`}>
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setSelected(project)}
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

      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="fixed right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-colors hover:border-flame hover:bg-flame hover:text-flame-foreground sm:right-6 sm:top-6"
            aria-label="Fechar imagem"
          >
            <X className="size-5" />
          </button>
          <figure
            className="flex h-full w-full flex-col items-center justify-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.alt}
              width={1024}
              height={1024}
              className="max-h-[calc(100dvh-6.5rem)] max-w-full object-contain shadow-2xl"
            />
            <figcaption className="max-w-[calc(100vw-2rem)] truncate text-center text-sm font-semibold text-white/80">
              {selected.title}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
