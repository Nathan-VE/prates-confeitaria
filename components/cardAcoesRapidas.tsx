'use client'
import { useState } from "react"
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react'

export default function CardAcoesRapidas() {
    const [aberto, setAberto] = useState(false)

    return (
        <div
            className={`flex h-[270px] w-full flex-col text-white ${aberto ? `` : `items-center justify-between pt-[95px]`
                }`}
        >

            {/* TÍTULO */}
            <div className="flex w-full overflow-hidden">
                <div
                    className={`
                        flex
                        h-[70px]
                        w-[200px]
                        flex-col
                        items-center
                        justify-center
                        rounded-r-full
                        border-[1_1_1_0]
                        border-white/30
                        py-[10px]
                        pl-[20px]
                        text-[24px]
                        leading-[0.9]
                        backdrop-blur-[13px]

                        transition-all
                        duration-700
                        ease-out

                        ${
                            aberto
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
                    ${aberto ? `flex-1` : ``}
                `}
            >

                <div className="flex w-[270px] items-end justify-end">
                    {/* BOTÃO ABRIR / FECHAR */}
                    <button
                        className="w-[70px] rounded-[15px_15px_0_0] bg-rosa-secundario p-[3px_20px] text-marrom"
                        onClick={() => setAberto(!aberto)}
                    >
                        {aberto ? <IconChevronDown /> : <IconChevronUp />}
                    </button>
                </div>

                {aberto && (
                    <div
                        className={`
                            flex
                            w-[270px]
                            flex-1
                            flex-col
                            items-center
                            justify-end
                            gap-[20px]
                            rounded-[15px_0_0]
                            bg-[url('/imagens/fundo-estampado.png')]
                            bg-cover
                            p-[10px_20px_20px]
                            text-center
                            font-sans

                            transition-all
                            duration-500
                            ease-out

                            ${aberto
                                ? "translate-y-0 opacity-100"
                                : "pointer-events-none translate-y-full opacity-0"
                            }
                        `}
                    >
                        {/* DESCRIÇÃO */}
                        <div className="rounded-[7px] border-white/30 p-[5px] backdrop-blur-[13px]">
                            <h3 className="text-[13px] text-marrom">
                                <strong>Delicie-se</strong> com nossos maravilhosos{" "}
                                <strong>bolos, salgados, cookies</strong> e
                                <strong> muito </strong>mais!
                            </h3>
                        </div>

                        {/* BOTÕES */}
                        <div className="flex w-full flex-row items-center justify-between gap-[20px] text-[11px] font-bold">
                            <button className="w-[100px] rounded-full bg-azul-secundario py-[12px] text-rosa-principal shadow-[0_0_7px_var(--cor-marrom)]">
                                CONTATO
                            </button>

                            <button className="w-[100px] rounded-full bg-rosa-principal py-[12px] text-marrom shadow-[0_0_7px_var(--cor-marrom)]">
                                CARDÁPIO
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}