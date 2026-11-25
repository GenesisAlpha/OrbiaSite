import { DM_Mono, Instrument_Serif } from "next/font/google";

import type { Idioma } from "@/conteudo";

const editorial = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-editorial",
});

const mono = DM_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

/**
 * Casca do documento, compartilhada pelos três layouts raiz.
 * Um layout raiz por idioma porque o atributo `lang` precisa ser o da página.
 * A fonte é editorial (serifada), não a tipografia "de dashboard" de IA.
 */
export function Documento({ lang, children }: { lang: Idioma; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${editorial.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
