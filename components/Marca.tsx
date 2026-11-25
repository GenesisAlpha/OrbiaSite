/**
 * Marca ORBIA, inline: um anel editorial com um ponto que pulsa.
 * O anel é o sistema; o ponto é a decisão que acontece agora.
 */

type Props = { readonly className?: string; readonly rotulo?: string };

export function Logotipo({ className, rotulo = "ORBIA" }: Props) {
  return (
    <svg viewBox="0 0 360 96" className={className} role="img" aria-label={rotulo}>
      <circle cx="48" cy="48" r="31" fill="none" stroke="#e7e1d5" strokeWidth="3" />
      <circle cx="48" cy="17" r="6" fill="#d7ff3e" />
      <text x="96" y="64" fill="#f2f0ec" fontFamily="var(--font-editorial, Georgia), serif" fontSize="52" letterSpacing="6">ORBIA</text>
    </svg>
  );
}

export function Simbolo({ className, rotulo = "ORBIA" }: Props) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label={rotulo}>
      <circle cx="48" cy="48" r="31" fill="none" stroke="#e7e1d5" strokeWidth="3" />
      <circle cx="48" cy="17" r="6" fill="#d7ff3e" />
    </svg>
  );
}
