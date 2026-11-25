import type { Metadata } from "next";

import { PaginaInstalacao } from "@/components/instalacao/PaginaInstalacao";
import { INSTALACAO } from "@/conteudo/rotas";

export const metadata: Metadata = {
  title: "ORBIA Cloud — comece sem instalar nada",
  description: "CRM, atendimento e cobranças na nuvem. Crie sua conta, convide a equipe e comece em minutos — sem servidor, sem script e sem ficha por atendente.",
  alternates: { canonical: INSTALACAO, languages: { "pt-BR": INSTALACAO } },
  openGraph: {
    title: "A ORBIA corre por sua conta. Você cuida do negócio.",
    description: "Seis passos, nenhum terminal: conheça a ORBIA Cloud.",
    url: INSTALACAO,
    locale: "pt_BR",
    type: "article",
    siteName: "ORBIA",
  },
};

export default function Instalar() {
  return <PaginaInstalacao />;
}
