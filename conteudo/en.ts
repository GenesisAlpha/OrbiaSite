import type { Conteudo } from "./tipos";

/**
 * English: the product is an AI sales OS in the cloud — CRM, conversations and
 * payments in one history. Not a translation of the Portuguese; same product,
 * told to someone evaluating a platform rather than a download.
 */
export const en: Conteudo = {
  meta: {
    titulo: "ORBIA — the AI sales operating system",
    descricao:
      "CRM, customer conversations and payments in one system. AI reads, decides and acts with everything recorded — in the cloud, no side spreadsheet, no deal lost on the way.",
  },
  nav: { comoFunciona: "How it works", prova: "Proof", instalar: "Cloud", preco: "Plan", ctaInstalar: "Start on Cloud", curso: "Course", guias: "Help center", guiasCurto: "Help", changelog: "What's new", idioma: "Language" },
  hero: {
    sobretitulo: "ORBIA · sales operating system",
    h1a: "One entire operation. ",
    h1b: "One steady rhythm.",
    sub: "CRM, customer conversations and payments, connected. AI works in your favour with every decision on the record — no side spreadsheet, no deal lost on the way.",
    ctaPrimario: "Start on Cloud",
    ctaSecundario: "See how it works",
    microcopy: "In the cloud · no installation · no per-seat fee",
  },
  viloes: {
    titulo: "You're not losing deals for lack of leads.",
    itens: [
      {
        titulo: "The CRM that became a pretty spreadsheet",
        texto:
          "A lead arrives, someone types it in, and nothing happens. By the time you notice, it's gone — and no one can say when, or why. The system kept the name and lost the story.",
        alt: "A dotted field with disconnected pieces and a point falling through a gap.",
      },
      {
        titulo: "The AI that replies and vanishes",
        texto:
          "Quick to answer, happy to say anything, then gone. If it promised a deadline that doesn't exist, your customer tells you. You can't audit what it said — let alone why.",
        alt: "An isolated point emitting waves over a fragment that ends abruptly.",
      },
    ],
    fecho: { antes: "Both share one root cause: ", forte: "the system isn't responsible for what happens next." },
  },
  virada: {
    sobretitulo: "The category",
    tituloA: "A sales operating system that is ",
    tituloDestaque: "alive",
    sub: "Alive has a definition. Five rules every part of ORBIA must satisfy to ship — from the first message to the payment.",
    regras: [
      { regra: "Nothing is an island", prova: "CRM, conversations and payments share one history. A chat never becomes a spreadsheet somewhere else." },
      { regra: "No lead dies undiagnosed", prova: "A stalled request shows up in the Radar, classified by risk — before it becomes a loss." },
      { regra: "Every AI action is auditable", prova: "Every suggestion, reply and decision is recorded. You know what was said, when and why." },
      { regra: "An invisible log is a dead log", prova: "Every meaningful change becomes an activity on the timeline, visible on screen to whoever needs to answer." },
      { regra: "Follow-up is the anti-death mechanism", prova: "An open request with no defined next step is treated as a leak in the system." },
    ],
    fecho: {
      antes: "This isn't a campaign promise — it's the bar a change has to clear to ship. It lives in ",
      link: "docs/doctrine/sistema-vivo.md",
      depois: ", and the checklist is answered before every release.",
    },
  },
  jornada: {
    sobretitulo: "The life of a lead",
    titulo: "What happens between the message and the payment.",
    passos: [
      { titulo: "09:41 — a message arrives", texto: "Before any reply, ORBIA already knows who this is: history, orders, what was agreed last time and what is still open." },
      { titulo: "The agent reads before it speaks", texto: "It searches your company's knowledge base — lead times, policy, catalogue. It doesn't invent what doesn't exist." },
      { titulo: "The decision is recorded", texto: "What was suggested, what was approved and what was blocked. Every step becomes a record, including what the AI chose not to send." },
      { titulo: "The lead moves on its own", texto: "Once qualified, it changes stage. The tag lands, the owner is set — and every move carries a recorded reason." },
      { titulo: "When it's the human's turn, they get context", texto: "Not the raw thread: a summary of what happened, what was agreed, which objections came up and what the next step is." },
      { titulo: "Payment joins the same story", texto: "Deal closed? The invoice is born from the same record. No typing it twice, no spreadsheet check, no lost agreement." },
      { titulo: "And if nobody replies, it doesn't die", texto: "A follow-up is scheduled. If it goes cold, the lead appears in the Radar classified by risk — before it turns into a loss." },
    ],
  },
  instalar: {
    sobretitulo: "Cloud",
    titulo: "ORBIA runs for you. You run the business.",
    sub: "No server, no script, no SSH. Your team signs in, shapes the pipeline in minutes and starts working in the cloud, with everything in one place.",
    apoio: [
      { titulo: "Ready from day one", texto: "Account created, environment configured, data protected. No containers, domain or certificate to manage." },
      { titulo: "Updates without drama", texto: "The product moves forward without you running a command. What changed shows up in What's new, in plain language." },
      { titulo: "Your data, your rules", texto: "Per-role permissions, an audit trail and export when you need it. You decide who sees what." },
    ],
    comentario1: "# 1. create the account",
    comentario2: "# 2. set up the workspace",
    depois: "After that: invite the team, adjust the pipeline stages and connect your conversation channels. All in the interface, first step to last.",
    atualizarTitulo: "It evolves on its own",
    atualizarTexto: "we fix and publish without asking anything of you. Changes that need your attention are explained before they arrive.",
  },
  curso: {
    sobretitulo: "Picture course",
    titulo: "Signed in? Now learn it, screen by screen.",
    sub: "Each lesson shows the real ORBIA screen, with arrows pointing where to click and what happens next. Read at your own pace or practise before your first customer.",
    itens: ["Every screen in the menu: from the inbox and pipelines to AI and metrics", "Simulator: click the right spot to move forward", "Search across every lesson, in your own words"],
    cta: "Open the course",
    nota: "Included. Screens come from a demo workspace, with made-up names and conversations.",
    alt: "ORBIA inbox screen showing the summary the AI leaves when it hands a customer to the team",
  },
  preco: {
    sobretitulo: "Plan",
    titulo: "One price. The whole operation.",
    sub: "No fee per agent, no gated module, no surprise on the invoice. The exact figure is confirmed commercially before general availability.",
    cartoes: [
      { t: "Full CRM", d: "Funnels, contacts, history and tasks. No hidden limits by plan." },
      { t: "AI and conversations", d: "Agents that read, suggest and reply with context — and record every decision." },
      { t: "Payments built in", d: "From closing the deal to collecting, in the same story. Several payment brands, one operation." },
    ],
    fecho: "The exact price will be confirmed with the commercial launch. What won't change: the bill doesn't grow just because the team did.",
  },
  banner: {
    sobretitulo: "Payments layer",
    titulo: "Several brands. One operation.",
    texto: "Collection is part of the system, not a bolted-on plugin. Choose the brand that makes sense for your customer; the history stays the same.",
    cta: "See ORBIA in action",
    microcopy: "payment brands presented according to the commercial agreement",
  },
  prova: {
    sobretitulo: "Proof",
    titulo: "Don't take our word for it.",
    sub: "Every claim on this page points at a file in the repository. If one doesn't hold, that's a bug — and worth an issue.",
    itens: [
      { afirmacao: "Tenant isolation is tested on every change. CI boots a clean database and verifies that one organization sees zero rows of another — with a control case proving those rows exist before the test.", caminho: "tests/invariants/rls-isolation.test.ts" },
      { afirmacao: "Every AI decision passes checks in fixed, versioned order. Each evaluation becomes a durable, exportable record — including the ones that blocked an action.", caminho: "lib/agent-engine/guardrails/before-send.ts" },
      { afirmacao: "Schema changes are applied to a fresh database and reapplied to an existing one, proving they don't break what was already running.", caminho: "scripts/test-db.sh" },
      { afirmacao: "Open code, no feature hidden behind a tier: what you see is what runs.", caminho: "README.md" },
    ],
    cta: "See the project on GitHub",
    ctaNota: "code, tests and decisions in the open",
  },
  radar: {
    sobretitulo: "Anti-death",
    titulo: "How many leads are going cold right now?",
    texto: "The Radar answers. Every open request is classified by time without interaction and by what's still pending. Not last month's report — the state right now.",
    fecho: "A number on screen that doesn't change a decision is noise. This one does.",
    faixas: ["critical", "at risk", "in flight"],
  },
  nichos: {
    sobretitulo: "Multi-vertical",
    titulo: "The same system serves a clinic and a sneaker store.",
    texto: "Pipeline vocabulary is configurable. Not an edition per segment — the same core, configured for each business.",
    abas: [
      { nicho: "E-commerce", lead: "Customer", ganho: "Paid" },
      { nicho: "Clinic", lead: "Patient", ganho: "Booked" },
      { nicho: "Real estate", lead: "Prospect", ganho: "Closed" },
      { nicho: "Services", lead: "Enquiry", ganho: "Signed" },
    ],
  },
  revendedor: {
    sobretitulo: "For agencies",
    titulo: "One operation for each of your clients.",
    texto: "Every workspace has its own identity and rules, without forks or edited code. ORBIA is built for anyone running several businesses at once.",
    honestidade: "What it still does NOT do: colours and fonts require changing the design system, and branding is per workspace, not per user. Better you know now than find out in front of your client.",
    cta: "Talk to the team",
  },
  faq: {
    titulo: "Questions you're about to ask",
    perguntas: [
      { p: "How much does ORBIA cost?", r: "The commercial price is being set before general availability. There will be no per-agent charge and no gated module: the whole operation is in one plan." },
      { p: "Do I need to install anything?", r: "No. ORBIA is cloud: you create an account, invite the team and start. No server, domain or certificate to configure." },
      { p: "Does AI replace my team?", r: "No. It reads, suggests, replies where it can and records everything. When a case needs a person, it hands over context — not a raw thread." },
      { p: "What kind of business is it for?", r: "Any business that sells through conversation. Pipeline vocabulary is configurable, so the same system serves e-commerce, clinics, real estate and service providers." },
      { p: "Can I use it for several clients?", r: "Yes. Each workspace has its own identity, permissions and rules, built for agencies and teams running more than one business." },
      { p: "What happens when the AI gets it wrong?", r: "Every action passes checks before it happens, and all of them are recorded — including the ones that were blocked. When it shouldn't proceed alone, ORBIA hands off to a person with a summary." },
      { p: "How do payments work?", r: "The payment is born from the same record as the deal, with no retyping. Several payment brands can be presented per the commercial agreement; the choice doesn't change the customer's history." },
      { p: "What if I want to leave?", r: "Your data can be exported. You aren't stuck with a side spreadsheet or a history that only exists inside the tool." },
    ],
  },
  rodape: {
    colunas: [
      { titulo: "Product", itens: [{ rotulo: "How it works", href: "#como-funciona" }, { rotulo: "Plan", href: "#preco" }, { rotulo: "Cloud", href: "#instalar" }] },
      { titulo: "Learn", itens: [{ rotulo: "Help center", href: "@guias" }, { rotulo: "Picture course", href: "@curso" }, { rotulo: "What's new", href: "@changelog" }, { rotulo: "For agencies", href: "#revendedor" }] },
      { titulo: "Community", itens: [{ rotulo: "Discussions", href: "/discussions" }, { rotulo: "Issues", href: "/issues" }, { rotulo: "Contributing", href: "/blob/main/CONTRIBUTING.md" }] },
      { titulo: "Project", itens: [{ rotulo: "Open code", href: "/blob/main/LICENSE" }, { rotulo: "Architecture", href: "/blob/main/ARCHITECTURE.md" }, { rotulo: "Security", href: "/blob/main/SECURITY.md" }] },
    ],
    nota: "ORBIA · sales operating system",
    atualizado: "Page updated on",
  },
};
