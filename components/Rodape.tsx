import type { Conteudo, Idioma } from "@/conteudo";
import { TEXTOS_CHANGELOG, formatarData } from "@/conteudo/changelog";
import { ROTAS_CURSO, INSTALACAO, ROTAS, ancoraDaHome, type PaginaId } from "@/conteudo/rotas";

import { GITHUB } from "./Cabecalho";
import { Simbolo } from "./Marca";

/** Resolve o `href` do rodapé: âncora da home, página do site ou caminho do repositório. */
function resolver(href: string, idioma: Idioma, naHome: boolean): string {
  if (href.startsWith("#")) return ancoraDaHome(idioma, href, naHome);
  if (href === "@guias") return ROTAS.guias[idioma];
  if (href === "@changelog") return ROTAS.changelog[idioma];
  if (href === "@curso") return ROTAS_CURSO[idioma];
  if (href === "@instalacao") return INSTALACAO;
  return `${GITHUB}${href}`;
}

export function Rodape({ c, idioma, pagina, atualizadoEm }: { c: Conteudo; idioma: Idioma; pagina: PaginaId | "instalacao"; atualizadoEm: string }) {
  const naHome = pagina === "home";
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.rodape.colunas.map((col) => (
            <div key={col.titulo} className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">{col.titulo}</p>
              <ul className="mt-4 space-y-2.5">
                {col.itens.map((i) => (
                  <li key={i.rotulo}>
                    <a href={resolver(i.href, idioma, naHome)} className="text-sm transition-colors duration-150 ease-out-fast hover:text-pulse">
                      {i.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <Simbolo className="h-6 w-6" />
            <p className="font-mono text-xs text-text-muted">{c.rodape.nota}</p>
          </div>
          <p className="font-mono text-xs text-text-muted">
            {c.rodape.atualizado} <time dateTime={atualizadoEm}>{formatarData(atualizadoEm, TEXTOS_CHANGELOG[idioma].locale, "numerico")}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
