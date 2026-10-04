"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dispara uma única vez quando o elemento entra na tela.
 */
function useEntrouNaTela(threshold = 0.2) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visivel };
}

/**
 * Altere SOMENTE este valor para controlar o quanto a imagem
 * invade a section de cima (em px). Precisa ser igual nas duas classes
 * abaixo (h-[calc(100%+60px)]).
 */
function ImagemQuemSomos() {
  const { ref, visivel } = useEntrouNaTela();

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute bottom-0 right-0 z-10 h-[calc(100%+20px)] transition-all duration-700 ease-out motion-reduce:transition-none ${
        visivel ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <img
        src="/imagens/lucas-e-rayanne.png"
        alt="Foto do Lucas abraçado com a Rayanne."
        className="h-full w-auto max-w-none -scale-x-100 object-contain object-bottom"
      />
    </div>
  );
}

export default function QuemSomos() {
  return (
    // relative: a imagem se posiciona em relação a esta section.
    // Sem overflow-hidden, para a imagem poder vazar para cima.
    <section className="relative flex flex-row items-center justify-center gap-[40px]">
      <div className="flex w-full flex-col">
        <div className="bg-rosa-secundario p-[20px] pt-[50px]">
          <h1 className="pointer-events-none max-w-[170px] origin-bottom scale-y-[1.25] animate-subir text-[40px] font-bold leading-[0.9] tracking-tight text-marrom">
            O doce sabor do Amor
          </h1>
        </div>

        <div>
          <p className="max-w-[170px] p-[10px_20px] text-[12px] text-marrom">
            "Com mais de 3 anos de experiência, sabemos que não há ingrediente
            mais saboroso do que o amor."
          </p>
        </div>
      </div>

      <ImagemQuemSomos />
    </section>
  );
}
