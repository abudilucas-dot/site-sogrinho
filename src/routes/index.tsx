import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Flame,
  Hammer,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import heroImage from "../assets/churrasqueira-hero.jpg";
import frameImage from "../assets/projeto-moldura.jpg";
import grillImage from "../assets/projeto-grelha.jpg";
import workshopImage from "../assets/oficina-inox.jpg";
import { SiteHeader } from "../components/site/SiteHeader";
import { ProjectGallery, type Project } from "../components/site/ProjectGallery";

const COMPANY_NAME = "Churrasgril";
const PRIMARY_WHATSAPP = "5544998899776";
const SECONDARY_WHATSAPP = "5544997013253";
const WHATSAPP_MESSAGE =
  "Olá! Vi o site e gostaria de solicitar um orçamento para um serviço em inox para minha churrasqueira.";
const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const secondaryWhatsappUrl = `https://wa.me/${SECONDARY_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    icon: Wrench,
    title: "Acessórios em inox",
    description:
      "Acessórios em inox para deixar a churrasqueira mais prática, resistente e bem-acabada.",
  },
  {
    icon: Ruler,
    title: "Molduras",
    description:
      "Molduras produzidas sob medida para proporcionar um acabamento moderno e um encaixe preciso.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte do fundo",
    description:
      "Suportes fabricados de acordo com as medidas e características de cada churrasqueira.",
  },
  {
    icon: Sparkles,
    title: "Kit granito",
    description:
      "Kits personalizados para complementar projetos de churrasqueira com acabamento em granito.",
  },
  {
    icon: Flame,
    title: "Forno",
    description: "Forno produzido em inox de acordo com as necessidades e as medidas do projeto.",
  },
  {
    icon: Hammer,
    title: "Lenheiro",
    description: "Lenheiro em inox sob medida para organizar a lenha e valorizar o espaço gourmet.",
  },
  {
    icon: CircleCheck,
    title: "Gaveta",
    description:
      "Gavetas em inox fabricadas sob medida para oferecer praticidade e um acabamento uniforme.",
  },
];

const benefits = [
  {
    title: "Feito sob medida",
    description: "Cada peça é produzida conforme as medidas e necessidades de cada projeto.",
  },
  {
    title: "Aço inox de qualidade",
    description: "Material resistente, durável e ideal para ambientes gourmet e churrasqueiras.",
  },
  {
    title: "Acabamento profissional",
    description: "Atenção aos detalhes para entregar um resultado bonito e bem finalizado.",
  },
  {
    title: "Atendimento personalizado",
    description:
      "Envie fotos, medidas e informações da churrasqueira para solicitar seu orçamento.",
  },
];

const projects: Project[] = [
  {
    image: frameImage,
    title: "Moldura com encaixe preciso",
    category: "Molduras",
    alt: "Moldura em aço inox instalada em churrasqueira",
  },
  {
    image: grillImage,
    title: "Conjunto gourmet em inox",
    category: "Churrasqueiras",
    alt: "Conjunto de grelha e acessórios em aço inox",
  },
  {
    image: heroImage,
    title: "Ambiente gourmet completo",
    category: "Projeto personalizado",
    alt: "Área gourmet moderna com churrasqueira em inox",
  },
];

type ProjectCategory = "Todos" | "Molduras" | "Churrasqueiras";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acessórios em Inox para Churrasqueiras em Maringá | Churrasgril" },
      {
        name: "description",
        content:
          "Acessórios, molduras, fornos, lenheiros e gavetas em inox para churrasqueiras. Fabricação sob medida em Maringá e região. Peça seu orçamento.",
      },
      { property: "og:title", content: "Churrasgril | Acessórios em Inox para Churrasqueiras" },
      {
        property: "og:description",
        content:
          "Fabricação sob medida de acessórios em inox para churrasqueiras em Maringá e região.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-flame">
        <span className="h-px w-8 bg-flame" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl font-bold leading-[1.05] sm:text-5xl ${light ? "text-dark-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-dark-muted" : "text-muted-foreground"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function Index() {
  const [serviceStartIndex, setServiceStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
  const visibleServices = Array.from({ length: 4 }, (_, position) => {
    const serviceIndex = (serviceStartIndex + position) % services.length;
    return { ...services[serviceIndex], serviceIndex };
  });
  const visibleProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="overflow-x-hidden bg-background">
      <SiteHeader whatsappUrl={whatsappUrl} companyName={COMPANY_NAME} />

      <main>
        <section
          id="inicio"
          className="relative flex min-h-[92svh] items-end overflow-hidden pt-20"
        >
          <img
            src={heroImage}
            alt="Churrasqueira moderna com acabamento em aço inox"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-40">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-flame-soft">
                <span className="h-px w-10 bg-flame" />
                Churrasgril · Maringá e região
              </p>
              <h1 className="font-display text-5xl font-extrabold leading-[0.94] text-image-foreground sm:text-6xl lg:text-8xl">
                Acabamentos em inox que transformam sua churrasqueira.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">
                Peças e acessórios em aço inox produzidos com qualidade, precisão e acabamento
                profissional para deixar sua churrasqueira mais bonita, resistente e funcional.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-flame px-6 py-4 text-sm font-bold text-flame-foreground transition-colors hover:bg-flame-strong"
                >
                  <MessageCircle className="size-5" /> Solicitar orçamento pelo WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 border border-image-border bg-image-chip px-6 py-4 text-sm font-bold text-image-foreground backdrop-blur-sm transition-colors hover:bg-image-chip-hover"
                >
                  Conhecer nossos serviços <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-image-border pt-6 md:grid-cols-4">
              {[
                "Fabricação sob medida",
                "Acabamento profissional",
                "Alta durabilidade",
                "Atendimento personalizado",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-image-foreground sm:text-sm"
                >
                  <Check className="size-4 shrink-0 text-flame-soft" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="O que fazemos"
              title="Soluções em inox para sua churrasqueira"
              text="Produzimos peças e acabamentos em aço inox para churrasqueiras, buscando sempre um excelente acabamento, resistência e encaixe perfeito para cada projeto."
            />
            <div className="mt-10 flex items-center justify-between gap-5">
              <p className="text-sm font-semibold text-muted-foreground">
                Use as setas para conhecer todos os nossos serviços.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setServiceStartIndex((current) =>
                      current === 0 ? services.length - 1 : current - 1,
                    )
                  }
                  className="flex size-11 items-center justify-center border border-border bg-card text-card-foreground transition-colors hover:border-flame hover:text-flame"
                  aria-label="Ver serviços anteriores"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setServiceStartIndex((current) => (current + 1) % services.length)}
                  className="flex size-11 items-center justify-center border border-border bg-card text-card-foreground transition-colors hover:border-flame hover:text-flame"
                  aria-label="Ver próximos serviços"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <div
              id="produtos"
              className="mt-5 grid scroll-mt-28 grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
            >
              {visibleServices.map(({ icon: Icon, title, description, serviceIndex }, position) => (
                <article
                  key={title}
                  className={`group bg-card p-7 transition-colors hover:bg-secondary lg:p-8 ${
                    position === 1 ? "hidden sm:block" : position > 1 ? "hidden lg:block" : ""
                  }`}
                >
                  <div className="mb-10 flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center border border-border bg-background text-flame">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm text-muted-foreground">
                      0{serviceIndex + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 flex justify-center gap-2" aria-label="Posição dos serviços">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setServiceStartIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    serviceStartIndex === index ? "w-8 bg-flame" : "w-2.5 bg-border hover:bg-flame"
                  }`}
                  aria-label={`Começar por ${service.title}`}
                  aria-pressed={serviceStartIndex === index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Nossos diferenciais"
              title="Por que escolher nosso trabalho?"
              light
            />
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="border-t border-dark-border pt-6">
                  <div className="mb-8 flex items-center justify-between">
                    <CircleCheck className="size-6 text-flame" />
                    <span className="font-display text-4xl font-bold text-dark-number">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-dark-muted">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionIntro
                eyebrow="Projetos realizados"
                title="Conheça alguns dos nossos trabalhos"
                text="Cada projeto é desenvolvido para unir resistência, funcionalidade e um acabamento à altura do seu espaço gourmet."
              />
              <div
                className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                aria-label="Filtrar projetos"
              >
                {(["Todos", "Molduras", "Churrasqueiras"] as ProjectCategory[]).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`border px-4 py-2 transition-colors ${
                      selectedCategory === category
                        ? "border-flame bg-flame-muted text-flame"
                        : "border-border hover:border-flame hover:text-flame"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <ProjectGallery projects={visibleProjects} />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow="Processo simples" title="Do orçamento à peça pronta" />
            <ol className="mt-14 grid gap-8 lg:grid-cols-4">
              {[
                ["Entre em contato", "Envie uma mensagem pelo WhatsApp."],
                ["Envie as informações", "Mande fotos, medidas e explique o que precisa."],
                ["Receba seu orçamento", "Analisamos o projeto e informamos o valor."],
                ["Produção", "Após a aprovação, a peça é produzida de acordo com o projeto."],
              ].map(([title, description], index) => (
                <li
                  key={title}
                  className="relative border-l border-border pl-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-8"
                >
                  <span className="mb-5 flex size-11 items-center justify-center bg-primary font-display text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  {index < 3 && (
                    <ChevronRight className="absolute -right-5 top-9 hidden size-4 text-border lg:block" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="relative">
              <img
                src={workshopImage}
                alt="Profissional trabalhando em uma peça de aço inox"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-5 right-0 bg-flame px-6 py-5 text-flame-foreground sm:right-[-1.25rem]">
                <ShieldCheck className="mb-2 size-7" />
                <strong className="block font-display text-xl">Precisão em cada detalhe</strong>
              </div>
            </div>
            <div>
              <SectionIntro
                eyebrow="Sobre nós"
                title="Qualidade e cuidado em cada detalhe"
                text="Trabalhamos com fabricação de peças e acessórios em aço inox para churrasqueiras, buscando oferecer soluções resistentes, funcionais e com excelente acabamento. Cada projeto recebe atenção especial para que o resultado combine perfeitamente com o espaço do cliente."
              />
              <div className="mt-8 space-y-4 border-t border-border pt-7">
                {[
                  "Análise individual de cada projeto",
                  "Fabricação com medidas personalizadas",
                  "Comunicação direta durante o processo",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <Check className="size-4 text-flame" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-flame py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-flame-ink-muted">
                Seu projeto começa aqui
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-flame-foreground sm:text-5xl">
                Precisa de uma peça em inox para sua churrasqueira?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-flame-ink-muted">
                Envie uma foto da sua churrasqueira pelo WhatsApp e conte o que você precisa. Assim
                podemos entender melhor o projeto e preparar seu orçamento.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 bg-primary px-7 py-5 text-sm font-bold uppercase text-primary-foreground transition-transform hover:-translate-y-1 sm:w-auto"
            >
              <MessageCircle className="size-5" /> Pedir orçamento pelo WhatsApp
            </a>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 bg-dark py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Fale conosco"
              title="Vamos conversar sobre seu projeto"
              text="Envie fotos e medidas para receber uma avaliação personalizada da Churrasgril."
              light
            />
            <div className="mt-12 grid gap-px overflow-hidden border border-dark-border bg-dark-border sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-dark p-6 transition-colors hover:bg-surface"
              >
                <MessageCircle className="mb-5 size-5 text-flame" />
                <small className="block text-xs uppercase tracking-[0.15em] text-dark-muted">
                  WhatsApp para orçamentos
                </small>
                <strong className="mt-2 block font-display text-xl text-dark-foreground">
                  +55 (44) 99889-9776
                </strong>
              </a>
              <a
                href={secondaryWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-dark p-6 transition-colors hover:bg-surface"
              >
                <Phone className="mb-5 size-5 text-flame" />
                <small className="block text-xs uppercase tracking-[0.15em] text-dark-muted">
                  WhatsApp alternativo
                </small>
                <strong className="mt-2 block font-display text-xl text-dark-foreground">
                  +55 (44) 99701-3253
                </strong>
              </a>
              <div className="bg-dark p-6 sm:col-span-2">
                <MapPin className="mb-5 size-5 text-flame" />
                <small className="block text-xs uppercase tracking-[0.15em] text-dark-muted">
                  Região de atendimento
                </small>
                <strong className="mt-2 block font-display text-xl text-dark-foreground">
                  Maringá e cidades próximas
                </strong>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-dark-muted">
                  Atendimento em Maringá, Sarandi, Marialva, Paiçandu, Floresta e Mandaguaçu. Para
                  regiões mais distantes, consulte a possibilidade de envio direto com fabricação
                  sob medida.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-dark-border bg-dark py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <strong className="font-display text-xl text-dark-foreground">{COMPANY_NAME}</strong>
              <p className="mt-1 text-sm text-dark-muted">
                Acessórios e acabamentos em inox para churrasqueiras.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-dark-muted">
              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t border-dark-border pt-6 text-xs text-dark-muted">
            © 2026 {COMPANY_NAME}. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105"
        aria-label="Solicitar orçamento pelo WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
