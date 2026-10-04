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

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-12">
        {projects.map((project, index) => (
          <button key={project.title} type="button" onClick={() => setSelected(project)} className={`group relative overflow-hidden text-left ${index === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`} aria-label={`Ampliar ${project.title}`}>
            <img src={project.image} alt={project.alt} width={1024} height={1024} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${index === 0 ? "h-[28rem] md:h-full" : "h-[18rem]"}`} />
            <span className="absolute inset-0 bg-image-overlay" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <span>
                <small className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-flame-soft">{project.category}</small>
                <strong className="font-display text-xl text-image-foreground">{project.title}</strong>
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center border border-image-border bg-image-chip text-image-foreground backdrop-blur-sm"><Maximize2 className="size-4" /></span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-modal p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 flex size-12 items-center justify-center border border-image-border bg-image-chip text-image-foreground" aria-label="Fechar imagem">
            <X className="size-5" />
          </button>
          <img src={selected.image} alt={selected.alt} width={1024} height={1024} className="max-h-[88vh] max-w-[92vw] object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
