"use client";

/**
 * Visual ORBIA: um campo pointilhado com um ponto pulsante que caminha
 * conforme o progresso da jornada. Nada de WebGL — a história é editorial.
 */
export function Mesa({ progresso = 0 }: { progresso?: number }) {
  const posicao = Math.min(94, Math.max(6, progresso * 88));
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-border bg-surface orbia-pontilhado">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[58%] w-[58%]">
          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-[14%] rounded-full border border-border/70" />
          <div className="absolute inset-[30%] rounded-full border border-border/50" />
          <div className="absolute left-[18%] top-[18%] h-[64%] w-[64%] rounded-full border border-dashed border-border/60" />
          <div
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pulse shadow-[0_0_22px_4px_rgba(215,255,62,0.35)] transition-[left,top] duration-500 ease-out-slow"
            style={{ left: `${posicao}%`, top: `${50 + Math.sin(progresso * Math.PI * 3) * 22}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
            em movimento
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
        ORBIA · sistema vivo
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[10px] tabular-nums text-text-muted">
        {String(Math.round(progresso * 100)).padStart(3, "0")}%
      </div>
    </div>
  );
}
