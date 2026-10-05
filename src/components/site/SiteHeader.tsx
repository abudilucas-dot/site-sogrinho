import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

const links = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Produtos", "#produtos"],
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Contato", "#contato"],
] as const;

export function SiteHeader({
  whatsappUrl,
  companyName,
  logoSrc,
}: {
  whatsappUrl: string;
  companyName: string;
  logoSrc: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 isolate border-b border-dark-border bg-dark shadow-lg shadow-black/20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="group flex min-w-0 items-center" aria-label="Ir para o início">
          <img
            src={logoSrc}
            alt={`${companyName} — Acessórios para churrasqueiras`}
            width={2048}
            height={683}
            className="h-[3.25rem] w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14 sm:max-w-[200px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-header-muted transition-colors hover:text-header-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 bg-flame px-5 py-3 text-sm font-bold text-flame-foreground transition-colors hover:bg-flame-strong lg:inline-flex"
        >
          <MessageCircle className="size-4" /> Solicitar orçamento
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex size-11 shrink-0 items-center justify-center border border-dark-border text-dark-foreground transition-colors hover:border-flame hover:text-flame lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-dark-border bg-dark px-5 py-5 lg:hidden"
          aria-label="Navegação para celular"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-dark-border py-4 font-display text-lg text-dark-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-flame px-5 py-4 font-bold text-flame-foreground"
            >
              <MessageCircle className="size-5" /> Solicitar orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
