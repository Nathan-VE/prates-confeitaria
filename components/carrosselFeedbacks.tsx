"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    IconChevronLeft,
    IconChevronRight,
    IconShoppingCart,
    IconStarFilled,
} from "@tabler/icons-react";

export type Feedback = {
    id: string;
    imagem: string;
    textoAlternativo: string;
    titulo: string;
    comentario: string;
    diasAtras: number;
    nota?: number;
};

type CarrosselFeedbacksProps = {
    feedbacks: Feedback[];
    /** Tempo entre as trocas automáticas, em milissegundos (padrão: 3000) */
    intervaloMs?: number;
};

function formatarDias(dias: number) {
    if (dias <= 0) return "Hoje";
    if (dias === 1) return "Há 1 dia";
    return `Há ${dias} dias`;
}

// Os dois trilhos (foto à esquerda e texto à direita) usam o mesmo
// movimento para ficarem sempre sincronizados.
const CLASSE_TRILHO =
    "flex w-full transition-transform duration-500 ease-out motion-reduce:transition-none";

export default function CarrosselFeedbacks({
    feedbacks,
    intervaloMs = 3000,
}: CarrosselFeedbacksProps) {
    const [indice, setIndice] = useState(0);
    const [pausado, setPausado] = useState(false);
    const total = feedbacks.length;

    const irPara = (novoIndice: number) =>
        setIndice(((novoIndice % total) + total) % total);

    const raizRef = useRef<HTMLElement>(null);
    const [visivel, setVisivel] = useState(false);

    // Dispara a animação de entrada uma única vez, quando o carrossel aparece na tela
    useEffect(() => {
        const el = raizRef.current;
        if (!el) return;

        const observador = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisivel(true);
                    observador.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observador.observe(el);
        return () => observador.disconnect();
    }, []);

    // Passa sozinho. Reinicia a contagem a cada troca (inclusive as manuais),
    // pausa com o mouse/foco em cima e respeita "reduzir movimento" do sistema.
    useEffect(() => {
        if (pausado || total < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const temporizador = setTimeout(
            () => setIndice((atual) => (atual + 1) % total),
            intervaloMs
        );
        return () => clearTimeout(temporizador);
    }, [indice, pausado, total, intervaloMs]);

    if (total === 0) return null;

    const estiloTrilho = { transform: `translateX(-${indice * 100}%)` };

    return (
        <section
            ref={raizRef}
            aria-roledescription="carrossel"
            aria-label="Feedbacks de clientes"
            className={`w-full motion-reduce:animate-none motion-reduce:opacity-100 ${visivel ? "animate-entrar-direita" : "opacity-0"
                }`}
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            onFocus={() => setPausado(true)}
            onBlur={() => setPausado(false)}
        >
            <div className="flex flex-row items-start gap-[10px] tablet:gap-8 desktop:gap-14">
                {/* Coluna da esquerda: foto do item + estrelas e dias logo abaixo.
            Não pode ser "flex": o trilho precisa ocupar 100% da coluna
            para o translateX avançar exatamente um slide por vez. */}
                <div className="w-2/5 shrink-0 overflow-hidden">
                    <div className={CLASSE_TRILHO} style={estiloTrilho}>
                        {feedbacks.map((feedback, i) => {
                            const nota = Math.min(5, Math.max(0, feedback.nota ?? 5));

                            return (
                                <div
                                    key={feedback.id}
                                    aria-hidden={i !== indice}
                                    className="flex w-full shrink-0 flex-col items-center gap-4"
                                >
                                    <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl desktop:max-w-md">
                                        <Image
                                            src={feedback.imagem}
                                            alt={feedback.textoAlternativo}
                                            fill
                                            sizes="(min-width: 640px) 320px, 40vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                                        <div
                                            className="flex items-center gap-0.5 [&>svg]:h-3.5 [&>svg]:w-3.5 tablet:[&>svg]:h-5 tablet:[&>svg]:w-5 desktop:[&>svg]:h-6 desktop:[&>svg]:w-6"
                                            role="img"
                                            aria-label={`Nota ${nota} de 5`}
                                        >
                                            {Array.from({ length: 5 }).map((_, posicao) => (
                                                <IconStarFilled
                                                    key={posicao}
                                                    size={20}
                                                    aria-hidden="true"
                                                    className={
                                                        posicao < nota
                                                            ? "text-yellow-400"
                                                            : "text-marrom/20"
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-marrom tablet:text-sm desktop:text-base">
                                            {formatarDias(feedback.diasAtras)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Coluna da direita: texto do cliente + linha fixa com botão e controles */}
                <div className="flex min-w-0 flex-1 flex-col tablet:gap-6 desktop:gap-8">
                    <div className="overflow-hidden">
                        <div
                            className={CLASSE_TRILHO}
                            style={estiloTrilho}
                            aria-live={pausado ? "polite" : "off"}
                        >
                            {feedbacks.map((feedback, i) => (
                                <article
                                    key={feedback.id}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${i + 1} de ${total}`}
                                    aria-hidden={i !== indice}
                                    className="flex w-full shrink-0 flex-col items-start gap-3 tablet:gap-5 desktop:gap-6"
                                >
                                    <h3 className="font-serif text-lg font-bold leading-tight text-rosa-principal tablet:text-3xl desktop:text-5xl">
                                        {feedback.titulo}
                                    </h3>

                                    <p className="text-xs leading-relaxed text-marrom tablet:text-sm desktop:text-lg">
                                        {feedback.comentario}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Botão à esquerda e setas/bolinhas à direita, na mesma linha */}
                    <div className="flex items-center gap-x-3 gap-y-2 tablet:gap-x-5 desktop:gap-x-8">
                        <button
                            type="button"
                            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-rosa-principal px-2.5 py-1.5 text-[11px] font-bold text-white shadow-md transition-colors hover:bg-rosa-secundario focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosa-principal tablet:px-4 tablet:py-2.5 tablet:text-sm desktop:px-6 desktop:py-3 desktop:text-base cursor-pointer hover:opacity-80"
                        >
                            <IconShoppingCart size={16} aria-hidden="true" />
                            Comprar
                        </button>

                        {total > 1 && (
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    onClick={() => irPara(indice - 1)}
                                    aria-label="Feedback anterior"
                                    className="rounded-full p-0.5 text-rosa-principal focus-visible:outline-2 focus-visible:outline-rosa-principal "
                                >
                                    <IconChevronLeft size={14} aria-hidden="true" />
                                </button>

                                {feedbacks.map((feedback, i) => (
                                    <button
                                        key={feedback.id}
                                        type="button"
                                        onClick={() => irPara(i)}
                                        aria-label={`Ir para o feedback ${i + 1}`}
                                        aria-current={i === indice ? "true" : undefined}
                                        className="flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-rosa-principal"
                                    >
                                        <span
                                            className={`block rounded-full transition-all mx-[1px] ${i === indice
                                                ? "h-2.5 w-2.5 bg-rosa-principal tablet:h-3 tablet:w-3 desktop:h-3.5 desktop:w-3.5"
                                                : "h-1.5 w-1.5 bg-rosa-secundario tablet:h-2 tablet:w-2 desktop:h-2.5 desktop:w-2.5"
                                                }`}
                                        />
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => irPara(indice + 1)}
                                    aria-label="Próximo feedback"
                                    className="rounded-full p-0.5 text-rosa-principal focus-visible:outline-2 focus-visible:outline-rosa-principal"
                                >
                                    <IconChevronRight size={14} aria-hidden="true" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
