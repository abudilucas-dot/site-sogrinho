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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
          <img
            src={logoSrc}
            alt={`${companyName} — Acessórios para churrasqueiras`}
            width={2048}
            height={683}
            className="h-14 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
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
          className="flex size-11 items-center justify-center border border-header-border text-header-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-header-border bg-header px-5 py-5 lg:hidden"
          aria-label="Navegação para celular"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-header-border py-4 font-display text-lg text-header-foreground"
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
