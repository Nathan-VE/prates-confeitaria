'use client'
import { useState, useEffect, useRef } from "react"
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react'

export default function CardAcoesRapidas() {
    const [aberto, setAberto] = useState(false)

    // animação de entrada do título
    const [carregado, setCarregado] = useState(false)

    // animação do painel (montado = existe no DOM, visivel = posição final)
    const [painelMontado, setPainelMontado] = useState(false)
    const [painelVisivel, setPainelVisivel] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const id = requestAnimationFrame(() => setCarregado(true))
        return () => {
            cancelAnimationFrame(id)
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    function alternar() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        if (!aberto) {
            setAberto(true)
            setPainelMontado(true)
            // espera o painel renderizar fora da tela antes de subir
            requestAnimationFrame(() =>
                requestAnimationFrame(() => setPainelVisivel(true))
            )
        } else {
            setAberto(false)
            setPainelVisivel(false)
            // desmonta só depois da animação de descida (duration-500)
            timeoutRef.current = setTimeout(() => setPainelMontado(false), 500)
        }
    }

    return (
        <div
            className={`flex h-[270px] w-full flex-col overflow-hidden text-white tablet:h-[340px] desktop:h-[420px] ${painelMontado ? `` : `items-center justify-between pt-[95px] tablet:pt-[120px] desktop:pt-[160px]`
                }`}
        >

            {/* TÍTULO */}
            <div className="flex w-full overflow-hidden">
                <div
                    className={`
                        flex
                        h-[70px]
                        w-[200px]
                        tablet:h-[90px]
                        tablet:w-[280px]
                        desktop:h-[110px]
                        desktop:w-[360px]
                        flex-col
                        items-center
                        justify-center
                        rounded-r-full
                        border-[1_1_1_0]
                        border-white/30
                        py-[10px]
                        pl-[20px]
                        text-[24px]
                        tablet:text-[32px]
                        desktop:text-[40px]
                        leading-[0.9]
                        backdrop-blur-[13px]

                        transition-all
                        duration-700
                        ease-out

                        ${painelMontado || !carregado
                        ? "-translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    }
                    `}
                >
                    <h1>
                        O <strong>SABOR</strong> QUE <strong>VOCÊ BUSCA</strong>
                    </h1>
                </div>
            </div>

            {/* AÇÕES RÁPIDAS */}
            <div
                className={`
                    flex
                    flex-col
                    items-center
                    justify-center
                    ${painelMontado ? `flex-1` : ``}
                `}
            >

                <div
                    className={`
                        flex
                        w-[270px]
                        tablet:w-[340px]
                        desktop:w-[420px]
                        items-end
                        justify-end

                        ${painelMontado && (painelVisivel || !aberto)
                        ? "transition-transform duration-500 ease-out"
                        : ""}

                        ${painelMontado && !painelVisivel
                        ? "translate-y-[170px] tablet:translate-y-[240px] desktop:translate-y-[320px]"
                        : "translate-y-0"}
                    `}
                >
                    {/* BOTÃO ABRIR / FECHAR */}
                    <button
                        className="w-[70px] rounded-[15px_15px_0_0] bg-rosa-secundario p-[3px_20px] text-marrom tablet:w-[90px] desktop:w-[110px]"
                        onClick={alternar}
                    >
                        {aberto ? <IconChevronDown /> : <IconChevronUp />}
                    </button>
                </div>

                {painelMontado && (
                    <div
                        className={`
                            flex
                            w-[270px]
                            tablet:w-[340px]
                            desktop:w-[420px]
                            flex-1
                            flex-col
                            items-center
                            justify-end
                            gap-[20px]
                            tablet:gap-[28px]
                            rounded-[15px_0_0]
                            bg-[url('/imagens/fundo-estampado.png')]
                            bg-cover
                            p-[10px_20px_20px]
                            tablet:p-[14px_28px_28px]
                            desktop:p-[18px_36px_36px]
                            text-center
                            font-sans
                            
                            transition-all
                            duration-500
                            ease-out

                            ${painelVisivel
                                ? "translate-y-0 opacity-100"
                                : "pointer-events-none translate-y-full opacity-0"
                            }
                        `}
                    >
                        {/* DESCRIÇÃO */}
                        <div className="rounded-[7px] border-white/30 p-[5px] bg-azul-secundario tablet:p-[8px] desktop:p-[12px]">
                            <h3 className="text-[13px] text-marrom tablet:text-[16px] desktop:text-[20px]">
                                Desde<strong> 2023</strong>, criando<strong> doces momentos! 💗</strong>  Conheça nossos <strong>produtos</strong> e deixe seu dia <strong>mais doce</strong>.
                            </h3>
                        </div>

                        {/* BOTÕES */}
                        <div className="flex w-full flex-row items-center justify-between gap-[20px] text-[11px] font-bold tablet:text-[14px] desktop:text-[16px]">
                            <button className="w-[100px] rounded-full bg-azul-secundario py-[12px] text-rosa-principal tablet:w-[130px] tablet:py-[14px] desktop:w-[170px] desktop:py-[16px]">
                                CONTATO
                            </button>

                            <button className="w-[100px] rounded-full bg-rosa-principal py-[12px] text-marrom tablet:w-[130px] tablet:py-[14px] desktop:w-[170px] desktop:py-[16px]">
                                CARDÁPIO
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
