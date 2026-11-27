import Image from "next/image";

import type { Conteudo, Idioma } from "@/conteudo";
import { IDIOMAS } from "@/conteudo";

import { Jornada } from "./Jornada";
import { CURSO, ROTAS_CURSO, INSTALACAO } from "@/conteudo/rotas";

import { Cabecalho } from "./Cabecalho";
import { Rodape } from "./Rodape";

// Preenchida pela configuração do Next somente após validar o conjunto inteiro.
const CAPA_CURSO_ES = JSON.parse(process.env.CURSO_CAPTURAS_ES ?? "null") as {
  foto: string; largura: number; altura: number;
} | null;

export function Pagina({ c, idioma }: { c: Conteudo; idioma: Idioma }) {
  const base = IDIOMAS.find((i) => i.codigo === idioma)!.caminho;
  const href = (frag: string) => `${base === "/" ? "" : base}${frag}`;
  const capturasEspanhol = idioma === "es" ? CAPA_CURSO_ES : null;
  const subCurso = capturasEspanhol ? c.curso.subComCapturasLocais : c.curso.sub;
  const fotoCurso = capturasEspanhol
    ? capturasEspanhol.foto
    : `${CURSO}/capturas/inbox--assumir-e-responder--p1.jpg`;

  return (
    <>
      <Cabecalho c={c} idioma={idioma} pagina="home" />

      <main>
        {/* HERO */}
        <section className="relative overflow-x-clip orbia-pontilhado">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_42%,rgba(122,56,255,0.21),transparent_58%),radial-gradient(ellipse_at_76%_88%,rgba(0,212,255,0.09),transparent_48%)]" aria-hidden />
          <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-14 sm:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-4">
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
                  <span aria-hidden className="orbia-ponto" />
                  {c.hero.sobretitulo}
                </p>
                <h1 className="mt-6 text-balance text-[clamp(2.65rem,5vw,4.25rem)] leading-[1.03]">
                  {c.hero.h1a}
                  <br />
                  <span className="bg-gradient-to-r from-[#bda2ff] to-pulse bg-clip-text text-transparent">{c.hero.h1b}</span>
                </h1>
                <p className="mt-7 max-w-[34ch] text-lg leading-relaxed text-text-muted">{c.hero.sub}</p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href={INSTALACAO} className="rounded-[2px] bg-pulse px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg transition-colors duration-120 ease-out-fast hover:bg-text">
                    {c.hero.ctaPrimario}
                  </a>
                  <a href="#como-funciona" className="rounded-[2px] border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-120 ease-out-fast hover:border-text-muted">
                    {c.hero.ctaSecundario}
                  </a>
                </div>
                <p className="mt-5 font-mono text-xs text-text-muted">{c.hero.microcopy}</p>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
                <div className="absolute inset-[19%] rounded-full bg-[radial-gradient(circle_at_36%_31%,#bfb0ff_0%,#7a38ff_24%,#2e1376_51%,#0d1028_77%)] shadow-[0_0_80px_rgba(122,56,255,0.35)]" />
                <div className="absolute inset-[10%] rotate-[-24deg] scale-y-[0.43] rounded-full border border-pulse/80 shadow-[0_0_24px_rgba(0,212,255,0.35)]" />
                <div className="absolute inset-[5%] rotate-[29deg] scale-y-[0.62] rounded-full border border-[#9e69ff]/60" />
                <div className="absolute inset-[2%] rotate-[-41deg] scale-y-[0.78] rounded-full border border-dashed border-white/15" />
                <div className="absolute left-[78%] top-[31%] size-2.5 rounded-full bg-pulse shadow-[0_0_20px_4px_rgba(0,212,255,0.45)]" />
                <div className="absolute left-[23%] top-[67%] size-2 rounded-full bg-[#bda2ff] shadow-[0_0_18px_3px_rgba(122,56,255,0.6)]" />
              </div>
            </div>
          </div>
        </section>

        {/* VILÕES */}
        <section id="como-funciona" className="border-t border-border bg-surface-elevated/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <h2 className="max-w-[18ch] text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">
              {c.viloes.titulo}
            </h2>
            <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
              {c.viloes.itens.map((v, i) => (
                <article key={v.titulo} className="group min-w-0">
                  <div aria-hidden className="relative flex aspect-[8/5] items-center justify-center overflow-hidden rounded-[2px] border border-border bg-bg orbia-pontilhado">
                    <span className={`orbia-ponto ${i === 1 ? "opacity-40" : ""}`} />
                    <span className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border" />
                  </div>
                  <h3 className="mt-7 text-2xl tracking-tight">{v.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{v.texto}</p>
                </article>
              ))}
            </div>
            <p className="mt-16 max-w-[46ch] border-l-2 border-pulse pl-5 text-lg leading-relaxed">
              {c.viloes.fecho.antes}
              <strong className="font-bold">{c.viloes.fecho.forte}</strong>
            </p>
          </div>
        </section>

        {/* A VIRADA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="max-w-[52ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.virada.sobretitulo}</p>
              <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">
                {c.virada.tituloA}
                <span className="text-text-muted">{c.virada.tituloDestaque}</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">{c.virada.sub}</p>
            </div>
            <ol className="mt-14 border-t border-border">
              {c.virada.regras.map((r, i) => (
                <li key={r.regra} className="grid gap-x-8 gap-y-2 border-b border-border py-7 md:grid-cols-[auto_minmax(0,20rem)_minmax(0,1fr)] md:items-baseline">
                  <span className="font-mono text-sm text-pulse">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg tracking-tight">{r.regra}</h3>
                  <p className="leading-relaxed text-text-muted">{r.prova}</p>
                </li>
              ))}
            </ol>
            <p className="mt-12 max-w-[62ch] leading-relaxed text-text-muted">
              {c.virada.fecho.antes}
              <a href={`https://github.com/GenesisAlpha/OrbiaSite/blob/main/${c.virada.fecho.link}`} className="font-mono text-sm text-text underline decoration-pulse underline-offset-4 transition-colors duration-120 ease-out-fast hover:text-pulse">
                {c.virada.fecho.link}
              </a>
              {c.virada.fecho.depois}
            </p>
          </div>
        </section>

        <Jornada c={c} />

        {/* CLOUD */}
        <section id="instalar" className="border-t border-border orbia-pontilhado">
          <div className="relative">
            <div aria-hidden className="absolute inset-0 bg-bg/88" />
            <div className="relative mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-16">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-pulse"><span aria-hidden className="orbia-ponto" />{c.instalar.sobretitulo}</p>
                  <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.instalar.titulo}</h2>
                  <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-text-muted">{c.instalar.sub}</p>
                  <a href={INSTALACAO} className="mt-6 inline-flex min-h-11 items-center rounded-[2px] bg-pulse px-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg">
                    {c.nav.ctaInstalar}
                  </a>
                  <dl className="mt-10 space-y-6">
                    {c.instalar.apoio.map((a) => (
                      <div key={a.titulo}>
                        <dt className="font-bold tracking-tight">{a.titulo}</dt>
                        <dd className="mt-1.5 max-w-[46ch] leading-relaxed text-text-muted">{a.texto}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="min-w-0">
                  <div className="overflow-hidden rounded-[2px] border border-border bg-surface">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                      <span className="orbia-ponto" aria-hidden />
                      <span className="ml-1.5 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">orbia · cloud</span>
                    </div>
                    <div className="orbia-pontilhado flex aspect-[4/3] items-center justify-center bg-bg">
                      <div className="relative h-[52%] w-[52%]">
                        <div className="absolute inset-0 rounded-full border border-border" />
                        <div className="absolute inset-[22%] rounded-full border border-dashed border-border" />
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-orbia-pulso rounded-full bg-pulse" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-text-muted">{c.instalar.depois}</p>
                  <div className="mt-8 rounded-[2px] border border-border bg-surface-elevated p-5">
                    <p className="font-bold tracking-tight">{c.instalar.atualizarTitulo}</p>
                    <p className="mt-2 max-w-[52ch] leading-relaxed text-text-muted">{c.instalar.atualizarTexto}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURSO EM IMAGENS */}
        <section id="curso" className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-16">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.curso.sobretitulo}</p>
                <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.curso.titulo}</h2>
                <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-text-muted">{subCurso}</p>
                <ul className="mt-8 space-y-3">
                  {c.curso.itens.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="orbia-ponto mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={ROTAS_CURSO[idioma]} className="mt-10 inline-block rounded-[2px] bg-pulse px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg">
                  {c.curso.cta}
                </a>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-text-muted">{c.curso.nota}</p>
              </div>
              <a href={ROTAS_CURSO[idioma]} className="block min-w-0 overflow-hidden rounded-[2px] border border-border bg-surface transition-colors duration-150 ease-out-fast hover:border-text-muted">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <span className="orbia-ponto" aria-hidden />
                  <span className="ml-1.5 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">orbia.live{ROTAS_CURSO[idioma]}</span>
                </div>
                <Image src={fotoCurso} alt={c.curso.alt} width={capturasEspanhol?.largura ?? 1440} height={capturasEspanhol?.altura ?? 900} className="h-auto w-full" />
              </a>
            </div>
          </div>
        </section>

        {/* PLANO */}
        <section id="preco" className="border-t border-border bg-surface-elevated/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="max-w-[54ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.preco.sobretitulo}</p>
              <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.preco.titulo}</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">{c.preco.sub}</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-3">
              {c.preco.cartoes.map((x) => (
                <div key={x.t} className="bg-bg p-7">
                  <p className="font-bold tracking-tight">{x.t}</p>
                  <p className="mt-2 leading-relaxed text-text-muted">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-[58ch] border-l-2 border-pulse pl-5 leading-relaxed">{c.preco.fecho}</p>
          </div>
        </section>

        {/* PROVA */}
        <section id="prova" className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="max-w-[54ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.prova.sobretitulo}</p>
              <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.prova.titulo}</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">{c.prova.sub}</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {c.prova.itens.map((x) => (
                <article key={x.caminho} className="rounded-[2px] border border-border bg-surface p-6">
                  <p className="leading-relaxed">{x.afirmacao}</p>
                  <a href={`https://github.com/GenesisAlpha/OrbiaSite/blob/main/${x.caminho}`} className="mt-4 inline-block break-all font-mono text-xs text-text-muted underline decoration-border underline-offset-4 transition-colors duration-120 ease-out-fast hover:text-pulse">
                    {x.caminho}
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://github.com/GenesisAlpha/OrbiaSite" className="rounded-[2px] border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-120 ease-out-fast hover:border-text-muted">
                {c.prova.cta} →
              </a>
              <span className="text-sm text-text-muted">{c.prova.ctaNota}</span>
            </div>
          </div>
        </section>

        {/* RADAR */}
        <section className="border-t border-border bg-surface-elevated/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,54%)_minmax(0,46%)] lg:items-center lg:gap-16">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.radar.sobretitulo}</p>
                <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.radar.titulo}</h2>
                <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-muted">{c.radar.texto}</p>
                <p className="mt-6 max-w-[46ch] border-l-2 border-pulse pl-5 leading-relaxed">{c.radar.fecho}</p>
              </div>
              <ul className="min-w-0 space-y-3">
                {c.radar.faixas.map((f, i) => (
                  <li key={f} className="flex items-center gap-4 rounded-[2px] border border-border bg-bg px-5 py-4">
                    <span aria-hidden className={`orbia-ponto shrink-0 ${i === 1 ? "opacity-60" : i === 2 ? "opacity-30" : ""}`} />
                    <span className="font-mono text-sm uppercase tracking-[0.1em]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MULTI-NICHO */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="max-w-[52ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.nichos.sobretitulo}</p>
              <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.nichos.titulo}</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">{c.nichos.texto}</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {c.nichos.abas.map((a) => (
                <div key={a.nicho} className="bg-bg p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">{a.nicho}</p>
                  <p className="mt-4 text-lg font-bold tracking-tight">{a.lead}</p>
                  <p className="mt-1 font-mono text-xs text-text-muted">lead →</p>
                  <p className="mt-4 text-lg font-bold tracking-tight text-pulse">{a.ganho}</p>
                  <p className="mt-1 font-mono text-xs text-text-muted">won →</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGÊNCIAS */}
        <section id="revendedor" className="border-t border-border bg-surface-elevated/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <div className="max-w-[58ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.revendedor.sobretitulo}</p>
              <h2 className="mt-5 text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.revendedor.titulo}</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">{c.revendedor.texto}</p>
              <p className="mt-6 rounded-[2px] border border-border bg-bg p-5 leading-relaxed text-text-muted">{c.revendedor.honestidade}</p>
              <a href={INSTALACAO} className="mt-8 inline-block rounded-[2px] border border-border bg-bg px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-120 ease-out-fast hover:border-text-muted">
                {c.revendedor.cta} →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
            <h2 className="max-w-[20ch] text-pretty text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">{c.faq.titulo}</h2>
            <div className="mt-12 grid gap-x-14 gap-y-9 md:grid-cols-2">
              {c.faq.perguntas.map((q) => (
                <div key={q.p} className="min-w-0">
                  <h3 className="text-lg tracking-tight">{q.p}</h3>
                  <p className="mt-2.5 leading-relaxed text-text-muted">{q.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGAMENTOS */}
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2px] border border-border bg-surface">
            <div aria-hidden className="h-1.5 w-full bg-pulse" />
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">{c.banner.sobretitulo}</p>
                <h2 className="mt-4 text-pretty text-[1.9rem] leading-[1.15] sm:text-[2.4rem]">{c.banner.titulo}</h2>
                <p className="mt-4 max-w-[46ch] leading-relaxed text-text-muted">{c.banner.texto}</p>
              </div>
              <div className="lg:text-right">
                <a href={INSTALACAO} className="inline-flex items-center gap-2.5 rounded-[2px] bg-pulse px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg transition-colors duration-150 ease-out-fast hover:bg-text">
                  {c.banner.cta}
                  <span aria-hidden>→</span>
                </a>
                <p className="mt-3 text-xs text-text-muted">{c.banner.microcopy}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape c={c} idioma={idioma} pagina="home" atualizadoEm="2026-11-25" />
    </>
  );
}
