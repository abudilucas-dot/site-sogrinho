import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Plus,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import heroImage from "../assets/churrasqueira-hero.jpg";
import churrasqueiraAbertaImage from "../assets/churrasqueira-aberta.jpeg";
import churrasqueiraLateralImage from "../assets/churrasqueira-lateral.jpeg";
import conjuntoPortasImage from "../assets/conjunto-portas-inox.jpeg";
import grelhaAmplaImage from "../assets/grelha-ampla-inox.jpeg";
import grelhaEspetosImage from "../assets/grelha-espetos-inox.jpeg";
import grelhaFrontalImage from "../assets/grelha-frontal-inox.jpeg";
import logoImage from "../assets/logo-churrasgril-clean.png";
import portaDuplaImage from "../assets/porta-dupla-inox.jpeg";
import portaInferiorImage from "../assets/porta-inferior-inox.jpeg";
import portaSuperiorImage from "../assets/porta-superior-inox.jpeg";
import videoChurrasqueira from "../assets/video-churrasqueira-inox.mp4";
import videoDetalhePorta from "../assets/video-detalhe-porta.mp4";
import videoGrelha from "../assets/video-grelha-inox.mp4";
import videoPortas from "../assets/video-portas-inox.mp4";
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
    image: portaDuplaImage,
    title: "Conjunto de portas em inox",
    category: "Portas em inox",
    alt: "Conjunto de duas portas em aço inox instalado em espaço gourmet",
  },
  {
    image: churrasqueiraAbertaImage,
    title: "Estrutura interna sob medida",
    category: "Churrasqueiras",
    alt: "Churrasqueira revestida em granito com estrutura interna em aço inox",
  },
  {
    image: grelhaEspetosImage,
    title: "Grelha e conjunto de espetos",
    category: "Grelhas",
    alt: "Churrasqueira com grelha e suportes para espetos em aço inox",
  },
  {
    image: portaInferiorImage,
    title: "Porta inferior com acabamento espelhado",
    category: "Portas em inox",
    alt: "Porta inferior em aço inox com acabamento espelhado",
  },
  {
    image: grelhaFrontalImage,
    title: "Grelha frontal em inox",
    category: "Grelhas",
    alt: "Grelha frontal e suporte em aço inox instalados em churrasqueira",
  },
  {
    image: conjuntoPortasImage,
    title: "Acabamento completo para área gourmet",
    category: "Portas em inox",
    alt: "Conjunto vertical com nicho superior e porta inferior em aço inox",
  },
  {
    image: churrasqueiraLateralImage,
    title: "Churrasqueira integrada ao granito",
    category: "Churrasqueiras",
    alt: "Churrasqueira com peças em aço inox integrada à bancada de granito",
  },
  {
    image: portaSuperiorImage,
    title: "Porta superior sob medida",
    category: "Portas em inox",
    alt: "Porta superior de aço inox instalada em parede de área gourmet",
  },
  {
    image: grelhaAmplaImage,
    title: "Conjunto amplo de grelha e suporte",
    category: "Grelhas",
    alt: "Grelha ampla com estrutura de suporte em aço inox",
  },
];

const projectVideos = [
  {
    src: videoPortas,
    title: "Portas em inox instaladas",
    description: "Veja a abertura, o encaixe e o acabamento das portas produzidas sob medida.",
  },
  {
    src: videoDetalhePorta,
    title: "Detalhes do acabamento espelhado",
    description: "Uma visão de perto do brilho e da precisão do conjunto instalado.",
  },
  {
    src: videoChurrasqueira,
    title: "Estrutura interna da churrasqueira",
    description: "Confira a estrutura, os suportes e o espaço preparado para uso.",
  },
  {
    src: videoGrelha,
    title: "Grelha e suportes em funcionamento",
    description: "Veja de perto o conjunto de grelha e espetos instalado na churrasqueira.",
  },
];

