/** Fonte editorial: guia original do Notion, conferido contra o kit na main em 26/10/2026. */
export const INSTALACAO_ATUALIZADA_EM = "2026-10-26";
export const NOTION_ORIGINAL = "https://large-delivery-f5b.notion.site/CRM-Gratuito-Clone-e-Modifique-395aae7ea32c80ed8194e830ff7a80bf";

export const LINKS_INSTALACAO = {
  vps: "https://www.nuvem.com.br/52708-141-3-52.html",
  dominio: "https://www.nuvem.com.br/52708-77-3-32.html",
  supabase: "https://supabase.com/dashboard",
  tokens: "https://supabase.com/dashboard/account/tokens",
  openrouter: "https://openrouter.ai/keys",
  anthropic: "https://console.anthropic.com/settings/keys",
  openai: "https://platform.openai.com/api-keys",
} as const;

export const ETAPAS_INSTALACAO = [
  { id: "servidor", titulo: "Contrate o servidor", curto: "Servidor" },
  { id: "acesso", titulo: "Entre na sua VPS", curto: "Acesso à VPS" },
  { id: "supabase", titulo: "Gere o token do Supabase", curto: "Token do Supabase" },
  { id: "dominio", titulo: "Aponte o seu domínio", curto: "Domínio" },
  { id: "instalacao", titulo: "Instale o CRM", curto: "Instalação" },
  { id: "primeiro-acesso", titulo: "Faça o primeiro acesso", curto: "Primeiro acesso" },
  { id: "canais de atendimento", titulo: "Conecte o canais de atendimento", curto: "canais de atendimento" },
  { id: "inteligencia-artificial", titulo: "Prepare a sua IA", curto: "Inteligência artificial" },
] as const;

/** O valor secreto é lido sem eco e fora do histórico; fica disponível ao install.sh. */
export const COMANDOS_INSTALACAO = {
  ssh: "ssh root@SEU_IP",
  sshComPorta: "ssh -p SUA_PORTA root@SEU_IP",
  token: "read -r -s -p 'Cole o token do Supabase e pressione Enter: ' SUPABASE_ACCESS_TOKEN; export SUPABASE_ACCESS_TOKEN; printf '\\n'",
  instalar: "git clone https://github.com/melgarafael/ORBIA.git deskcommcrm\ncd deskcommcrm\nbash nuvem-setup-kit/install.sh\nunset SUPABASE_ACCESS_TOKEN",
  retomar: "cd ~/deskcommcrm\nbash nuvem-setup-kit/install.sh",
  assistente: "Clone https://github.com/melgarafael/ORBIA na minha VPS e instale o CRM seguindo nuvem-setup-kit/install.sh e o guia .agents/skills/deskcomm-instalar/SKILL.md. Use o token pessoal do Supabase para criar o projeto automaticamente, sem me pedir as quatro credenciais do banco. Eu vou colar o token diretamente no terminal, em um campo oculto. Conduza a instalação, me pergunte os outros dados quando precisar e resolva os erros sem expor segredos.",
  saude: "bash nuvem-setup-kit/healthcheck.sh",
  atualizar: "bash nuvem-setup-kit/update.sh",
  backup: "bash nuvem-setup-kit/backup.sh",
  senha: "bash nuvem-setup-kit/reset-password.sh seu@email.com",
  mfa: "bash nuvem-setup-kit/reset-mfa.sh seu@email.com",
} as const;
