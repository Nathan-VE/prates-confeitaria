"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Dispara uma única vez quando o elemento entra na tela.
 */
function useEntrouNaTela(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null);
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
 * O valor 20px em h-[calc(100%+20px)] controla o quanto a imagem
 * invade a section de cima. Se mudar aqui, ajuste também o pb da
 * section anterior na page (sobreposição + folga).
 */
function ImagemQuemSomos() {
    const { ref, visivel } = useEntrouNaTela();

    return (
        <div
            ref={ref}
            className={`pointer-events-none absolute bottom-0 right-0 z-10 h-[calc(100%+20px)] tablet:h-[calc(100%+110px)] transition-all duration-700 ease-out motion-reduce:transition-none desktop:right-[60px] ${
                visivel ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
            <Image
                src="/imagens/confeiteira.png"
                alt="Confeiteira segurando uma fatia do bolo de morango"
                width={670} // troque pelas dimensões reais do arquivo
                height={782} // troque pelas dimensões reais do arquivo
                quality={100}
                sizes="(max-width: 768px) 60vw, 400px"
                className="h-full w-auto max-w-none -scale-x-100 object-contain object-bottom"
            />
        </div>
    );
}

export default function QuemSomos() {
    return (
        // relative: a imagem se posiciona em relação a esta section.
        // Sem overflow-hidden, para a imagem poder vazar para cima.
        <section className="relative flex flex-row items-center justify-center gap-[40px] tablet:gap-[60px] desktop:mx-auto desktop:w-full desktop:max-w-[1100px] desktop:gap-[100px] desktop:px-[60px]">
            <div className="flex w-full flex-col">
                <div className="bg-rosa-secundario p-[20px] pt-[50px] tablet:p-[40px] tablet:pt-[70px] desktop:p-[60px] desktop:pt-[90px] desktop:rounded-t-md">
                    <h1 className="pointer-events-none max-w-[170px] origin-bottom scale-y-[1.25] animate-subir text-[40px] font-bold leading-[0.9] tracking-tight text-marrom tablet:max-w-[320px] tablet:text-[64px] desktop:max-w-[520px] tablet:max-w-[520px] desktop:text-[96px]">
                        O doce sabor do Amor
                    </h1>
                </div>

                <div>
                    <p className="max-w-[170px] p-[10px_20px] text-[12px] text-marrom tablet:max-w-[320px] tablet:p-[16px_40px] tablet:text-[18px] desktop:max-w-[520px] desktop:p-[24px_60px] desktop:text-[22px] tablet:max-w-[520px]">
                        &quot;Com mais de 3 anos de experiência, sabemos que não há
                        ingrediente mais saboroso do que o amor.&quot;
                    </p>
                </div>
            </div>

            <ImagemQuemSomos />
        </section>
    );
}
