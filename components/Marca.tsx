/**
 * Marca ORBIA, inline: um anel editorial com um ponto que pulsa.
 * O anel é o sistema; o ponto é a decisão que acontece agora.
 */

type Props = { readonly className?: string; readonly rotulo?: string };

export function Logotipo({ className, rotulo = "ORBIA" }: Props) {
  return (
    <svg viewBox="0 0 360 96" className={className} role="img" aria-label={rotulo}>
      <circle cx="48" cy="48" r="31" fill="none" stroke="#bda2ff" strokeWidth="3" />
      <circle cx="48" cy="17" r="6" fill="#00d4ff" />
      <text x="96" y="64" fill="#fbfaff" fontFamily="var(--font-editorial, Georgia), serif" fontSize="52" letterSpacing="2">Orbia</text>
    </svg>
  );
}

export function Simbolo({ className, rotulo = "ORBIA" }: Props) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label={rotulo}>
      <circle cx="48" cy="48" r="31" fill="none" stroke="#bda2ff" strokeWidth="3" />
      <circle cx="48" cy="17" r="6" fill="#00d4ff" />
    </svg>
  );
}
