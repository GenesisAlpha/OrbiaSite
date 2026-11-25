"use client";

import type { Conteudo } from "@/conteudo";
import { usarProgresso } from "./mesa/usarProgresso";
import { Mesa } from "./mesa/MesaEstatica";

/**
 * A vida de um lead, agora contada como editorial: o campo pointilhado pulsa
 * conforme o scroll e o trilho numérico diz em que ponto da história estamos.
 * Uma fonte de verdade para o progresso — sem WebGL, sem sete imagens trocando.
 */
export function Jornada({ c }: { c: Conteudo }) {
  const PASSOS = c.jornada.passos.map((p, i) => ({
    n: String(i + 1).padStart(2, "0"),
    titulo: p.titulo,
    texto: p.texto,
  }));
  const { alvo, progresso, passo: ativo } = usarProgresso(PASSOS.length);

  return (
    <section id="jornada" className="border-t border-border bg-surface-elevated/40">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 sm:pt-28">
        <div className="max-w-[46ch]">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-pulse">
            <span aria-hidden className="orbia-ponto" />
            {c.jornada.sobretitulo}
          </p>
          <h2 className="mt-5 text-pretty text-[2.4rem] leading-[1.06] sm:text-[3.2rem]">
            {c.jornada.titulo}
          </h2>
        </div>
      </div>

      <div ref={alvo} className="relative hidden lg:block lg:h-[320vh]">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,42%)_minmax(0,58%)] items-center gap-12 px-6">
            <ol className="min-w-0">
              {PASSOS.map((p, i) => (
                <li
                  key={p.n}
                  className={[
                    "grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5 py-2.5 transition-opacity duration-300 ease-base",
                    i === ativo ? "opacity-100" : "opacity-30",
                  ].join(" ")}
                >
                  <span className={["pt-1 font-mono text-sm transition-colors duration-200 ease-base", i === ativo ? "text-pulse" : "text-text-muted"].join(" ")}>
                    {p.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl tracking-tight">{p.titulo}</h3>
                    {i === ativo && <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-text-muted">{p.texto}</p>}
                  </div>
                </li>
              ))}
            </ol>
            <div className="min-w-0"><Mesa progresso={progresso} /></div>
          </div>
        </div>
      </div>

      <ol className="mx-auto max-w-[1200px] px-6 pb-20 lg:hidden">
        {PASSOS.map((p, i) => (
          <li key={p.n} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 py-8">
            <span className="pt-1 font-mono text-sm text-pulse">{p.n}</span>
            <div className="min-w-0">
              <h3 className="text-2xl tracking-tight">{p.titulo}</h3>
              <p className="mt-3 leading-relaxed text-text-muted">{p.texto}</p>
              <div className="mt-5"><Mesa progresso={(i + 1) / PASSOS.length} /></div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
