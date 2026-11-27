import { CONTEUDO } from "@/conteudo";
import { ORBIA_CRM, ROTAS_CURSO } from "@/conteudo/rotas";

import { Cabecalho } from "../Cabecalho";
import { Rodape } from "../Rodape";
import { Simbolo } from "../Marca";

const PASSOS = [
  {
    n: "01",
    titulo: "Confirme seu e-mail",
    texto: "Informe o nome da empresa e o seu e-mail. Depois de criar a conta, abra a mensagem de confirmação para continuar.",
  },
  {
    n: "02",
    titulo: "Convide a equipe",
    texto: "Cada pessoa entra com seu próprio perfil. Você decide quem vê contatos, conversas, relatórios e cobranças.",
  },
  {
    n: "03",
    titulo: "Ajuste o funil",
    texto: "Renomeie as etapas com o vocabulário do seu negócio. O mesmo sistema serve uma clínica ou uma loja — a configuração é sua.",
  },
  {
    n: "04",
    titulo: "Conecte os canais",
    texto: "Escolha por onde sua equipe atende. As conversas chegam à mesma caixa de entrada, com histórico e contexto.",
  },
  {
    n: "05",
    titulo: "Configure a IA",
    texto: "Diga como ela deve responder, o que pode fazer e quando deve passar para uma pessoa. Cada decisão fica registrada.",
  },
  {
    n: "06",
    titulo: "Feche e cobre",
    texto: "A cobrança nasce do mesmo registro da venda. Escolha a marca de pagamento que faz sentido para o seu cliente.",
  },
] as const;

export function PaginaInstalacao() {
  const c = CONTEUDO["pt-BR"];
  return (
    <>
      <a href="#conteudo-cloud" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-pulse focus:px-4 focus:py-3 focus:text-bg">Pular para o conteúdo</a>
      <Cabecalho c={c} idioma="pt-BR" pagina="instalacao" />
      <main id="conteudo-cloud">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="pb-14 pt-10 sm:pb-20">
            <nav aria-label="Você está aqui" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-muted"><a href="/" className="hover:text-text">Início</a><span aria-hidden>/</span><span aria-current="page">Cloud</span></nav>
            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-pulse"><span aria-hidden className="orbia-ponto" />Sem instalação</p>
                <h1 className="mt-6 max-w-[18ch] text-balance text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.03]">
                  A ORBIA corre por sua conta.
                  <br />
                  <span className="text-text-muted">Você cuida do negócio.</span>
                </h1>
                <p className="mt-7 max-w-[52ch] text-pretty text-lg leading-relaxed text-text-muted">
                  Nada de servidor, script ou SSH. Sua equipe entra, configura o funil em minutos e começa a trabalhar na nuvem, com CRM, atendimento e cobranças no mesmo lugar.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={ORBIA_CRM.signup} className="inline-flex min-h-12 items-center rounded-[2px] bg-pulse px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg">Criar minha conta <span aria-hidden className="ml-4">→</span></a>
                  <a href={ROTAS_CURSO["pt-BR"]} className="inline-flex min-h-12 items-center rounded-[2px] border border-border px-5 font-mono text-xs uppercase tracking-[0.12em] hover:border-text-muted">Ver o curso →</a>
                </div>
                <p className="mt-6 font-mono text-xs text-text-muted">Na nuvem · sem ficha por atendente · valor comercial a confirmar</p>
              </div>
              <div className="orbia-pontilhado relative aspect-square overflow-hidden rounded-[2px] border border-border bg-surface">
                <div className="absolute inset-[18%] rounded-full border border-border" />
                <div className="absolute inset-[32%] rounded-full border border-border/70" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-orbia-pulso rounded-full bg-pulse shadow-[0_0_28px_6px_rgba(0,212,255,0.3)]" />
                <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">ORBIA / Cloud</div>
              </div>
            </div>
          </div>

          <section id="comecar" aria-labelledby="titulo-comecar" className="scroll-mt-24 border-y border-border py-14 sm:py-20">
            <div className="max-w-[52ch]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">Do primeiro acesso à primeira cobrança</p>
              <h2 id="titulo-comecar" className="mt-4 text-balance text-[2.2rem] leading-[1.08] sm:text-[3rem]">Seis passos. Nenhum terminal.</h2>
              <p className="mt-5 leading-relaxed text-text-muted">Você faz tudo pela interface, no seu ritmo. O que pede atenção aparece na tela — não em um arquivo de configuração.</p>
            </div>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {PASSOS.map((p) => (
                <li key={p.n} className="bg-bg p-7">
                  <span className="font-mono text-xs text-pulse">{p.n}</span>
                  <h3 className="mt-5 text-2xl tracking-tight">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{p.texto}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <h2 className="max-w-[20ch] text-balance text-[2rem] leading-[1.1] sm:text-[2.6rem]">O que muda quando tudo está no mesmo lugar.</h2>
                <p className="mt-5 max-w-[48ch] leading-relaxed text-text-muted">Não existe venda em uma ferramenta, conversa em outra e cobrança em uma terceira. O histórico é um só — e a IA trabalha com ele.</p>
              </div>
              <ul className="space-y-5">
                {[
                  ["Sem manutenção", "Atualizações chegam sem que você faça nada. O que mudou vem explicado em texto simples."],
                  ["Permissões claras", "Cada pessoa vê o que precisa. Você decide o acesso por perfil, não por planilha compartilhada."],
                  ["Seus dados com você", "Histórico auditável e exportação quando precisar. Você não fica preso à ferramenta."],
                  ["Pagamentos como camada", "Várias marcas de pagamento, uma operação. A escolha não muda a história do cliente."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4 border-t border-border pt-5">
                    <span aria-hidden className="orbia-ponto mt-2 shrink-0" />
                    <div><p className="text-lg tracking-tight">{t}</p><p className="mt-1.5 leading-relaxed text-text-muted">{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16 overflow-hidden rounded-[2px] border border-border bg-surface p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-6">
              <Simbolo className="h-12 w-12 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-pulse">Pronto para começar</p>
                <h2 className="mt-2 text-balance text-[1.8rem] leading-tight sm:text-[2.2rem]">Sua operação, no mesmo ritmo.</h2>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-text-muted">Crie o espaço da sua empresa e descubra por que a ORBIA não é mais uma planilha com nome bonito.</p>
              </div>
              <a href={ORBIA_CRM.signup} className="inline-flex min-h-12 items-center rounded-[2px] bg-pulse px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bg">Criar conta →</a>
            </div>
          </section>
        </div>
      </main>
      <Rodape c={c} idioma="pt-BR" pagina="instalacao" atualizadoEm="2026-11-25" />
    </>
  );
}
