import type { Conteudo } from "./tipos";

export const ptBR: Conteudo = {
  meta: {
    titulo: "ORBIA — o sistema operacional de vendas com IA",
    descricao:
      "CRM, atendimento e cobranças num só sistema. A IA lê, decide e age com tudo registrado — na nuvem, sem planilha paralela e sem perder venda no caminho.",
  },
  nav: { comoFunciona: "Como funciona", prova: "Prova", instalar: "Cloud", preco: "Plano", ctaInstalar: "Começar na Cloud", curso: "Curso", guias: "Central de ajuda", guiasCurto: "Ajuda", changelog: "Novidades", idioma: "Idioma" },
  hero: {
    sobretitulo: "ORBIA · sistema operacional de vendas",
    h1a: "Sua empresa em órbita. ",
    h1b: "Com IA ao seu lado.",
    sub: "CRM, atendimento e cobranças conectados. A IA trabalha a seu favor, com cada decisão registrada — sem planilha paralela, sem venda perdida no caminho.",
    ctaPrimario: "Começar na Cloud",
    ctaSecundario: "Ver como funciona",
    microcopy: "Na nuvem · sem instalação · sem ficha por usuário",
  },
  viloes: {
    titulo: "Você não perde venda por falta de lead.",
    itens: [
      {
        titulo: "O CRM que virou planilha bonita",
        texto:
          "O lead entra, alguém cadastra, e nada acontece. Quando você percebe, sumiu — e ninguém sabe dizer em que momento nem por quê. O sistema guardou o nome e perdeu a história.",
        alt: "Um campo pointilhado com peças desconectadas e um ponto caindo por um vão.",
      },
      {
        titulo: "A IA que responde e some",
        texto:
          "Responde rápido, diz qualquer coisa e desaparece. Se prometeu um prazo que não existe, você descobre pelo cliente. Não dá para auditar o que disse — muito menos por que disse.",
        alt: "Um ponto isolado emitindo ondas sobre um fragmento que termina abruptamente.",
      },
    ],
    fecho: { antes: "Os dois têm a mesma raiz: ", forte: "o sistema não é responsável pelo que acontece depois." },
  },
  virada: {
    sobretitulo: "A categoria",
    tituloA: "Um sistema operacional de vendas ",
    tituloDestaque: "vivo",
    sub: "Vivo tem definição. São cinco regras que toda parte da ORBIA precisa cumprir para entrar — do primeiro contato à cobrança.",
    regras: [
      { regra: "Nada é ilha", prova: "CRM, atendimento e cobranças compartilham o mesmo histórico. Uma conversa não vira planilha em outro lugar." },
      { regra: "Nenhum lead morre sem diagnóstico", prova: "Demanda parada aparece no Radar, classificada por risco — antes de virar prejuízo." },
      { regra: "Toda ação da IA é auditável", prova: "Cada sugestão, resposta e decisão fica registrada. Você sabe o que foi dito, quando e por quê." },
      { regra: "Log invisível é log morto", prova: "Toda mudança relevante vira atividade na linha do tempo, visível na tela, para quem precisar responder." },
      { regra: "Follow-up é o anti-morte", prova: "Demanda aberta sem próximo passo definido é tratada como vazamento do sistema." },
    ],
    fecho: {
      antes: "Isso não é promessa de campanha: é o critério que uma mudança precisa passar para entrar no produto. Está em ",
      link: "docs/doctrine/sistema-vivo.md",
      depois: ", e o checklist é respondido antes de cada publicação.",
    },
  },
  jornada: {
    sobretitulo: "A vida de um lead",
    titulo: "O que acontece entre a mensagem e o pagamento.",
    passos: [
      { titulo: "09:41 — chega uma mensagem", texto: "Antes de qualquer resposta, a ORBIA já sabe quem é: histórico, pedidos, o que ficou combinado da última vez e o que ainda está em aberto." },
      { titulo: "A IA lê antes de falar", texto: "Ela busca na base de conhecimento da sua empresa — prazos, política, catálogo. Não inventa o que não existe." },
      { titulo: "A decisão fica registrada", texto: "O que foi sugerido, o que foi aprovado e o que foi barrado. Cada passo vira registro, inclusive o que a IA decidiu não enviar." },
      { titulo: "O lead se move sozinho", texto: "Qualificado, ele muda de etapa. A etiqueta entra, o responsável é definido — e cada movimento tem motivo registrado." },
      { titulo: "Quando é a vez do humano, ele recebe contexto", texto: "Não a conversa crua: um resumo do que aconteceu, o que foi combinado, quais objeções apareceram e qual é o próximo passo." },
      { titulo: "A cobrança entra na mesma história", texto: "Fechou? O boleto ou a cobrança nasce do mesmo registro. Sem digitar duas vezes, sem conferir planilha, sem perder o que foi acordado." },
      { titulo: "E se ninguém responder, não morre", texto: "Follow-up agendado. Se esfriar, o lead aparece no Radar classificado por risco — antes de virar prejuízo." },
    ],
  },
  instalar: {
    sobretitulo: "Cloud",
    titulo: "A ORBIA corre por sua conta. Você cuida do negócio.",
    sub: "Sem servidor, sem script, sem SSH. Sua equipe entra, configura o funil em minutos e começa a atender na nuvem, com tudo no mesmo lugar.",
    apoio: [
      { titulo: "Pronto para usar", texto: "Conta criada, ambiente configurado e dados protegidos. Nada de contêiner, domínio ou certificado para gerenciar." },
      { titulo: "Atualizações sem drama", texto: "O produto evolui sem que você precise rodar comando. O que mudou aparece nas novidades, em texto simples." },
      { titulo: "Seus dados, suas regras", texto: "Permissões por perfil, histórico auditável e exportação quando precisar. Você decide quem vê o quê." },
    ],
    comentario1: "# 1. criar a conta",
    comentario2: "# 2. configurar o espaço",
    depois: "Depois disso: convidar a equipe, ajustar as etapas do funil e conectar os canais de atendimento. Tudo pela interface, do primeiro ao último passo.",
    atualizarTitulo: "Evolui sem intervenção",
    atualizarTexto: "corrigimos e publicamos sem exigir nada de você. As mudanças que pedem atenção vêm explicadas antes de chegarem.",
  },
  curso: {
    sobretitulo: "Curso em imagens",
    titulo: "Entrou? Agora aprenda, tela por tela.",
    sub: "Cada lição mostra a tela real da ORBIA, com setas apontando onde clicar e o que acontece depois. Leia no seu ritmo ou treine antes de atender o primeiro cliente.",
    itens: ["Todas as telas do menu: da caixa de entrada e dos funis à IA e às métricas", "Simulador: você clica no lugar certo para avançar", "Busca em todo o conteúdo, com a dúvida do jeito que você falaria"],
    cta: "Abrir o curso",
    nota: "Incluído. As telas são de um ambiente de demonstração, com nomes e conversas fictícios.",
    alt: "Tela da caixa de entrada da ORBIA com o resumo que a IA deixa ao passar um cliente para a equipe",
  },
  preco: {
    sobretitulo: "Plano",
    titulo: "Um preço. A operação inteira.",
    sub: "Sem ficha por atendente, sem módulo trancado, sem surpresa na fatura. O valor fica sob confirmação comercial antes da abertura geral.",
    cartoes: [
      { t: "CRM completo", d: "Funis, contatos, histórico e tarefas. Sem limites escondidos por plano." },
      { t: "IA e atendimento", d: "Agentes que leem, sugerem e respondem com contexto — e registram cada decisão." },
      { t: "Cobranças integradas", d: "Do fechamento à cobrança, na mesma história. Várias marcas de pagamento, uma só operação." },
    ],
    fecho: "O preço exato será confirmado com a abertura comercial. O que não muda: a conta não cresce de valor só porque o time cresceu.",
  },
  banner: {
    sobretitulo: "Camada de pagamentos",
    titulo: "Várias marcas. Uma só operação.",
    texto: "A cobrança é parte do sistema, não um plugin pendurado. Escolha a marca que faz sentido para o seu cliente; o histórico continua o mesmo.",
    cta: "Ver a ORBIA em ação",
    microcopy: "marcas de pagamento apresentadas conforme o contrato comercial",
  },
  prova: {
    sobretitulo: "Prova",
    titulo: "Não acredite. Confira.",
    sub: "Cada afirmação desta página aponta para um arquivo do repositório. Se alguma não se sustentar, é bug — e vale uma issue.",
    itens: [
      { afirmacao: "O isolamento entre clientes é testado a cada alteração. O CI sobe um banco limpo e verifica que uma organização não vê linha nenhuma da outra — com um caso de controle que prova que as linhas existem antes do teste.", caminho: "tests/invariants/rls-isolation.test.ts" },
      { afirmacao: "Cada decisão da IA passa por verificações em ordem fixa e versionada. Cada avaliação vira registro durável e exportável — inclusive as que barraram uma ação.", caminho: "lib/agent-engine/guardrails/before-send.ts" },
      { afirmacao: "As mudanças no esquema são aplicadas em banco novo e reaplicadas em banco existente, provando que não quebram o que já estava rodando.", caminho: "scripts/test-db.sh" },
      { afirmacao: "Código aberto, sem funcionalidade escondida por tier: o que você vê é o que roda.", caminho: "README.md" },
    ],
    cta: "Ver o projeto no GitHub",
    ctaNota: "código, testes e decisões em aberto",
  },
  radar: {
    sobretitulo: "Anti-morte",
    titulo: "Quantos leads estão esfriando agora?",
    texto: "O Radar responde. Toda demanda aberta é classificada pelo tempo sem interação e pelo que ficou pendente. Não é relatório do mês passado — é o estado agora.",
    fecho: "Um número na tela que não muda uma decisão é ruído. Esse muda.",
    faixas: ["crítico", "em risco", "em voo"],
  },
  nichos: {
    sobretitulo: "Multi-nicho",
    titulo: "O mesmo sistema atende quem vende consulta e quem vende tênis.",
    texto: "O vocabulário do funil é configurável. Não é uma versão por segmento — é o mesmo núcleo, configurado para cada negócio.",
    abas: [
      { nicho: "E-commerce", lead: "Cliente", ganho: "Pago" },
      { nicho: "Clínica", lead: "Paciente", ganho: "Agendado" },
      { nicho: "Imobiliária", lead: "Interessado", ganho: "Fechado" },
      { nicho: "Serviços", lead: "Prospecto", ganho: "Contratado" },
    ],
  },
  revendedor: {
    sobretitulo: "Para agências",
    titulo: "Uma operação para cada cliente seu.",
    texto: "Cada espaço tem sua identidade e suas regras, sem forks e sem código editado. A ORBIA é pensada para quem acompanha vários negócios ao mesmo tempo.",
    honestidade: "O que ainda NÃO dá: cores e fontes exigem alterar o design system, e a identidade é por espaço, não por usuário. Melhor você saber agora do que descobrir na frente do seu cliente.",
    cta: "Falar com a equipe",
  },
  faq: {
    titulo: "Perguntas que você vai fazer",
    perguntas: [
      { p: "Quanto custa a ORBIA?", r: "O valor comercial está sendo definido antes da abertura geral. Não haverá cobrança por atendente nem módulo trancado: a operação inteira entra no mesmo plano." },
      { p: "Preciso instalar alguma coisa?", r: "Não. A ORBIA é Cloud: você cria a conta, convida a equipe e começa a usar. Não há servidor, domínio ou certificado para configurar." },
      { p: "A IA substitui minha equipe?", r: "Não. Ela lê, sugere, responde o que pode e registra tudo. Quando o caso pede uma pessoa, passa o contexto para o humano — não uma conversa crua." },
      { p: "Serve para qual tipo de negócio?", r: "Qualquer negócio que venda por conversa. O vocabulário do funil é configurável, então o mesmo sistema atende e-commerce, clínica, imobiliária e prestadores de serviço." },
      { p: "Posso usar para vários clientes?", r: "Pode. Cada espaço tem identidade, permissões e regras próprias, pensado para agências e equipes que acompanham mais de um negócio." },
      { p: "O que acontece se a IA errar?", r: "Cada ação passa por verificações antes de acontecer, e todas ficam registradas — inclusive as que foram barradas. Quando não deve seguir sozinha, a ORBIA passa para uma pessoa com um resumo do que aconteceu." },
      { p: "Como funcionam as cobranças?", r: "A cobrança nasce do mesmo registro da venda, sem redigitar. Várias marcas de pagamento podem ser apresentadas conforme o contrato; a escolha não muda o histórico do cliente." },
      { p: "E se eu quiser sair?", r: "Seus dados podem ser exportados. Você não fica preso a planilha paralela nem a um histórico que só existe dentro da ferramenta." },
    ],
  },
  rodape: {
    colunas: [
      { titulo: "Produto", itens: [{ rotulo: "Como funciona", href: "#como-funciona" }, { rotulo: "Plano", href: "#preco" }, { rotulo: "Cloud", href: "#instalar" }] },
      { titulo: "Aprender", itens: [{ rotulo: "Central de ajuda", href: "@guias" }, { rotulo: "Curso em imagens", href: "@curso" }, { rotulo: "Novidades", href: "@changelog" }, { rotulo: "Para agências", href: "#revendedor" }] },
      { titulo: "Comunidade", itens: [{ rotulo: "Discussions", href: "/discussions" }, { rotulo: "Issues", href: "/issues" }, { rotulo: "Contribuir", href: "/blob/main/CONTRIBUTING.md" }] },
      { titulo: "Projeto", itens: [{ rotulo: "Código aberto", href: "/blob/main/LICENSE" }, { rotulo: "Arquitetura", href: "/blob/main/ARCHITECTURE.md" }, { rotulo: "Segurança", href: "/blob/main/SECURITY.md" }] },
    ],
    nota: "ORBIA · sistema operacional de vendas",
    atualizado: "Página atualizada em",
  },

};
