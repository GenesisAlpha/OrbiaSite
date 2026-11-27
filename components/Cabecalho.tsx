import type { Conteudo, Idioma } from "@/conteudo";
import { IDIOMAS } from "@/conteudo";
import { ORBIA_CRM, ROTULOS_LOGIN, ROTAS_CURSO, INSTALACAO, ROTAS, ancoraDaHome, type PaginaId } from "@/conteudo/rotas";

import { Logotipo } from "./Marca";

export const GITHUB = "https://github.com/GenesisAlpha/OrbiaSite";

/** `sufixo`: o resto do caminho depois da página, para o seletor de idioma levar à mesma versão. */
export function Cabecalho({ c, idioma, pagina, sufixo = "" }: { c: Conteudo; idioma: Idioma; pagina: PaginaId | "instalacao"; sufixo?: string }) {
  const naHome = pagina === "home";
  const ancora = (frag: string) => ancoraDaHome(idioma, frag, naHome);
  const guiasAtiva = pagina === "guias";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-5 sm:gap-8 sm:px-6">
        <a href={ROTAS.home[idioma]} className="flex shrink-0 items-center" aria-label="ORBIA">
          <Logotipo className="h-7 w-auto" />
        </a>
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {[
            [ancora("#como-funciona"), c.nav.comoFunciona],
            [ancora("#jornada"), c.nav.prova],
            [ancora("#instalar"), c.nav.instalar],
            [ancora("#preco"), c.nav.preco],
          ].map(([h, l]) => (
            <a key={h} href={h} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.1em] text-text-muted transition-colors duration-150 ease-out-fast hover:text-text">
              {l}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
          {pagina !== "instalacao" && <nav aria-label={c.nav.idioma} className="hidden items-center gap-1 md:flex">
            {IDIOMAS.map((i) => (
              <a
                key={i.codigo}
                href={`${ROTAS[pagina][i.codigo]}${sufixo}`}
                hrefLang={i.codigo}
                aria-current={i.codigo === idioma ? "true" : undefined}
                className={[
                  "rounded-[2px] px-2 py-1 font-mono text-xs uppercase transition-colors duration-150 ease-out-fast",
                  i.codigo === idioma ? "bg-surface text-pulse" : "text-text-muted hover:text-text",
                ].join(" ")}
              >
                {i.codigo === "pt-BR" ? "pt" : i.codigo}
              </a>
            ))}
          </nav>}
          <a href={ROTAS_CURSO[idioma]} hrefLang={idioma} aria-label={c.curso.cta} title={c.curso.cta} className="hidden h-9 items-center whitespace-nowrap rounded-[2px] px-2 font-mono sm:inline-flex text-xs uppercase tracking-[0.1em] text-text transition-colors duration-150 ease-out-fast hover:bg-surface">
            {c.nav.curso}
          </a>
          <a href={ROTAS.guias[idioma]} aria-label={c.nav.guias} aria-current={guiasAtiva ? "page" : undefined} className={[
              "flex h-9 items-center gap-2 rounded-[2px] border px-2.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-150 ease-out-fast sm:px-3",
              guiasAtiva ? "border-pulse text-pulse" : "border-border hover:border-text-muted",
            ].join(" ")}>
            <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 4.5 5.5 8l-3 3.5" />
              <path d="M7.5 11.5h6" />
            </svg>
            <span className="hidden whitespace-nowrap sm:inline xl:hidden">{c.nav.guiasCurto}</span>
            <span className="hidden whitespace-nowrap xl:inline">{c.nav.guias}</span>
          </a>
          <a href={ORBIA_CRM.login} className="inline-flex min-h-9 items-center whitespace-nowrap px-2 font-mono text-xs font-medium text-text hover:text-pulse">
            {ROTULOS_LOGIN[idioma]}
          </a>
          <a href={pagina === "instalacao" ? ORBIA_CRM.signup : INSTALACAO} aria-label={c.nav.ctaInstalar} className="flex h-9 items-center whitespace-nowrap rounded-[2px] bg-pulse px-3 font-mono text-xs font-bold uppercase tracking-[0.1em] text-bg transition-colors duration-150 ease-out-fast hover:bg-text sm:px-4">
            <span className="xl:hidden">{c.nav.instalar}</span>
            <span className="hidden xl:inline">{c.nav.ctaInstalar}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