type ProjectCategory = "Todos" | "Portas em inox" | "Churrasqueiras" | "Grelhas";

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
    <div className="max-w-3xl" data-reveal>
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
  const [servicePage, setServicePage] = useState<0 | 1>(0);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicePages = [services.slice(0, 4), services.slice(4)];
  const visibleServices = servicePages[servicePage].map((service, index) => ({
    ...service,
    serviceIndex: servicePage * 4 + index,
  }));
  const visibleProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selectedProject]);

  return (
    <div className="overflow-x-clip bg-background">
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-flame"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <SiteHeader whatsappUrl={whatsappUrl} companyName={COMPANY_NAME} logoSrc={logoImage} />

      <main>
        <section
          id="inicio"
          className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Churrasqueira moderna com acabamento em aço inox"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="hero-zoom absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-40">
            <div className="hero-content max-w-3xl">
              <p className="hero-item mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-flame-soft">
                <span className="h-px w-10 bg-flame" />
                Churrasgril · Maringá e região
              </p>
              <h1 className="hero-item font-display text-5xl font-extrabold leading-[0.94] text-image-foreground sm:text-6xl lg:text-8xl">
                Acabamentos em inox que transformam sua churrasqueira.
              </h1>
              <p className="hero-item mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">
                Peças e acessórios em aço inox produzidos com qualidade, precisão e acabamento
                profissional para deixar sua churrasqueira mais bonita, resistente e funcional.
              </p>
              <div className="hero-item mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-shine inline-flex items-center justify-center gap-2 overflow-hidden bg-flame px-6 py-4 text-sm font-bold text-flame-foreground transition-all hover:-translate-y-1 hover:bg-flame-strong"
                >
                  <MessageCircle className="size-5" /> Solicitar orçamento pelo WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 border border-image-border bg-image-chip px-6 py-4 text-sm font-bold text-image-foreground backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-image-chip-hover"
                >
                  Conhecer nossos serviços <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="hero-item mt-12 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-image-border pt-6 md:grid-cols-4">
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
            <div className="mt-10 flex items-center justify-between gap-5" data-reveal>
              <p className="text-sm font-semibold text-muted-foreground">
                Página {servicePage + 1} de 2 · Use as setas para ver todos os serviços.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => setServicePage((current) => (current === 0 ? 1 : 0))}
                  className="flex size-11 items-center justify-center border border-border bg-card text-card-foreground transition-colors hover:border-flame hover:text-flame"
                  aria-label="Ver serviços anteriores"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setServicePage((current) => (current === 0 ? 1 : 0))}
                  className="flex size-11 items-center justify-center border border-border bg-card text-card-foreground transition-colors hover:border-flame hover:text-flame"
                  aria-label="Ver próximos serviços"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <div
              id="produtos"
              key={servicePage}
              className={`service-grid-enter mt-5 grid scroll-mt-28 grid-cols-1 gap-px overflow-hidden border border-border bg-border ${
                servicePage === 0 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
              }`}
            >
              {visibleServices.map(({ icon: Icon, title, description, serviceIndex }) => (
                <article
                  key={title}
                  className="interactive-card group flex h-[20.25rem] flex-col bg-card p-7 transition-all hover:bg-secondary lg:p-8"
                >
                  <div className="mb-10 flex items-start justify-between">
                    <span className="service-icon flex size-11 items-center justify-center border border-border bg-background text-flame transition-all">
                      <Icon className="size-5 transition-transform" />
                    </span>
                    <span className="font-display text-sm text-muted-foreground">
                      0{serviceIndex + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                  <a
                    href={`https://wa.me/${PRIMARY_WHATSAPP}?text=${encodeURIComponent(`Olá! Vi o serviço de ${title} no site e gostaria de solicitar um orçamento.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-flame transition-all hover:gap-3"
                  >
                    Pedir orçamento <ArrowRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-5 flex justify-center gap-2" aria-label="Página dos serviços">
              {([0, 1] as const).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setServicePage(page)}
                  className={`h-2.5 rounded-full transition-all ${
                    servicePage === page ? "w-8 bg-flame" : "w-2.5 bg-border hover:bg-flame"
                  }`}
                  aria-label={`Ir para a página ${page + 1} dos serviços`}
                  aria-pressed={servicePage === page}
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
            <div className="reveal-stagger mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="benefit-card border-t border-dark-border pt-6 transition-all hover:-translate-y-2 hover:border-flame"
                  data-reveal
                >
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
                data-reveal
              >
                {(
                  ["Todos", "Portas em inox", "Churrasqueiras", "Grelhas"] as ProjectCategory[]
                ).map((category) => (
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
            <div key={selectedCategory} className="gallery-enter mt-12">
              <ProjectGallery projects={visibleProjects} onSelect={setSelectedProject} />
            </div>
          </div>
        </section>

        <section className="bg-dark py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Vídeos reais"
              title="Veja nossos trabalhos em detalhes"
              text="Aperte o play para conferir de perto o acabamento, o encaixe e o funcionamento das peças instaladas."
              light
            />
            <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projectVideos.map((video) => (
                <article
                  key={video.title}
                  className="overflow-hidden border border-dark-border bg-surface transition-transform hover:-translate-y-2"
                  data-reveal
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] w-full bg-black object-cover"
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-dark-foreground">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-dark-muted">{video.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow="Processo simples" title="Do orçamento à peça pronta" />
            <ol className="reveal-stagger mt-14 grid gap-8 lg:grid-cols-4">
              {[
                ["Entre em contato", "Envie uma mensagem pelo WhatsApp."],
                ["Envie as informações", "Mande fotos, medidas e explique o que precisa."],
                ["Receba seu orçamento", "Analisamos o projeto e informamos o valor."],
                ["Produção", "Após a aprovação, a peça é produzida de acordo com o projeto."],
              ].map(([title, description], index) => (
                <li
                  key={title}
                  className="process-card relative border-l border-border pl-6 transition-transform hover:-translate-y-2 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-8"
                  data-reveal
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
            <div className="about-image relative overflow-hidden" data-reveal>
              <img
                src={workshopImage}
                alt="Profissional trabalhando em uma peça de aço inox"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute -bottom-5 right-0 bg-flame px-6 py-5 text-flame-foreground sm:right-[-1.25rem]">
                <ShieldCheck className="mb-2 size-7" />
                <strong className="block font-display text-xl">Precisão em cada detalhe</strong>
              </div>
            </div>
            <div data-reveal>
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

        <section className="border-y border-border bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Dúvidas frequentes"
              title="Tudo o que você precisa saber"
              text="Abra uma pergunta para ver a resposta. Se ainda tiver dúvidas, fale diretamente com a gente pelo WhatsApp."
            />
            <div className="reveal-stagger mt-12 border-t border-border">
              {[
                [
                  "Como solicito um orçamento?",
                  "Envie fotos, medidas e uma breve explicação do que você precisa pelo WhatsApp. Assim conseguimos avaliar melhor o projeto.",
                ],
                [
                  "As peças são feitas sob medida?",
                  "Sim. Cada peça é planejada de acordo com as medidas e as necessidades informadas para o projeto.",
                ],
                [
                  "Quais cidades vocês atendem?",
                  "Atendemos Maringá, Sarandi, Marialva, Paiçandu, Floresta e Mandaguaçu. Para locais mais distantes, consulte a possibilidade de envio.",
                ],
                [
                  "Quais produtos vocês fabricam?",
                  "Acessórios em inox, molduras, suporte do fundo, kit granito, forno, lenheiro e gaveta.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="faq-item group border-b border-border"
                  data-reveal
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-bold sm:text-2xl">
                    {question}
                    <span className="flex size-9 shrink-0 items-center justify-center border border-border text-flame transition-all group-open:rotate-45 group-open:border-flame group-open:bg-flame group-open:text-flame-foreground">
                      <Plus className="size-5" />
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section bg-flame py-20">
          <div
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8"
            data-reveal
          >
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
              className="cta-shine inline-flex w-full shrink-0 items-center justify-center gap-3 overflow-hidden bg-primary px-7 py-5 text-sm font-bold uppercase text-primary-foreground transition-transform hover:-translate-y-1 sm:w-auto"
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
            <div className="reveal-stagger mt-12 grid gap-px overflow-hidden border border-dark-border bg-dark-border sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-card bg-dark p-6 transition-all hover:bg-surface"
                data-reveal
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
                className="contact-card bg-dark p-6 transition-all hover:bg-surface"
                data-reveal
              >
                <Phone className="mb-5 size-5 text-flame" />
                <small className="block text-xs uppercase tracking-[0.15em] text-dark-muted">
                  WhatsApp alternativo
                </small>
                <strong className="mt-2 block font-display text-xl text-dark-foreground">
                  +55 (44) 99701-3253
                </strong>
              </a>
              <div className="contact-card bg-dark p-6 sm:col-span-2" data-reveal>
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
              <img
                src={logoImage}
                alt="Churrasgril — Acessórios para churrasqueiras"
                width={2048}
                height={683}
                loading="lazy"
                className="h-20 w-auto max-w-[260px] object-contain"
              />
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

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: "rgba(0, 0, 0, 0.96)",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            aria-label="Fechar imagem"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 1001,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "44px",
              padding: "0 14px",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              color: "#111111",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <X className="size-5" /> Fechar
          </button>
          <figure
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "100%",
              height: "100%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.alt}
              width={1024}
              height={1024}
              loading="eager"
              style={{
                display: "block",
                width: "auto",
                height: "auto",
                maxWidth: "calc(100vw - 24px)",
                maxHeight: "calc(100vh - 104px)",
                objectFit: "contain",
              }}
            />
            <figcaption style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>
              {selectedProject.title}
            </figcaption>
          </figure>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-110"
        aria-label="Solicitar orçamento pelo WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
